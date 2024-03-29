import axios from 'axios'

class TodoService {
    retrieveAllTodos(username){ // we don't know when it will return its response, so it returns a promise
        return axios.get(`http://localhost:8080/users/${username}/todos`)
    }

    retrieveTodo(username, id){ // we don't know when it will return its response, so it returns a promise
        return axios.get(`http://localhost:8080/users/${username}/todos/${id}`)
    }

    deleteTodo(username, id){ // we don't know when it will return its response, so it returns a promise
        return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`)
    }

    updateTodo(username, id, todo){ // we don't know when it will return its response, so it returns a promise
        return axios.put(`http://localhost:8080/users/${username}/todos/${id}`, todo)
    }

    createTodo(username, todo){ // we don't know when it will return its response, so it returns a promise
        return axios.post(`http://localhost:8080/users/${username}/todos`, todo)
    }
}

export default new TodoService()