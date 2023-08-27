import paswordGenerator from 'password-generator';

export default{
    async store(req, res){
    const {name, email} = req.body;
        const user ={
            name,
            email,
            password: paswordGenerator(15, false)
        }
        return res.json(user);
    }
}