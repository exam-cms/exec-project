import request from "../utils/request";
export let getstudent = () => {
  return request.get("/manger/student");
};
export let getClassNo = (params: object) => {
  return request.get("/manger/grade", params);
};

//
export let addClassNo = (params: object) => {
  console.log(params);
  return request.post("/manger/grade", params);
};

//
export let deleteClass = (params: object) => {
  console.log(params);
  return request.delete("/manger/grade/delete", {data:params});
};

// //
// export let addClassNo=(params:object)=>{
//     console.log(params)
//     return request.post("/manger/grade",params)
// }

// export let addClassNo=(params:object)=>{
//     console.log(params)
//     return request.post("/manger/grade",params)
// }

export let GradNew = (params: object) => {
  return request.get("/manger/student/new", params);
};

export let newClass = (params: object) => {
  console.log("newClass...");
  return request.get("/manger/grade/new", params);
};

export let updateClassNo = (params: object) => {
  console.log(params);
  return request.put("/manger/grade/update", {data:params});
};

//
export let getSubject = (params: object) => {
  return request.get("/exam/subject", params);
};
//
export let getRoom = (params: object) => {
  return request.get("/manger/room", params);
};

//获取教室
export let GetclassRome = (params: object) => {
  return request.get("/manger/room", params);
};
//添加教室
export let AddclassRome = (params: object) => {
  return request.post("/manger/room", params);
};
//删除教室
export let DelclassRome = (params: object) => {
  return request.delete("/manger/room/delete", { data: params });
};
