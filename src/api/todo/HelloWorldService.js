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
        return axios.get(`http://localhost:8080/hello-world-path-variable/${name}`, { //when I add authorization headers in the request, it sends a OPTION request before the GET request.It checks if you have the right permissions
        }) // I removed the header from here and now I'm using interceptors to set the header in every request
    }
}

export default new HelloWordService()