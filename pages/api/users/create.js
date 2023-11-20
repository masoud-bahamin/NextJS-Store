import fs from "fs"
import path from "path"


export default function handler(req, res) {




    switch (req.method) {
        case "POST": {

            const Path = path.join(process.cwd(), "data", "db.json")
            const file = fs.readFileSync(Path)
            const DB = JSON.parse(file)

            const user = req.body
            DB.users.push(user)
            const err = fs.writeFileSync(Path, JSON.stringify(DB))
            if (err) {
                return res
                    .status(500)
                    .json({ resulte: false, message: "server error" })
            } else {
                return res.status(200).json({ user, resulte: true, token: user.id })
            }
        }
            break;

        default:
            break;
    }

}