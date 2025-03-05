import { BaseType } from "./Base";

export interface Recipient extends BaseType {
    name: string,
    email: string,
    groups?: string,
}