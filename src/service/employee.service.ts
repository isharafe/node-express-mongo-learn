import { Employee, IEmployee } from "../model/employee";


export const findAll = async () : Promise<IEmployee[]> => {
    return Employee.find().lean();
};

export const find = async (id: number) : Promise<IEmployee> => {
    const emp = Employee.findById(id);
    return emp.lean();
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