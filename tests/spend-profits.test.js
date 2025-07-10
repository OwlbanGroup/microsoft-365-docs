/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/dom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, '../dashboard/spend-profits.html'), 'utf8');

describe('Spend Profits Page', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    // Mock fetch
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('message div is hidden initially', () => {
    const messageDiv = screen.getByRole('region', { hidden: true }) || screen.getByText('', { selector: '#message' });
    expect(messageDiv).toHaveStyle('display: none');
  });

  test('shows error message if required fields are missing', async () => {
    const form = screen.getByRole('form') || screen.getByTestId('spendForm') || document.getElementById('spendForm');
    const messageDiv = document.getElementById('message');

    // Clear inputs
    fireEvent.change(screen.getByLabelText(/Amount/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Currency/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Payment Method ID/i), { target: { value: '' } });

    fireEvent.submit(form);

    await waitFor(() => {
      expect(messageDiv).toHaveTextContent('Please fill in all required fields.');
      expect(messageDiv).toHaveClass('error');
      expect(messageDiv.style.display).toBe('block');
    });
  });

  test('shows success message on successful submission', async () => {
    const form = document.getElementById('spendForm');
    const messageDiv = document.getElementById('message');

    // Fill inputs
    fireEvent.change(screen.getByLabelText(/Amount/i), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText(/Currency/i), { target: { value: 'usd' } });
    fireEvent.change(screen.getByLabelText(/Payment Method ID/i), { target: { value: 'pm_card_visa' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Test payment' } });

    // Mock fetch response
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ paymentIntent: { id: 'pi_12345' } }),
    });

    fireEvent.submit(form);

    await waitFor(() => {
      expect(messageDiv).toHaveTextContent('Success! PaymentIntent created with ID: pi_12345');
      expect(messageDiv).toHaveClass('success');
      expect(messageDiv.style.display).toBe('block');
    });
  });

  test('shows error message on failed submission', async () => {
    const form = document.getElementById('spendForm');
    const messageDiv = document.getElementById('message');

    // Fill inputs
    fireEvent.change(screen.getByLabelText(/Amount/i), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText(/Currency/i), { target: { value: 'usd' } });
    fireEvent.change(screen.getByLabelText(/Payment Method ID/i), { target: { value: 'pm_card_visa' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Test payment' } });

    // Mock fetch response with error
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Payment failed' }),
    });

    fireEvent.submit(form);

    await waitFor(() => {
      expect(messageDiv).toHaveTextContent('Error: Payment failed');
      expect(messageDiv).toHaveClass('error');
      expect(messageDiv.style.display).toBe('block');
    });
  });

  test('shows network error message on fetch failure', async () => {
    const form = document.getElementById('spendForm');
    const messageDiv = document.getElementById('message');

    // Fill inputs
    fireEvent.change(screen.getByLabelText(/Amount/i), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText(/Currency/i), { target: { value: 'usd' } });
    fireEvent.change(screen.getByLabelText(/Payment Method ID/i), { target: { value: 'pm_card_visa' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Test payment' } });

    // Mock fetch to throw error
    global.fetch.mockRejectedValueOnce(new Error('Network failure'));

    fireEvent.submit(form);

    await waitFor(() => {
      expect(messageDiv).toHaveTextContent('Network error: Network failure');
      expect(messageDiv).toHaveClass('error');
      expect(messageDiv.style.display).toBe('block');
    });
  });
});
