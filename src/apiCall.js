import axios from "axios"
const apiUrl='https://randomuser.me/api?results=21'

export const getImg=async()=>{
  try {
    const data =await axios.get(`${apiUrl}`)
    return data
  } catch (error) {
      throw error
  }
}