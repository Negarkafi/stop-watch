import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { InlineConfig } from 'vitest/node';
import type { UserConfig } from 'vite';

type ViteConfig = UserConfig & { test: InlineConfig };

const config: ViteConfig = {
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
};

export default defineConfig(config);
