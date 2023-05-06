import { RequestConfig } from '@umijs/max';
import { message as antdMessage } from 'antd';

// 错误处理方案： 错误类型
export enum ErrorShowType {
  SILENT = 0, // 不提示
  WARN_MESSAGE = 1, // 警告提示
  ERROR_MESSAGE = 2, // 错误提示
  NOTIFICATION = 3, // 通知提示
  REDIRECT = 9, // 页面跳转
}

// 运行时配置
const request: RequestConfig = {
  // 统一的请求设定
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: process.env.API_BASE_URL,

  // 请求错误处理
  errorConfig: {
    // 错误抛出
    errorThrower: (res: ApiResponse) => {
      const { info } = res;
      if (!info?.ok) {
        const error: any = new Error(info?.message || '');
        error.name = 'BizError';
        error.info = res;
        // 抛出自制的错误
        throw {
          ...error,
        };
      }
    },
    errorHandler: (error: any, opts: any) => {
      if (opts?.skipErrorHandler) throw error;
      // 我们的 errorThrower 抛出的错误。
      if (error.name === 'BizError') {
        const errorInfo = error.info;
        if (errorInfo?.message) {
          antdMessage.error(errorInfo.message);
        }
      } else if (error.response) {
        // Axios 的错误
        // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
        antdMessage.error(`Response status:${error.response.status}`);
      } else if (error.request) {
        // 请求已经成功发起，但没有收到响应
        // \`error.request\` 在浏览器中是 XMLHttpRequest 的实例，
        // 而在node.js中是 http.ClientRequest 的实例
        antdMessage.error('None response! Please retry.');
      } else {
        // 发送请求时出了点问题
        antdMessage.error('Request error, please retry.');
      }
    },
  },

  // 请求拦截器
  requestInterceptors: [
    (config: any) => {
      return config;
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      const data = response.data as ApiResponse;
      // 成功的提示
      if (data.info?.ok === true && data.info?.message) {
        antdMessage.success(data.info?.message);
      }
      return response;
    },
  ],
};

export default request;
