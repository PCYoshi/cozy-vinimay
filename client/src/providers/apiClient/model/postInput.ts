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



export interface PostInput {
    /**
     * Post content
     */
    content: string;

    /**
     * Post privacy setting (private, friends or public)
     */
    privacy: PostInput.PrivacyEnum;

}
export namespace PostInput {
    export enum PrivacyEnum {
        Public = <any> 'public',
        Private = <any> 'private',
        Friends = <any> 'friends'
    }
}