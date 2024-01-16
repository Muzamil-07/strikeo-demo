import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
    const base_url = mode === 'development'? 'http://localhost:3000' : 'http://strikeo.com';
    return {
        plugins: [react()],
        build: {
            outDir: 'build',
            assetsDir: 'assets',
            emptyOutDir: true,
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
            },
        },
        server: {
            proxy: {
                '/api': {
                    target: base_url,
                    changeOrigin: true,
                },
            },
        },
    };
});