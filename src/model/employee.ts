import { Person } from "./person.interface";

export default interface Employee extends Person {
    empId?: string;
}