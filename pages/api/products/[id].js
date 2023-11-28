import productModel from "@/models/product"
import connectToDb from "@/utils/db"

const handler = async (req, res) => {
    connectToDb()
    if (req.method === "GET") {
        try {
            const {id} = req.query
        const product = await productModel.findOne({ _id: id })

        if (product) {
            return res.status(200).json({ product, resulte: true })
        } else {
            return res.status(404).json({ message: "product not found", resulte: false })
        }
        } catch (error) {
            return res.status(404).json({ message: "catch error", resulte: false  , error})
        }
        
    }


}

export default handler