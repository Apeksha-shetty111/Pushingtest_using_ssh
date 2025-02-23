import http from "k6/http"
import { check, sleep } from "k6"
// import { Duration } from "luxon"

export const options={
    vus:1,
    Duration:"5s"

}

export default function(){
    const url="https://api.restful-api.dev/objects"
    const body=JSON.stringify({
        name:"oppoA5s"

    } )
    const params={
        headers:{
            'Content-type':"application/json"
        }

    }
    const res=http.post(url,body,params)
    check(res,{
        "check status":(r)=>r.status===200,
        "check name":(r)=>r.body.includes("oppoA5s")
    })
    
}