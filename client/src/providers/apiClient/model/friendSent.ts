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



export interface FriendSent {
    /**
     * User (formatted as `username@instance-domain.tld`)
     */
    user: string;

    /**
     * Request status (pending or refused)
     */
    status: FriendSent.StatusEnum;

}
export namespace FriendSent {
    export enum StatusEnum {
        Pending = <any> 'pending',
        Declined = <any> 'declined'
    }
}
