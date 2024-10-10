import axios, { AxiosRequestConfig, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, Method } from "axios";
import { ResponseResult } from "@/api/models/httpModel"

export interface HttpResponse<T> {
    data: T
    status: number,
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
    request?: any;
}

class HttpClient {
    private instance: AxiosInstance;
    // private baseURL: string;
    constructor(timeout = 10000) {

        // this.baseURL = VITE_API_BASE as string

        // 创建请求头
        this.instance = axios.create({
            timeout,
            headers: {
                "Content-Type": "application/json",
            },
        });
        this._initReqInterceptor()

        this._initResInterceptor()
    }

    /**
     * @func 请求拦截器
     */
    private _initReqInterceptor = () => {
        this.instance.interceptors.request.use(this._handleRequest, (error) =>
            Promise.reject(error),
        );
    }
    /**
     * @func 响应拦截器
     */
    private _initResInterceptor = () => {
        this.instance.interceptors.response.use(
            this._handleResponse,
            this._handleError,
        );
    };

    /**
     * @func 添加用户token到请求头
     */
    private _handleRequest = (config: InternalAxiosRequestConfig<any>) => {

        const headers = config.headers as Record<string, any>;
        headers["server"] = "true";

        // 添加用户token到请求头

        // const user = useUserStore();
        // if (user.userState.token) {
        //     headers["ba-user-token"] = user.userState.token;
        // }

        // 添加baseURL前缀
        // config.url = `${this.baseURL}${config.url}`; 

        console.log(config.url);

        return config;
    }

    /**
     * @func 响应成功
     */
    private _handleResponse = (response: AxiosResponse) => response;

    /**
     * @func 响应失败
     */
    private _handleError = (error: any) => Promise.reject(error);

    /**
     * @func 返回结果
     */
    private async request<T>(
        method: Method,
        url: string,
        data?: any,
        config?: AxiosRequestConfig,
    ): Promise<ResponseResult<T>> {
        const response = await this.instance.request<ResponseResult<T>>({
            method,
            url,
            data,
            ...config,
        });
        return response.data;
    }

    public get<T>(
        url: string,
        config?: AxiosRequestConfig,
    ): Promise<ResponseResult<T>> {
        return this.request<T>("GET", url, undefined, config);
    }

    public post<T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig,
    ): Promise<ResponseResult<T>> {
        return this.request<T>("POST", url, data, config);
    }

    public put<T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig,
    ): Promise<ResponseResult<T>> {
        return this.request<T>("PUT", url, data, config);
    }

    public delete<T>(
        url: string,
        config?: AxiosRequestConfig,
    ): Promise<ResponseResult<T>> {
        return this.request<T>("DELETE", url, undefined, config);
    }


}
export default HttpClient