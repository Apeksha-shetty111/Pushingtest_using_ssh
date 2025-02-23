import http from "k6/http"
import{sleep} from "k6"

export const options={
    vus:10,
    iterations:200,
    maxDuration:"30s",
    executor:'per-vu-iterations'
}

export default function(){
    http.get("https://api.restful-api.dev/objects")
    sleep(1)
}