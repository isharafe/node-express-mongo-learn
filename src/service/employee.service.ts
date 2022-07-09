import { Employee, IEmployee } from "../model/employee";
import NodeCache from "node-cache";
import { Document } from "mongoose";

/**
 * stdTTL: the standard ttl as number in seconds for every generated cache element. 0 = unlimited
 * checkperiod: The period in seconds, as a number, used for the automatic delete check interval. 0 = no periodic check.
 */
const empCache = new NodeCache({ stdTTL: 100, checkperiod: 120 } );

export const findAll = async () : Promise<IEmployee[]> => {
    return await Employee.find();
};

export const find = async (id: number) : Promise<IEmployee> => {
    const cacheKey = `employee-${id}`;
    const cachedObj = empCache.get(cacheKey) as IEmployee;
    if(cachedObj) {
        console.log("loaded from cache: ", cacheKey);
        return cachedObj;
    }
    const emp = await Employee.findOne({_id: id});
    console.log("cached missed: ", cacheKey);
    empCache.set(cacheKey, emp);
    return (emp as IEmployee);
}

export const create = async (employee: IEmployee) : Promise<IEmployee> => {
    const emp = new Employee(employee);
    const saved = await emp.save();
    return saved;
}

export const update = async (id: any, employee: IEmployee) : Promise<IEmployee> => {
    const saved = await Employee.updateOne({_id: id}, employee);
    console.log("after save:", employee);
    return employee;
}

export const remove = async (id: any) : Promise<boolean> => {
    const result = await Employee.deleteOne({_id: id});
    return result.deletedCount > 0;
}