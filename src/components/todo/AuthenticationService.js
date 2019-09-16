import axios from 'axios';

class AuthenticationService {

    executeBasicAuthenticationService(username, password){
        console.log('vou fazer a chamada')
        return axios.get('http://localhost:8080/basicauth', {
            headers: {
                authorization: this.createBasicAuthToken(username, password)
            }
        })
    }

    createBasicAuthToken(username, password){
        return  'Basic ' + window.btoa(username + ':' + password) //encoding using Base64
    }

    registerSuccessfullLogin(username, password) {

        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptor(this.createBasicAuthToken(username, password));
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        console.log(user);

        if (user === null) {
            return false;
        } else return true;
    }

    getLoggedInUsername() {
        let user = sessionStorage.getItem('authenticatedUser')

        if (user === null) {
            return ''
        } else return user
    }

    setupAxiosInterceptor(basicAuthHeader) {
        
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn) {
                    config.headers.authorization = basicAuthHeader
                }
                return config;
            }
        )
    }
}

export default new AuthenticationService() //exporting an object of the class
// that's what we do for helper services