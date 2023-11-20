import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb';
import Comments from '@/components/modules/Comments/Comments';
import ProductDisplay from '@/components/templates/Product/ProductDisplay';
import React from 'react'

const fs = require("fs")
const path = require("path")

export default function Product({ data }) {

    console.log(data);
    return (
        <div>
            <BreadCrumb title={"Product Details"} />
            <ProductDisplay {...data} />
            <Comments />
        </div>
    )
}

const getProducts = async () => {
    const dbPath = path.join(process.cwd() , "data" , "db.json")
    const file = fs.readFileSync(dbPath)
    const DB = JSON.parse(file)
    return DB.products
}

export async function getStaticPaths() {

    const products = await getProducts()

    const paths = products.map(product => ({ params: { id: String(product.id) }}))

    return {
        paths,
        fallback: true
    }

}

export async function getStaticProps(context) {

    const products = await getProducts()

    const data = products.find(product => String(product.id) === context.params.id)

    if(!data){
        return {
            redirect : {destination : "/"}
        }
    }

    return {
        props: { data  : data},
        revalidate : 300
    }
}

