/**
 * vinimay
 * Vinimay is a decentralised social network focused on giving back control of its data to the user
 *
 * OpenAPI spec version: 0.1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { Friends } from '../model/friends';
import { Post } from '../model/post';
import { PostsResponse } from '../model/postsResponse';
import { User } from '../model/user';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class V1Service {
    protected basePath = 'http://127.0.0.1:3000';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
				if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
			this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                (objA as any)[key] = (objB as any)[key];
            }
        }
        return <T1&T2>objA;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     * Retrieve all friend requests
     * Retrieve all friend requests (accepted, incoming and sent). Further documentation is available [here](https://github.com/JosephCaillet/vinimay/wiki/Client-to-server-API#retrieval-4).
     */
    public getV1ClientFriends(extraHttpRequestParams?: any): Observable<Friends> {
        return this.getV1ClientFriendsWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Retrieve data on the current user
     * Retrieve data on the current user. Full documentation is available [here](https://github.com/JosephCaillet/vinimay/wiki/Client-to-server-API#retrieval).
     */
    public getV1ClientMe(extraHttpRequestParams?: any): Observable<User> {
        return this.getV1ClientMeWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Retrieve posts
     * Retrieve all posts or using filters. Use either with both &#x60;start&#x60; and &#x60;nb&#x60; parameters, or both &#x60;from&#x60; and &#x60;to&#x60; parameters. Further documentation is available [here](https://github.com/JosephCaillet/vinimay/wiki/Client-to-server-API#retrieval-1).
     * @param start Offset to start the retrieval. For example, &#x60;start&#x3D;20&#x60; will retrieve all posts from the 20th most recent one, in anti-chronological order.
     * @param nb Number of posts to retrieve
     * @param from Smallest timestamp for a time frame retrieval
     * @param to Biggest timestamp for a time frame retrieval
     */
    public getV1ClientPosts(start?: number, nb?: number, from?: number, to?: number, extraHttpRequestParams?: any): Observable<PostsResponse> {
        return this.getV1ClientPostsWithHttpInfo(start, nb, from, to, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Update data on the current user
     * Update data on the current user. Full documentation is available [here](https://github.com/JosephCaillet/vinimay/wiki/Client-to-server-API#update).
     * @param description New user description
     */
    public postV1ClientMe(description: string, extraHttpRequestParams?: any): Observable<User> {
        return this.postV1ClientMeWithHttpInfo(description, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create a post
     * Creates a post, provided the necessary information is present. Full documentation is available [here](https://github.com/JosephCaillet/vinimay/wiki/Client-to-server-API#creation).
     * @param content Post content
     * @param privacy Post privacy setting (private, friends or public)
     */
    public postV1ClientPosts(content: string, privacy: string, extraHttpRequestParams?: any): Observable<Post> {
        return this.postV1ClientPostsWithHttpInfo(content, privacy, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Retrieve all friend requests
     * Retrieve all friend requests (accepted, incoming and sent). Further documentation is available [here](https://github.com/JosephCaillet/vinimay/wiki/Client-to-server-API#retrieval-4).
     */
    public getV1ClientFriendsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v1/client/friends';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


        // to determine the Accept header
        let produces: string[] = [
        ];


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:true
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Retrieve data on the current user
     * Retrieve data on the current user. Full documentation is available [here](https://github.com/JosephCaillet/vinimay/wiki/Client-to-server-API#retrieval).
     */
    public getV1ClientMeWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v1/client/me';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


        // to determine the Accept header
        let produces: string[] = [
        ];


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:true
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Retrieve posts
     * Retrieve all posts or using filters. Use either with both &#x60;start&#x60; and &#x60;nb&#x60; parameters, or both &#x60;from&#x60; and &#x60;to&#x60; parameters. Further documentation is available [here](https://github.com/JosephCaillet/vinimay/wiki/Client-to-server-API#retrieval-1).
     * @param start Offset to start the retrieval. For example, &#x60;start&#x3D;20&#x60; will retrieve all posts from the 20th most recent one, in anti-chronological order.
     * @param nb Number of posts to retrieve
     * @param from Smallest timestamp for a time frame retrieval
     * @param to Biggest timestamp for a time frame retrieval
     */
    public getV1ClientPostsWithHttpInfo(start?: number, nb?: number, from?: number, to?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v1/client/posts';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        if (start !== undefined) {
            queryParameters.set('start', <any>start);
        }

        if (nb !== undefined) {
            queryParameters.set('nb', <any>nb);
        }

        if (from !== undefined) {
            queryParameters.set('from', <any>from);
        }

        if (to !== undefined) {
            queryParameters.set('to', <any>to);
        }


        // to determine the Accept header
        let produces: string[] = [
        ];


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:true
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Update data on the current user
     * Update data on the current user. Full documentation is available [here](https://github.com/JosephCaillet/vinimay/wiki/Client-to-server-API#update).
     * @param description New user description
     */
    public postV1ClientMeWithHttpInfo(description: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v1/client/me'
                    .replace('${' + 'description' + '}', String(description));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'description' is not null or undefined
        if (description === null || description === undefined) {
            throw new Error('Required parameter description was null or undefined when calling postV1ClientMe.');
        }

        // to determine the Accept header
        let produces: string[] = [
        ];


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            search: queryParameters,
            withCredentials:true
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Create a post
     * Creates a post, provided the necessary information is present. Full documentation is available [here](https://github.com/JosephCaillet/vinimay/wiki/Client-to-server-API#creation).
     * @param content Post content
     * @param privacy Post privacy setting (private, friends or public)
     */
    public postV1ClientPostsWithHttpInfo(content: string, privacy: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/v1/client/posts'
                    .replace('${' + 'content' + '}', String(content))
                    .replace('${' + 'privacy' + '}', String(privacy));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'content' is not null or undefined
        if (content === null || content === undefined) {
            throw new Error('Required parameter content was null or undefined when calling postV1ClientPosts.');
        }
        // verify required parameter 'privacy' is not null or undefined
        if (privacy === null || privacy === undefined) {
            throw new Error('Required parameter privacy was null or undefined when calling postV1ClientPosts.');
        }

        // to determine the Accept header
        let produces: string[] = [
        ];


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            search: queryParameters,
            withCredentials:true
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
