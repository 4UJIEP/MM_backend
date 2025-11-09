import { users } from "../../mock/users.mock";

export const getAll = async () => {
    return users;
}

export const getById = async (id: number) => {
    return users.find(u => u.id === id);
}