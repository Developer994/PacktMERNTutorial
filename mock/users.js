import UserModel from '../models/User';

const user1 = new UserModel({
    id: '123abc',
    email: 't&a@outlook.com',
    username: 'TA',
    role: 'Developer',
});

const user2 = new UserModel({
    id: '456def',
    email: 'u&b@outlook.com',
    username: 'UB',
    role: 'Developer',
});

const users = [user1.getData(), user2.getData()];
console.log(users);

export default users;