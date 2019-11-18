import axios from "axios";
var qs = require('querystring')

export const findPage= (data) =>{
  return axios.request({
    url:'findOrder',
    data:qs.stringify(data),
    method:'post'
  })
}


export const orderAddressFind= (data) =>{
  return axios.request({
    url:'/api/orderAddress/find',
    data:qs.stringify(data),
    method:'post'
  })
}

