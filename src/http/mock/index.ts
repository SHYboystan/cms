export default [
  {
    url: "/mock/login", // 模拟登录的链接
    method: "post", // 请求方式
    timeout: 500, // 超时时间
    statusCode: 200, // 返回的http状态码
    response: (e) => {
      const { body } = e;
      if (body.username !== "admin" || body.password !== "admin") {
        return {
          code: 200,
          error: "账户不存在",
        };
      } else {
        return {
          code: 200,
          message: "登录成功",
          data: {
            name: "Admin",
            token: "Admin",
          },
        };
      }
    },
  },
  {
    url: "/mock/table", // 模拟登录的链接
    method: "post", // 请求方式
    timeout: 500, // 超时时间
    statusCode: 200, // 返回的http状态码
    response: () => {
      let list = [];
      let params = {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "十万巫蛊十二峒，十二峒岭难寻踪。",
        tags: ["nice", "developer"],
      };
      for (let i = 0; i < 10; i++) {
        list.push(params);
      }
      return {
        code: 200,
        message: "登录成功",
        data: {
          list,
          total: 10,
        },
      };
    },
  },
];
