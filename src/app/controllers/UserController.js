import paswordGenerator from 'password-generator';

import Queue from '../lib/Queue';

export default{
    async store(req, res){
    const {name, email} = req.body;

        const user ={
            name,
            email,
            password: paswordGenerator(15, false)
        }

        await Queue.add('RegistrationMail', { user })

        return res.json(user);
    }
}