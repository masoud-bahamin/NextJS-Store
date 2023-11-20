import fs from "fs"
import path from "path"

const handler = (req, res) => {

    const Path = path.join(process.cwd(), "data", "db.json")

    const file = fs.readFileSync(Path)

    const DB = JSON.parse(file)

    if (req.method === "GET") {
        const product = DB.products.find(product => product.id === +req.query.id)

        if (product) {
            return res.status(200).json({ product, resulte: true })
        } else {
            return res.status(404).json({ message: "product not found", resulte: false })
        }
    }


}

export default handler