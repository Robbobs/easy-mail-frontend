import { BaseType } from "./Base";
import { Recipient } from "./Recipient";

export interface Group extends BaseType {
  title: string;
  members: Recipient[];
}