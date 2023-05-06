// 公共配置
import { defineConfig } from '@umijs/max';
import { proxy } from './proxy.config';
import { routes } from './routes.config';

export default defineConfig({
  hash: true,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  history: {
    type: 'hash',
  },
  routes,
  proxy,
  icons: { autoInstall: {} },
  npmClient: 'pnpm',
  tailwindcss: {},
});
