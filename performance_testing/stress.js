import http from "k6/http"
import {check} from "k6"
// import { Duration } from "luxon"
// import { Duration } from "luxon"

export const options={
//  stages:[
//     {Duration:"1m",target:200},
//     {Duration:"5m",target:200},
//     {Duration:"30s",target:0}
// ]
     vus:10,
     Duration:"3s"
}

const params={
headers:{
    // "Authorization":"12234vxcjnzsfvwajfls",
    "Cache-Control": "no-cache"
}
}

export default function(){
 const res=http.get("https://gorest.co.in/public/v2/users/",params)
 check(res,{
    "valid status res":(res)=>res.status===200
 })
}