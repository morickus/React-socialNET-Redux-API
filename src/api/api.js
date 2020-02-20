import Axios from "axios";

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "3f585cce-b978-4dd9-b206-fb3be8806fe1" }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}