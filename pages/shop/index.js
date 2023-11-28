import React from 'react'
import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb'
import ProductCard from '@/components/modules/Card/ProductSlid'
import ProductsDisplay from '@/components/templates/Shop/ProductsDisplay'
import connectToDb from '@/utils/db'
import productModel from '@/models/product'

export default function index({ products }) {
    return (
        <div>
            <BreadCrumb title={"Products"} />

            <ProductsDisplay products={products} />

        </div>
    )
}

export async function getStaticProps() {
    connectToDb()

    const data = await productModel.find({})

    return {
        props: { products : JSON.parse(JSON.stringify(data))}
    }
}
