import axios, { AxiosError } from "axios"

/**
 * this function handles the types of the error response
 * @param error : the error from react query
 * @returns 
 */
export const typedError = (error: Error | AxiosError | null)=> {
  if(!axios.isAxiosError(error)) {
    return null
  }
  return error
}