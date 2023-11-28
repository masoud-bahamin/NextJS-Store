import userModel from "@/models/user"
import connectToDb from "@/utils/db"
import fs from "fs"
import path from "path"


export default async function Handler(req, res) {
    connectToDb()
    switch (req.method) {
        case "GET": {
            try {
                const users = await userModel.find({})
                if (users) {
                    return res.status(200).json({ users, resulte: true })
                } else {
                    return res.status(404).json({ message: "information wrong", resulte: false })
                }

            } catch (error) {
                return res.status(400).json({ error, message: "catch eror", resulte: false })
            }

        }
    }

}
