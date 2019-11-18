import axios from "axios";
var qs = require('querystring')

export const page= (data) =>{
  return axios.request({
    url:'/api/complain/page',
    data:qs.stringify(data),
    method:'post'
  })
}
