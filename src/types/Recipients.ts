import { baseType } from "./base";

export interface Recipient extends baseType {
    name: string,
    email: string,
    groups: string,
}