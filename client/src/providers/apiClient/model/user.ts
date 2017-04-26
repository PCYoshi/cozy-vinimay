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



export interface User {
    /**
     * User's username
     */
    username: string;

    /**
     * Domain of the instance the user is on
     */
    url: string;

    /**
     * Description (aka bio in some social medias) of the user
     */
    description?: string;

}
