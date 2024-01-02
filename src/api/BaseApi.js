import { defaultInstance } from "../utils/axios";

export const menuCall = async() => {
    try {
        const response = await defaultInstance.post('/api/v1/menuList')
        return response
    } catch (error) {
        console.log(error)
    }
};

export const mainDataCall = async() => {
    try {
        const response = await defaultInstance.post('/api/v1')
        return response
    } catch (error) {
        console.log(error)
        return error
    }
};

export const getMemoAllCall = async() => {
    try {
        const response = await defaultInstance.get('/memo/all')
        return response
    } catch (error) {
        console.log(error)
    }
};

export const getMemoOneCall = async(param) => {
    if (!isNaN(Number(param)))
    {
        try {
            const response = await defaultInstance.get('/memo?id=' + param)
            return response
        } catch (error) {
            console.log(error)
        }
    }
};

export const postMemo = async(param) => {
    try {
        const response = await defaultInstance.post('/memo', param)
        return response
    } catch (error) {
        console.log(error)
    }
};

export const putMemo = async(param) => {
    try {
        const response = await defaultInstance.put('/memo', param)
        return response
    } catch (error) {
        console.log(error)
    }
};
