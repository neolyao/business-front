import axios from "axios";
var qs = require('querystring')

export const page= (data) =>{
  return axios.request({
    url:'/api/inventoryLog/page',
    data:qs.stringify(data),
    method:'post'
  })
}

export const deletes= (data) =>{
  return axios.request({
    url:'/api/inventoryLog/deletes',
    data:qs.stringify(data),
    method:'post'
  })
}
