import axios from "axios";

export const findPage= ({search,pageNo,pageSize}) =>{
  const data = search || {}
  return axios.request({
    url:'findOrder',
    data:data,
    method:'post'
  })
}
