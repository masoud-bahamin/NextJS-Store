import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb';
import Comments from '@/components/modules/Comments/Comments';
import ProductDisplay from '@/components/templates/Product/ProductDisplay';
import productModel from '@/models/product';
import connectToDb from '@/utils/db';
import React from 'react'

export default function Product({data}) {

    return (
        <div>
            <BreadCrumb title={"Product Details"} />
            <ProductDisplay {...data} />
            <Comments _id={data._id} comments={data.comments} />
        </div>
    )
}


// export async function getStaticPaths() {
//     connectToDb()
//     const allproducts = await productModel.find({})
//     const products = await JSON.parse(JSON.stringify(allproducts))

//     const paths = products.map(product => ({ params: { id: product._id } }))
//     return {
//         paths ,
//         fallback: true
//     }
// }

// export async function getStaticProps(context) {
//     connectToDb()
//     const { id } = context.params
//     const product = await productModel.findOne({ _id: id }).populate("comments").lean()
//     const data = await JSON.parse(JSON.stringify(product))
//     if (!data) {
//         return {
//             redirect: { destination: "/" }
//         }
//     }
//     return {
//         props: { data },
//         revalidate: 300
//     }

// }


export async function getServerSideProps(context) {
    connectToDb()

    const product = await productModel.findOne({ _id: context.params.id }).populate("comments").lean()

    const data = await JSON.parse(JSON.stringify(product))

    return { props: { data  } }
}
