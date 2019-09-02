import axios from 'axios'

class TodoService {
    retrieveAllTodos(username){ // we don't know when it will return its response, so it returns a promise
        return axios.get(`http://localhost:8080/users/${username}/todos`)
    }

    deleteTodo(username, id){ // we don't know when it will return its response, so it returns a promise
        return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`)
    }
}

export default new TodoService()