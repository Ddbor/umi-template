export default (memo: any) => {
  memo.appConfig = {
    message: {
      // 配置 message 最大显示数，超过限制时，最早的消息会被自动关闭
      maxCount: 1,
    },
  };

  return memo;
};
