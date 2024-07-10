import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Hero from "@/components/templates/Home/Hero";
import Collections from "@/components/templates/Home/Collections";
import MayLike from "@/components/templates/Home/MayLike";
import NewProducts from "@/components/templates/Home/NewProducts";
import Categories from "@/components/templates/Home/Categories";
import RecentNews from "@/components/templates/Home/RecentNews";
import connectToDb from "@/utils/db";
import productModel from "@/models/product";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home({ allProducts, likesProducts }) {
  return (
    <div className={`text-dark bg-back   ${poppins.className}`}>
      <Hero />
      <Collections />
      <MayLike likesProducts={likesProducts} />
      <NewProducts />
      <Categories />
      <RecentNews />
    </div>
  );
}

export async function getStaticProps() {
  connectToDb();

  const products = await productModel.find({});

  return {
    props: {
      allProducts: JSON.parse(JSON.stringify(products)),
      likesProducts: JSON.parse(JSON.stringify(products.slice(4, 8))),
    },
    revalidate: 30,
  };
}
