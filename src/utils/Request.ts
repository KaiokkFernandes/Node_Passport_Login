import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';  

//Interface para configuração da requisção uma maneira de tipagem de classe 
export interface RequestConfig extends AxiosRequestConfig{}

//
export interface Response<T = any> extends AxiosResponse<T>{}


export class Request{
    constructor(private request = axios){
        
    }
    public get<T>(url: string, config: RequestConfig): Promise<Response<T>>{
      return this.request.get<T>(url, config);
    }

    public static isRequestError(error: Error ){
       return !!(
        (error as AxiosError).response && (error as AxiosError).response?.status
       )
    }

}