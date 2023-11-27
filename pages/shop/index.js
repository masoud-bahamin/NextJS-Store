import React from 'react'
import fs from "fs"
import path from "path"
import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb'
import ProductCard from '@/components/modules/Card/ProductSlid'
import ProductsDisplay from '@/components/templates/Shop/ProductsDisplay'

export default function index({ products }) {
    return (
        <div>
            <BreadCrumb title={"Products"} />

            <ProductsDisplay products={products} />

        </div>
    )
}

export async function getStaticProps() {
    const dbPath = path.join(process.cwd(), "data", "db.json")
    const file = fs.readFileSync(dbPath)
    const DB = JSON.parse(file)
    const { products } = DB

    return {
        props: { products }
    }
}
