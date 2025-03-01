import axios from "axios";
import {isAuthenticated} from "./tableDetails/authentication";
import Swal from "sweetalert2";


export const signup = async (url: string, data: any) => {

        try {
            const response = await axios.post(url, JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.status === 201) {
                return true
            }
        } catch (error: any) {
            if (error.response) {
                console.log(error)
                /* alert(error.response.data.message);*/
                throw error;
            }
        }

}
export const signIn = async (url: string, data: any) => {

    try {
        const response = await axios.post(url, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status === 200) {
            if (response.status === 200) {
                localStorage.setItem("username", data.username);
                localStorage.setItem("password", data.password);
                localStorage.setItem("accessToken", response.data.token);
                return true
            } else {
                /*await swal("Error", response.error || "Invalid username or password\n Try Again!", "error");*/
            }
        }
        return false
    } catch (error: any) {
        if (error.response) {
            console.log(error)
            /* alert(error.response.data.message);*/
            throw error;
        }
    }

}
export const searchUser = async (url: string, mapping: string, id: string) => {

        try {
            const token = localStorage.getItem('accessToken')
            const response = await axios.get(url + mapping + id, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                return response.data;
            }
        } catch (error: any) {
            if (error.response) {
                console.log(error.response.data.message);
            }
        }

};
export const saveData = async (url: string, data: any, setData: () => void) => {

    if (await isAuthenticated()) {

        try {
            const token = localStorage.getItem('accessToken')
            const response = await axios.post(url, JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 201) {
                Swal.fire({
                    title: "Saved Successfully!",
                    icon: "success"
                });
                setData();
            }
        } catch (error: any) {
            if (error.response) {
                console.log(error)
                /* alert(error.response.data.message);*/
            }
        }
    }
}
export const updateData = async (url: string, data: any, setData: () => void) => {

    if (await isAuthenticated()) {
        try {
            const token = localStorage.getItem('accessToken')
            const response = await axios.put(url, JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 204) {
                Swal.fire({
                    title: "Update Successfully!",
                    icon: "success"
                });
                setData();
            }
        } catch (error: any) {
            if (error.response) {
                Swal.fire({
                    title: error.response.data.message,
                    icon: "error"
                });
            }
        }
    }
}

export const searchData = async (url: string, mapping: string, id: string) => {
    if (await isAuthenticated()) {
        try {
            const token = localStorage.getItem('accessToken')
            const response = await axios.get(url + mapping + id, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                return response.data;
            }
        } catch (error: any) {
            if (error.response) {
                Swal.fire({
                    title: error.response.data.message,
                    icon: "error"
                });
            }
        }
    }
};

export const searchAllData = async (url: string) => {
    let list = []
    if (await isAuthenticated()) {
        try {
            const token = localStorage.getItem('accessToken')
            const response = await axios.get(url + "/getAll", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                list = response.data;
            }
        } catch (error: any) {
            if (error.response) {
                console.log(error.response.data.message);
            }
        }
        return list;
    }
};

export const deleteEntity = async (url: any, params: any, setData: () => void) => {
    if (await isAuthenticated()) {
        try {
            const token = localStorage.getItem('accessToken')
            const response = await axios.delete(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: params
            });
            if (response.status === 204) {
                Swal.fire({
                    title: "delete Successfully!",
                    icon: "success"
                });
                setData();
            }
        } catch (error: any) {
            if (error.response) {
                console.log(error)
                if (error.response.status === 404) {
                    Swal.fire({
                        title: error.response.data.error,
                        icon: "error"
                    });
                } else {
                    Swal.fire({
                        title: "error on delete",
                        icon: "error"
                    });
                }

            }
        }
    }

}
