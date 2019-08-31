import axios from 'axios'

class HelloWordService { 
    executeHelloWorldService(){
        console.log('service')
        return axios.get('http://localhost:8080/hello-world')
    }
}

export default new HelloWordService()