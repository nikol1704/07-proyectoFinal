import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./HttpAdapter";


interface Options {
    baseUrl: string,
    params?: Record<string, any>
}

export class AxiosAdapter implements HttpAdapter {

    private axiosInstance: AxiosInstance;

    constructor(options: Options) {
        this.axiosInstance = axios.create({
            baseURL: options.baseUrl,
            params: options.params
        })
    }
    async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
        try {
            const { data } = await this.axiosInstance.get<T>(url, options);
            return data;
        } catch (error) {
            throw error
        }
    }
}