import HttpClient from "./http";

function createAxios() {
    return new HttpClient();
}

export const defHttp = createAxios();
