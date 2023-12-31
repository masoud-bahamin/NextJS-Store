import productModel from "@/models/product"
import connectToDb from "@/utils/db"
import checkProduct from "@/validations/serverValidation/Product"

export default async function handler(req, res) {
    connectToDb()

    switch (req.method) {
        case "GET": {
            try {
                const products = await productModel.find({})
                if (products) {
                    return res.status(200).json({
                        resulte: true,
                        products: products
                    })
                } else {
                    return res.status(400).json({ message: "server error", resulte: false, error })
                }

            } catch (error) {
                return res.status(400).json({ message: "error catch", resulte: false, error })
            }

        }
        case "POST": {
            const validation = checkProduct(req.body)
            if (validation !== true) {
                return res.status(422).json(validation)
            }

            const { title, price, description, images, discountPercentage, rating, stock, brand, category, thumbnail } = req.body
            try {
                const product = await productModel.create({ title, price, description, images, discountPercentage, rating, stock, brand, category, thumbnail })
                if (product) {
                    return res.status(201).json({ message: "the product created successfully", resulte: true, product })
                } else {
                    return res.status(404).json({ message: "information is NOT valid", resulte: false })
                }
            } catch (error) {
                return res.status(400).json({ message: "error catch", resulte: false, error })
            }

            break
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
