import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/templates/Home/Hero'
import Collections from '@/components/templates/Home/Collections'
import MayLike from '@/components/templates/Home/MayLike'
import NewProducts from '@/components/templates/Home/NewProducts'
import Categories from '@/components/templates/Home/Categories'
import RecentNews from '@/components/templates/Home/RecentNews'

const fs = require("fs")
const path = require("path")

const inter = Inter({ subsets: ['latin'] })

export default function Home({allProducts , likesProducts}) {

  console.log(allProducts);

  return (
    <div className=''>
      <Hero />
      <Collections />
      <MayLike likesProducts={likesProducts}/>
      <NewProducts />
      <Categories />
      <RecentNews />
    </div >
  )
}

export async function getStaticProps() {

  const dbPath = path.join(process.cwd() , "data" , "db.json")
  const file = fs.readFileSync(dbPath)
  const DB = JSON.parse(file)
  const {products} = DB


  return {
    props: { allProducts : products , likesProducts : products?.slice(4,8)},
    revalidate : 30
  }
}
