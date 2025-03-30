import axios from './axios.customize'

const createUserApi = (fullName, email, password, phoneNumber) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phoneNumber
    }
    return axios.post(URL_BACKEND, data)
}

const fetchAllUser = () => {
    return axios.get(`/api/v1/user`)
}

const updateUser = (id, fullName, phoneNumber) => {
    const data = {
        _id: id,
        fullName: fullName,
        phone: phoneNumber
    }
    return axios.put('api/v1/user', data)
}

export {
    createUserApi, fetchAllUser, updateUser
}