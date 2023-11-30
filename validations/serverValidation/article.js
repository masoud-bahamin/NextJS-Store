const validator = require("fastest-validator")

const v = new validator()

const schema = {
    title: { type: "string", min: 3, max: 100 },
    body: { type: "string", min: 3, max: 80000 },
    images : {type : "array" , optional : true}
}

const checkArticle = v.compile(schema)

export default checkArticle