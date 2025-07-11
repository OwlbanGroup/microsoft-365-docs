/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, '../dashboard/spend-profits.html'), 'utf8');

describe('Spend Profits Page', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    // Mock fetch
    global.fetch = jest.fn();

    // Load the script to attach event listeners
    const script = document.createElement('script');
    script.textContent = `
      const form = document.getElementById('spendForm');
      const messageDiv = document.getElementById('message');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        messageDiv.style.display = 'none';
        messageDiv.textContent = '';
        messageDiv.className = 'message';

        const amount = parseInt(form.amount.value, 10);
        const currency = form.currency.value;
        const payment_method = form.payment_method.value.trim();
        const description = form.description.value.trim();

        if (!amount || !currency || !payment_method) {
          messageDiv.textContent = 'Please fill in all required fields.';
          messageDiv.classList.add('error');
          messageDiv.style.display = 'block';
          return;
        }

        try {
          const response = await fetch('/api/spend-profits', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer YOUR_AUTH_TOKEN'
            },
            body: JSON.stringify({ amount, currency, payment_method, description })
          });

          const data = await response.json();

          if (response.ok) {
            messageDiv.textContent = 'Success! PaymentIntent created with ID: ' + data.paymentIntent.id;
            messageDiv.classList.add('success');
            form.reset();
          } else {
            messageDiv.textContent = 'Error: ' + (data.error || 'Unknown error');
            messageDiv.classList.add('error');
          }
        } catch (err) {
          messageDiv.textContent = 'Network error: ' + err.message;
          messageDiv.classList.add('error');
        }

        messageDiv.style.display = 'block';
      });
    `;
    document.body.appendChild(script);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  function changeInput(labelText, value) {
    const label = Array.from(document.querySelectorAll('label')).find(l => l.textContent.includes(labelText));
    if (!label) throw new Error(`Label with text "${labelText}" not found`);
    const inputId = label.getAttribute('for');
    const input = document.getElementById(inputId);
    if (!input) throw new Error(`Input with id "${inputId}" not found`);
    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function submitForm() {
    const form = document.getElementById('spendForm');
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  }

  test('message div is hidden initially', () => {
    const messageDiv = document.getElementById('message');
    expect(messageDiv.style.display).toBe('none');
  });

  test('shows error message if required fields are missing', (done) => {
    const messageDiv = document.getElementById('message');

    changeInput('Amount', '');
    changeInput('Currency', '');
    changeInput('Payment Method ID', '');

    document.getElementById('spendForm').addEventListener('submit', (e) => {
      e.preventDefault();
      setTimeout(() => {
        expect(messageDiv.textContent).toBe('Please fill in all required fields.');
        expect(messageDiv.classList.contains('error')).toBe(true);
        expect(messageDiv.style.display).toBe('block');
        done();
      }, 0);
    });

    submitForm();
  });

  test('shows success message on successful submission', (done) => {
    const messageDiv = document.getElementById('message');

    changeInput('Amount', '100');
    changeInput('Currency', 'usd');
    changeInput('Payment Method ID', 'pm_card_visa');
    changeInput('Description', 'Test payment');

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ paymentIntent: { id: 'pi_12345' } }),
    });

    document.getElementById('spendForm').addEventListener('submit', (e) => {
      e.preventDefault();
      setTimeout(() => {
        expect(messageDiv.textContent).toBe('Success! PaymentIntent created with ID: pi_12345');
        expect(messageDiv.classList.contains('success')).toBe(true);
        expect(messageDiv.style.display).toBe('block');
        done();
      }, 0);
    });

    submitForm();
  });

  test('shows error message on failed submission', (done) => {
    const messageDiv = document.getElementById('message');

    changeInput('Amount', '100');
    changeInput('Currency', 'usd');
    changeInput('Payment Method ID', 'pm_card_visa');
    changeInput('Description', 'Test payment');

    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Payment failed' }),
    });

    document.getElementById('spendForm').addEventListener('submit', (e) => {
      e.preventDefault();
      setTimeout(() => {
        expect(messageDiv.textContent).toBe('Error: Payment failed');
        expect(messageDiv.classList.contains('error')).toBe(true);
        expect(messageDiv.style.display).toBe('block');
        done();
      }, 0);
    });

    submitForm();
  });

  test('shows network error message on fetch failure', (done) => {
    const messageDiv = document.getElementById('message');

    changeInput('Amount', '100');
    changeInput('Currency', 'usd');
    changeInput('Payment Method ID', 'pm_card_visa');
    changeInput('Description', 'Test payment');

    global.fetch.mockRejectedValueOnce(new Error('Network failure'));

    document.getElementById('spendForm').addEventListener('submit', (e) => {
      e.preventDefault();
      setTimeout(() => {
        expect(messageDiv.textContent).toBe('Network error: Network failure');
        expect(messageDiv.classList.contains('error')).toBe(true);
        expect(messageDiv.style.display).toBe('block');
        done();
      }, 0);
    });

    submitForm();
  });
});
