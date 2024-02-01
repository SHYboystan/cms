import type { AxiosResponse } from "axios";
import { message } from "ant-design-vue";

export function handleResponseError(
  response: AxiosResponse
): Promise<AxiosResponse> {
  return new Promise((resolve, reject) => {
    const { status, data } = response;
    console.log(status, "status");
    if (status === 200) {
      if (data.error) {
        reject(data.error);
      }
      resolve(data.data);
    } else {
      message.error("请求服务器错误");
    }
  });
}
