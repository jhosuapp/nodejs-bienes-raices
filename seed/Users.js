import bcrypt from 'bcrypt';

const CreateUser = [
    {
        name: 'Jhosua',
        email: 'jhosuapvll@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        confirmation: 1
    }
];

export default CreateUser;