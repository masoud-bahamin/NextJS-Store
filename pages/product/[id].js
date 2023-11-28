import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb';
import Comments from '@/components/modules/Comments/Comments';
import ProductDisplay from '@/components/templates/Product/ProductDisplay';
import productModel from '@/models/product';
import connectToDb from '@/utils/db';
import React from 'react'


export default function Product({ data }) {

    return (
        <div>
            <BreadCrumb title={"Product Details"} />
            <ProductDisplay {...data} />
            <Comments _id={data._id} comments={data.comments}/>
        </div>
    )
}


export async function getStaticPaths() {
    connectToDb()
    const allproducts = await productModel.find({})
    const products = JSON.parse(JSON.stringify(allproducts))
    const paths = products.map(product => ({ params: { id: String(product._id) } }))
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    connectToDb()
    const { id } = context.params
    const data = await productModel.findOne({ _id: id }).populate("comments").lean()

    if (!data) {
        return {
            redirect: { destination: "/" }
        }
    }
    return {
        props: { data: JSON.parse(JSON.stringify(data)) },
        revalidate: 300
    }
}


