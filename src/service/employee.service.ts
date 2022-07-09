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
    employee.version = saved.__v;
    employee.id = saved._id;
    return employee;
}

export const update = async (id: any, employee: IEmployee) : Promise<IEmployee> => {
    const emp = new Employee(employee);
    emp._id = id;
    const saved = await emp.save();
    employee.version = saved.__v;
    return employee;
}

export const remove = async (id: any) : Promise<boolean> => {
    const result = await Employee.deleteOne({_id: id});
    return result.deletedCount > 0;
}