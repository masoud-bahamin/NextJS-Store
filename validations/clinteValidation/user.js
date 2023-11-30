import * as yup from "yup"


const userSchema = yup.object({
    email: yup.string().min(4).max(40).required().email(),
    password: yup.string().min(4).max(40).required(),
})

export default userSchema