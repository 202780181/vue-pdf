// @ts-ignore
import path from 'path';
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
// @ts-ignore
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const pathResolve = (pathStr: string) => {
    // @ts-ignore
    return path.resolve(__dirname, pathStr);
};
// jax for example js
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx({
            transformOn: true
        }),
        vueI18n({
            include: pathResolve('./src/locales/**')
        }),
        new PrerenderSPAPlugin({
            // @ts-ignore
            staticDir: path.join(__dirname, 'dist'),
            routes: [ '/' ],
            renderer: new Renderer({
                inject: {
                    foo: 'bar',
                },
                headless: false,
                renderAfterDocumentEvent: 'render-event',
            }),
        })
    ],
    css: {
        preprocessorOptions: {
            less: {}
        }
    },
    resolve: {
        alias: {
            "@": pathResolve('src'),
            "plugins": pathResolve("src/plugins"),
        }
    },
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
    },
    server: {
        port: 3000,
        proxy: {
            '/imgSource': {
                target: 'https://t7.baidu.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    },
    base: './',
    build: {
        target: 'es2015',
        outDir: 'dist',
        sourcemap: false,
        manifest: true,
        cssCodeSplit: true,
        assetsInlineLimit: 4096,
        polyfillDynamicImport: true
    },
})

