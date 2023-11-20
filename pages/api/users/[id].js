import fs from "fs"
import path from "path"


export default function handler(req, res) {
    if (req.method === "GET") {
        const dbPath = path.join(process.cwd(), "data", "db.json")
        const file = fs.readFileSync(dbPath)
        const DB = JSON.parse(file)
        const { users } = DB

        const isUser = users.some(user => String(user.id) === req.query.id)

        if (isUser) {
            const user = users.find(user => String(user.id) === req.query.id)
            return res
                .status(200)
                .json({ user, resulte: true })
        } else {
            return res.status(404).json({ resulte: false, message: "user not found" })
        }
    } 
    else if (req.method === "DELETE") {
        const dbPath = path.join(process.cwd(), "data", "db.json")
        const file = fs.readFileSync(dbPath)
        const DB = JSON.parse(file)
        const { users } = DB

        const isUser = users.some(user => String(user.id) === req.query.id)

        if (isUser) {
            const newUsers = users.filter(user => String(user.id) !== req.query.id)
            const err = fs.writeFileSync(dbPath, JSON.stringify({ ...DB, users: newUsers }))
            if (err) {
                return res.status(500).json({ resulte: false, message: "server error" })
            } else {
                return res
                    .status(200)
                    .json({ message: "user deleted successfully", resulte: true })
            }

        } else {
            return res.status(404).json({ resulte: false, message: "user not found" })
        }
    }
    else if (req.method === "PUT") {
        const dbPath = path.join(process.cwd(), "data", "db.json")
        const file = fs.readFileSync(dbPath)
        const DB = JSON.parse(file)
        const { users } = DB

        const isUser = users.some(user => String(user.id) === req.query.id)

        if (isUser) {
            const {email , password} = req.body
            users.forEach(user => {
                if(String(user.id) === req.query.id){
                    user.email = email,
                    user.password = password
                }
            })
            const err = fs.writeFileSync(dbPath, JSON.stringify({ ...DB}))
            if (err) {
                return res.status(500).json({ resulte: false, message: "server error" })
            } else {
                return res
                    .status(200)
                    .json({ message: "user Updated successfully", resulte: true })
            }

        } else {
            return res.status(404).json({ resulte: false, message: "user not found" })
        }
    }
}