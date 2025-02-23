import http from "k6/http";
import { sleep } from "k6";
// import { Duration } from "luxon";

export const options={
  vus:10,
  Duration:"30s",
}

export default function(){
  http.get("https://k6.io");
  sleep(1);
}