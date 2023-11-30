import userModel from "@/models/user"
import connectToDb from "@/utils/db"
import checkUser from "@/validations/serverValidation/user"


export default async function handler(req, res) {
    connectToDb()
    switch (req.method) {
        case "POST": {
            const validation = checkUser(req.body)
            if (validation !== true) {
                return res.status(422).json(validation)
            }

            try {
                const { email, password } = req.body
                const user = await userModel.create({ email, password })
                if (user) {
                    return res.status(200).json({ user, resulte: true, token: user._id })
                } else {
                    return res.status(404).json({ resulte: false, message: "information error" })
                }

            } catch (error) {
                return res.status(400).json({ error, resulte: false, message: "catch error" })
            }
        }
    }
}