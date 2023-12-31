import path from 'path';

import { PlaywrightTestConfig, devices } from '@playwright/test';

const PORT = process.env.PORT || 3000;
const baseURL = `http://localhost:${PORT}`;

const config: PlaywrightTestConfig = {
  timeout: 5 * 1000,
  testDir: path.join(__dirname, './src/__test__/e2e'),
  retries: 0,
  webServer: {
    command: 'npm start',
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: true,
  },
  use: {
    baseURL,
  },
  reporter: [['html', { open: 'always' }]],
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
};
export default config;
