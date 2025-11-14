import axios, { AxiosError } from "axios"
import { BASE_API_URL } from "../global"

const axiosInstance = axios.create({
	baseURL: BASE_API_URL
})

export const get = async (url: string, token?: string) => {
	try {
		const headers: Record<string, string> = {}

		if (token) {
			headers["Authorization"] = `Bearer ${token}`
		}

		const result = await axiosInstance.get(url, { headers })

		return {
			status: true,
			data: result.data,
		}
	} catch (error) {
		const err = error as AxiosError<{ message: string; code: number }>
		if (err.response) {
			console.log(err.response.data.message)
			return {
			status: false,
			message: `${err.code}: something wrong`,
			}
		}
		console.log(err.response)
		
		return {
			status: false,
			message: `Something went wrong: ${error}`,
		}
	}
}


export const post = async (url: string, data: string | FormData, token?: string) => {
  try {
    const isJson = typeof data === "string";

    const headers: Record<string, string> = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;
    if (isJson) headers["Content-Type"] = "application/json";

    const result = await axiosInstance.post(url, data, { headers });

    return {
      status: true,
      data: result.data,
    };
  } catch (error) {
    const err = error as AxiosError<{ message: string; code: number }>;

    if (err.response) {
      return {
        status: false,
        message: err.response.data?.message || "Bad Request",
      };
    }

    console.error(err);
    return {
      status: false,
      message: "Something went wrong while posting data.",
    };
  }
};


// export const post = async (url: string, data: string | FormData, token?: string) => {
// 	try {
// 		const typed: string = (typeof data == 'string') ? "application/json": "multipart/form-data"
// 		let headers: any = {
// 			// "Authorization": `Bearer ${token}` || '',
// 			"Content-Type": typed 
// 		}
// 		let result = await axiosInstance.post(url, data, {
// 			headers
// 		})
// 		return {
// 			status: true, 
// 			data: result.data
// 		}
// 	} catch (error) {
// 		const err = error as AxiosError<{ message: string, code: number }>
// 		if (err.response) {
// 			return {
// 				status: false, 
// 				message: `Error: ${err.response.data.message}`
// 			}
// 		}
// 		console.log(err.response)
// 		return {
// 			status: false, 
// 			message: `Something were wrong`
// 		}
// 	}
// }

export const put = async (url: string, data: string | FormData, token?: string) => {
	try {
		const type: string = (typeof data == 'string') ? "application/json" : "multipart/form-data"
		const result = await axiosInstance.put(url, data, {
			headers: {
				"Authorization": `Bearer ${token}` || '',
				"Content-Type": type
			}
		})
		return {
			status: true, 
			data: result.data 
		}
	} catch (error) {
		const err = error as AxiosError<{ message: string, code: number }>
		if (err.response) {
			console.log(err.response.data.message)
			return {
				status: false, 
				message: `${err.code}: something wrong`
			}
		}
		console.log(err.response)
		return {
			status: false, 
			message: `Something were wrong`
		}
	}
}

export const putOrder = async (url: string, data: string | FormData, token: string) => {
	try {
		const result = await axiosInstance.put(url, data, {
			headers: {
				"Authorization": `Bearer ${token}` || '',
				"Content-Type": "application/json"
			}
		})
		return {
			status: true, 
			data: result.data 
		}
	} catch (error) {
		const err = error as AxiosError<{ message: string, code: number }>
		if (err.response) {
			console.log(err.response.data.message)
			return {
				status: false, 
				message: `${err.code}: something wrong`
			}
		}
		console.log(err.response)
		return {
			status: false, 
			message: `Something were wrong`
		}
	}
}


export const drop = async (url: string, token: string) => {
	try {
		const result = await axiosInstance.delete(url, {
			headers: {
				"Authorization": `Bearer ${token}` || ''
			}
		})
		return {
			status: true, 
			data: result.data
		}
	} catch (error) {
		const err = error as AxiosError<{ message: string, code: number }>
		if (err.response) {
			console.log(err.response.data.message)
			return {
				status: true, 
				message: `${err.response.data.message}`
			}
		}
		console.log(err.response)
		return {
			status: false, 
			message: `Something were wrong`
		}
	}
}