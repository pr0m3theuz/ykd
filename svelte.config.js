import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		// Development server config for Docker
		vite: {
			server: {
				host: '0.0.0.0',
				port: 5173,
				strictPort: true,
				watch: {
					usePolling: true,
					interval: 1000
				},
				hmr: {
					clientPort: 5173
				}
			}
		}
	}
};

export default config;
