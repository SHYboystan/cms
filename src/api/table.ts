import service from "@/api/index";

export const table = (params) => {
  return service.post("/table", params);
};
