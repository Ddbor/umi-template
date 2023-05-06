import '@umijs/max/typings';

declare global {
  type ApiResponse<T = any> = {
    data: T; // 返回的数据
    info: {
      ok: boolean;
      message?: string;
    };
  };
}
