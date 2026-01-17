import User from "../models/User.js"
export const create = async (req, res) =>{
    try{
        const userData = new User(req.body)
        const { email } = userData
        const userExist = await User.findOne({ email })
        if (userExist){
            return res.status(400).json({message: "User exists"})
        }
        const savedUser = await userData.save()
        res.status(200).json(savedUser)
    } catch (error){
        res.status(500).json({error: "Internal server error"})
    }
}
export const fetch = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users)
    } catch (error){
        res.status(500).json({error: "Internal server error"})
    }
}