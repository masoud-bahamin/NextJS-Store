import fs from "fs"
import path from "path"


export default function Handler(req, res) {

    const Path = path.join(process.cwd(), "data", "db.json")
    const file = fs.readFileSync(Path)
    const {users} = JSON.parse(file)

    switch (req.method) {
        case "POST": {
            if (req.body) {
                const { email, password } = req.body;
                const user = users.find(user => user.email === email)
                if (user) {
                    if (user.password === password) {
                        return res.status(200).json({
                            user,
                            resulte: true,
                            token: user.id
                        })
                    } else {
                        return res.status(400).json({
                            message: "password is wrong",
                            resulte: false
                        })
                    }
                } else {
                    return res.status(400).json({
                        message: "email not found",
                        resulte: false
                    })
                }
            }
        }
            break;

        case "GET": {
            return res.status(200).json(users)
        }
            break;

        default:
            break;
    }



}
