import service from "@/api/index";

export const Login = (params) => {
  return service.post("/login", params);
};
