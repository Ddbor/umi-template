// 开发时HTTP代理配置
export const proxy = {
  // 本地登录地址
  '/user': {
    target: 'http://pm.linkworld.cc/',
    changeOrigin: true,
    secure: false,
    cookieDomainRewrite: '192.168.10.160',
  },
  '/baseApi': {
    target: 'http://192.168.10.160:8000/',
    changeOrigin: true,
    secure: false,
    cookieDomainRewrite: '192.168.10.160',
    pathRewrite: { '^/baseApi': '' },
  },
};
