import Employee from "../model/employee";

export const findAll = async () : Promise<Employee[]> => {
    return [];
};

export const find = async (id: number) : Promise<Employee> => {
    return {};
}

export const create = async (employee: Employee) : Promise<Employee> => {
    return {};
}

export const update = async (id: number, emp: Employee) : Promise<Employee> => {
    return {};
}

export const remove = async (id: number) : Promise<boolean> => {
    return true;
}