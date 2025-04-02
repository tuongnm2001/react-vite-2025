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

const fetchAllUser = (current, pageSize) => {
    return axios.get(`/api/v1/user?current=${current}&pageSize=${pageSize}`)
}

const updateUser = (id, fullName, phoneNumber) => {
    const data = {
        _id: id,
        fullName: fullName,
        phone: phoneNumber
    }
    return axios.put('api/v1/user', data)
}

const deleteUser = (id) => {
    return axios.delete(`/api/v1/user/${id}`)
}

const handleUploadFile = (file, folder) => {
    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data"
        }
    }
    const bodyFormData = new FormData();
    bodyFormData.append('fileImg', file)

    return axios.post(`/api/v1/file/upload`, bodyFormData, config)
}

const updateAvatarUser = (id, fullName, phoneNumber, avatar) => {
    const data = {
        _id: id,
        fullName: fullName,
        phone: phoneNumber,
        avatar: avatar
    }
    return axios.put('api/v1/user', data)
}

const register = (fullName, email, password, phone) => {
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(`/api/v1/user/register`, data)
}

const login = (username, password) => {
    const data = {
        username: username,
        password: password,
        delay: 3000
    }
    return axios.post(`/api/v1/auth/login`, data)
}

export {
    createUserApi, fetchAllUser, updateUser, deleteUser,
    handleUploadFile, updateAvatarUser, register, login
}