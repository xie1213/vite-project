import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
export default defineConfig((mode: ConfigEnv) => {
  // 加载当前模式下的环境变量
  const env = loadEnv(mode.mode, process.cwd());
  const { VITE_PORT, VITE_LOCAL_IP, VITE_DROP_CONSOLE } = env
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'src/types/auto-import.d.ts',
        eslintrc: {
          enabled: true, // 会在根目录下自动生成 .eslintrc-auto-import.json 文件
        }
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), 'src/assets/svg-icon')],
        // 指定symbolId格式
        symbolId: '[name]',
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler" // or 'modern'
        }
      }
    },

    // 其他配置选项
    define: {
      'process.env': env, // 将环境变量传递给应用
    },
    server: {
      port: VITE_PORT as unknown as number, // 设置开发服务器端口
      open: true, // 启动时自动打开浏览器
      host: VITE_LOCAL_IP || 'localhost', // 设置本地 IP
      hmr: true,
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ["console.log", "debugger"] : [], // 根据设置清理控制台输出
    },
    // 你可以根据 env 进行不同的配置
    base: env.VITE_BASE_URL || '/', // 使用环境变量设置基本路径
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }

    }
  };
});


