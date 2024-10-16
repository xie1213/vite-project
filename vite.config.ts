import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

interface Env {
  VITE_PORT: number
  VITE_LOCAL_IP?: string
  VITE_DROP_CONSOLE?: string
  VITE_BASE_URL?: string
}


export default defineConfig((mode: ConfigEnv) => {

  const env = loadEnv(mode.mode, process.cwd()) as unknown as Env;

  const { VITE_PORT, VITE_LOCAL_IP, VITE_DROP_CONSOLE, VITE_BASE_URL } = env
  // 插件配置
  const plugins = [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/types/auto-import.d.ts',
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svg-icon')],
      symbolId: '[name]',
    }),
  ]

  // 开发服务器配置
  const serverConfig = {
    port: Number(VITE_PORT) || 3000, // 默认端口
    open: true,
    host: VITE_LOCAL_IP || 'localhost',
    hmr: true,
  }

  const cssConfig = {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  }

  return {
    plugins,
    css: cssConfig,
    define: {
      'process.env': env,
    },
    server: serverConfig,
    esbuild: {
      pure: VITE_DROP_CONSOLE === 'true' ? ["console.log", "debugger"] : [],
    },
    base: VITE_BASE_URL || '/',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  }
})
