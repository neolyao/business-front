import axios from "axios";
var qs = require('querystring')

export const page= (data) =>{
  return axios.request({
    url:'/api/inventoryLog/page',
    data:qs.stringify(data),
    method:'post'
  })
}

export const findType= () =>{
  return axios.request({
    url:'/api/inventoryLog/findType',
    method:'get'
  })
}
