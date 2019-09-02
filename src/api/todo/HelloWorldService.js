import axios from 'axios'

class HelloWordService { 
    executeHelloWorldService(){
        console.log('service')
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService(){
        console.log('service')
        return axios.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloWorldPathVariableService(name){
        console.log('service')
        return axios.get(`http://localhost:8080/hello-world-path-variable/${name}`)
    }
}

export default new HelloWordService()