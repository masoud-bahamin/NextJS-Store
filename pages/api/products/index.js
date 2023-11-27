import fs from "fs"
import path from "path"


export default function handler(req, res) {

    const Path = path.join(process.cwd(), "data", "db.json")
    const file = fs.readFileSync(Path)
    const DB = JSON.parse(file)

    switch (req.method) {
        case "GET": {

            return res.status(200).json({
                resulte: true,
                products: DB.products
            })
        }
        case "POST": {
            if (req.body?.title && req.body?.price) {
                DB.products.push(req.body)
                fs.writeFileSync(Path , JSON.stringify({...DB}))
                return res.status(201).json({ message: "the product created successfully", resulte: true })
            } else {
                return res.status(400).json({ message: "information is NOT valid", resulte: false })
            }

        }
        case "DELETE": {
            return res.json({ message: "the product removed successfully" })
        }
        case "PUT": {
            return res.json({ message: "the product changed successfully" })
        }
        default:

    }

}
