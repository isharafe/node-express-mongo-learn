import { ModelBase } from "./model-base.interface";

export interface Person extends ModelBase {

    name?: string;
    nic?: string;

}