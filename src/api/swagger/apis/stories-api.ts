/* tslint:disable */
/* eslint-disable */
/**
 * PlanningPoker.Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateStoryDto } from '../models';
// @ts-ignore
import { StoryDto } from '../models';
/**
 * StoriesApi - axios parameter creator
 * @export
 */
export const StoriesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiStoriesFinishEstimationIdPost: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiStoriesFinishEstimationIdPost', 'id', id)
            const localVarPath = `/api/Stories/FinishEstimation/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiStoriesGetAllNotEstimatedGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Stories/GetAllNotEstimated`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiStoriesGetEstimableGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Stories/GetEstimable`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CreateStoryDto} [createStoryDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiStoriesPostStoryPost: async (createStoryDto?: CreateStoryDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Stories/PostStory`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createStoryDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiStoriesStartEstimationIdPost: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiStoriesStartEstimationIdPost', 'id', id)
            const localVarPath = `/api/Stories/StartEstimation/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StoriesApi - functional programming interface
 * @export
 */
export const StoriesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StoriesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiStoriesFinishEstimationIdPost(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiStoriesFinishEstimationIdPost(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiStoriesGetAllNotEstimatedGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<StoryDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiStoriesGetAllNotEstimatedGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiStoriesGetEstimableGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StoryDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiStoriesGetEstimableGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {CreateStoryDto} [createStoryDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiStoriesPostStoryPost(createStoryDto?: CreateStoryDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StoryDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiStoriesPostStoryPost(createStoryDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiStoriesStartEstimationIdPost(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiStoriesStartEstimationIdPost(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * StoriesApi - factory interface
 * @export
 */
export const StoriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StoriesApiFp(configuration)
    return {
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiStoriesFinishEstimationIdPost(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.apiStoriesFinishEstimationIdPost(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiStoriesGetAllNotEstimatedGet(options?: any): AxiosPromise<Array<StoryDto>> {
            return localVarFp.apiStoriesGetAllNotEstimatedGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiStoriesGetEstimableGet(options?: any): AxiosPromise<StoryDto> {
            return localVarFp.apiStoriesGetEstimableGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CreateStoryDto} [createStoryDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiStoriesPostStoryPost(createStoryDto?: CreateStoryDto, options?: any): AxiosPromise<StoryDto> {
            return localVarFp.apiStoriesPostStoryPost(createStoryDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiStoriesStartEstimationIdPost(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.apiStoriesStartEstimationIdPost(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StoriesApi - object-oriented interface
 * @export
 * @class StoriesApi
 * @extends {BaseAPI}
 */
export class StoriesApi extends BaseAPI {
    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoriesApi
     */
    public apiStoriesFinishEstimationIdPost(id: number, options?: AxiosRequestConfig) {
        return StoriesApiFp(this.configuration).apiStoriesFinishEstimationIdPost(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoriesApi
     */
    public apiStoriesGetAllNotEstimatedGet(options?: AxiosRequestConfig) {
        return StoriesApiFp(this.configuration).apiStoriesGetAllNotEstimatedGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoriesApi
     */
    public apiStoriesGetEstimableGet(options?: AxiosRequestConfig) {
        return StoriesApiFp(this.configuration).apiStoriesGetEstimableGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CreateStoryDto} [createStoryDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoriesApi
     */
    public apiStoriesPostStoryPost(createStoryDto?: CreateStoryDto, options?: AxiosRequestConfig) {
        return StoriesApiFp(this.configuration).apiStoriesPostStoryPost(createStoryDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StoriesApi
     */
    public apiStoriesStartEstimationIdPost(id: number, options?: AxiosRequestConfig) {
        return StoriesApiFp(this.configuration).apiStoriesStartEstimationIdPost(id, options).then((request) => request(this.axios, this.basePath));
    }
}