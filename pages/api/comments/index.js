import commentMedel from "@/models/comment";
import connectToDb from "@/utils/db";


export default async function (req, res) {
    const { method, body, query } = req
    connectToDb()

    if (method === "POST") {
        try {
            const { message, productId  , username} = body
            const comment = await commentMedel.create({ message, productId , username })
            if (comment) {
                return res.status(201).json({ resulte: true, comment })
            } else {
                return res.status(401).json({ resulte: false, message: "comment not found" })
            }
        } catch (error) {
            return res.status(501).json({ resulte: false, message: "catch error", error })
        }
    }
}