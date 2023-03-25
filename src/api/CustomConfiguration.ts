import { ConfigurationParameters } from "./swagger/configuration";
export class CustomConfiguration implements ConfigurationParameters {
    apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
    username?: string;
    password?: string;
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    basePath?: string;
    baseOptions?: any;

    constructor(axiosBase:string, withCredentials:boolean) {
        this.apiKey = () => 'Bearer ' + localStorage.getItem('token')

        this.baseOptions = {
            withCredentials: withCredentials
        };
        this.basePath = axiosBase;
    }

}