/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, '../dashboard/index.html'), 'utf8');

describe('LAN Setup Dashboard Frontend', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    // Mock fetch
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('loads and displays LAN server details and subsidiaries', async () => {
    const mockConfig = {
      lan_server: {
        hostname: 'test-host',
        ip_address: '192.168.1.1',
        subnet_mask: '255.255.255.0',
        gateway: '192.168.1.254',
        dns_servers: ['8.8.8.8', '8.8.4.4'],
      },
      subsidiaries: [
        {
          name: 'Subsidiary A',
          location: 'Location A',
          connection_type: 'VPN',
          vpn_endpoint: 'vpn.subsidiarya.com',
        },
      ],
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockConfig,
    });

    // Load script.js
    await import('../dashboard/script.js');

    // Wait for dashboard loaded log
    await waitFor(() => {
      expect(screen.getByText(/Dashboard loaded./i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Hostname:/i).textContent).toContain('test-host');
    expect(screen.getByText(/Subsidiary A/i)).toBeInTheDocument();
  });

  test('allows editing and saving LAN server details', async () => {
    const mockConfig = {
      lan_server: {
        hostname: 'test-host',
        ip_address: '192.168.1.1',
        subnet_mask: '255.255.255.0',
        gateway: '192.168.1.254',
        dns_servers: ['8.8.8.8', '8.8.4.4'],
      },
      subsidiaries: [],
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockConfig,
    });

    await import('../dashboard/script.js');

    // Click edit LAN button
    fireEvent.click(screen.getByText('Edit LAN Server Details'));

    // Change hostname input
    const hostnameInput = screen.getByLabelText('Hostname:');
    fireEvent.change(hostnameInput, { target: { value: 'new-host' } });

    // Mock PUT response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Configuration updated successfully' }),
    });

    // Submit form
    fireEvent.submit(screen.getByRole('form', { name: /lan-edit-form/i }));

    await waitFor(() => {
      expect(screen.getByText(/LAN server details updated successfully./i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Hostname:/i).textContent).toContain('new-host');
  });

  test('allows editing and saving subsidiaries', async () => {
    const mockConfig = {
      lan_server: {},
      subsidiaries: [
        {
          name: 'Subsidiary A',
          location: 'Location A',
          connection_type: 'VPN',
          vpn_endpoint: 'vpn.subsidiarya.com',
        },
      ],
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockConfig,
    });

    await import('../dashboard/script.js');

    // Click edit subsidiaries button
    fireEvent.click(screen.getByText('Edit Subsidiaries'));

    // Change subsidiary name
    const nameInput = screen.getByDisplayValue('Subsidiary A');
    fireEvent.change(nameInput, { target: { value: 'Subsidiary A Updated' } });

    // Mock PUT response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Configuration updated successfully' }),
    });

    // Submit form
    fireEvent.submit(screen.getByRole('form', { name: /subsidiaries-edit-form/i }));

    await waitFor(() => {
      expect(screen.getByText(/Subsidiaries updated successfully./i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Subsidiary A Updated/i)).toBeInTheDocument();
  });
});
