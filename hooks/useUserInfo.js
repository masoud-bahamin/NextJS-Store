import Axios from '@/servises/Axios';
import React, { useEffect, useState } from 'react'

export default function useUserInfo() {

    const [userInfo, setUserInfo] = useState(null)


    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }


    const getUserInfo = async () => {
        const token = getCookie("storeToken")
        if (token) {
            const { data } = await Axios(`/users/${token}`)
            console.log(data);
            if (data?.resulte) {
                setUserInfo(data.userInfo)
            }
        }
    }

    useEffect(() => {
        getUserInfo()
    }, [])



    return [userInfo]
}
