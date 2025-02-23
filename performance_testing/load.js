import http from "k6/http"
import{sleep} from "k6"

//how different type of load test works
export const options={
 stages:[
    {Duration:"5s",target:50},
    {Duration:"30s",target:100},
    {Duration:"5s",target:0}

 ],
 cloud: {
    // Project: Default project
    projectID: 3748301,
    // Test runs with the same name groups test runs together.
    name: 'Test run demo'
  }
};

export default function(){
    http.get("https://k6.io")
    sleep(1)
}