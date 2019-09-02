class AuthenticationService {

    registerSuccessfullLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
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

    getLoggedInUsername(){
        let user = sessionStorage.getItem('authenticatedUser')

        if(user === null){
            return ''
        } else return user
    }
}

export default new AuthenticationService() //exporting an object of the class
// that's what we do for helper services