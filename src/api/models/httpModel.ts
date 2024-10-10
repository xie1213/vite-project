/* 请求参数 */
export interface ResponseResult<T> {
    code: number,
    msg: string,
    data: T
}