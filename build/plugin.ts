import { PluginOption } from 'vite'

import react from '@vitejs/plugin-react'

// 自动引入
import AutoImport from 'unplugin-auto-import/vite'

import UnoCSS from 'unocss/vite'

import { pathResolve } from './utils'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [react()]
  //
  vitePlugins.push(
    AutoImport({
      imports: ['react'],
      dts: pathResolve('types/AutoImportReact.d.ts'),
    }),
  )

  vitePlugins.push(
    UnoCSS({
      configFile: "/build/unocss.config.ts",
    }),
  )

  return vitePlugins
}
