
import request from "../utils/request";

export let getstudent = () => {
  return request.get("/manger/grade");
};