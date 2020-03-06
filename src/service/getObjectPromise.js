import axios from 'axios'
let getObject = (url) => {
    //returns promise object
    return axios.get(url)
}

//post data is the data we want to post
let postObject = (url,postData) => {
    return axios.post(url,postData)
}

let putObject = (url,putData) => {
    return axios.post(url,putData)
} 

export {
    getObject,
    postObject,
    putObject
} 