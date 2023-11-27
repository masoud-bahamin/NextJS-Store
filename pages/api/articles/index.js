import articleModel from "@/models/article"
import connectToDb from "@/utils/db"

export default async function (req, res) {
    const { method, query } = req
    if (method === "GET") {
        connectToDb()
        try {
            const articles = await articleModel.find()
            if (articles) {
                return res.status(200).json({ resulte: true, articles })
            } else {
                return res.status(400).json({ resulte: false, message: "Articles not found" })
            }
        } catch (error) {
            return res.status(500).json({ resulte: false, error, message: "catch error" })
        }
    }
    else if (method === "POST") {
        connectToDb()
        const { title, body } = req.body
        try {
            const article = await articleModel.create({ title, body })
            if (article) {
                return res.status(201).json({ resulte: true, article })
            } else {
                return res.status(400).json({ resulte: false, message: "Articles not found" })
            }
        } catch (error) {
            return res.status(500).json({ resulte: false, error, message: "catch error" })
        }
    }
}