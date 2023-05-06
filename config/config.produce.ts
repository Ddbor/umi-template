// 生产环境配置
import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    'process.env.UMI_ENV': 'prod',
    'process.env.API_BASE_URL': '/',
  },
});
