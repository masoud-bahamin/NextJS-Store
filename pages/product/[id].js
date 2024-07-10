import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import Comments from "@/components/modules/Comments/Comments";
import ProductDisplay from "@/components/templates/Product/ProductDisplay";
import productModel from "@/models/product";
import connectToDb from "@/utils/db";
import React from "react";

export default function Product({ data }) {
  return (
    <div className="bg-back">
      <BreadCrumb title={"Product Details"} />
      <ProductDisplay {...data} />
      <Comments _id={data._id} comments={data.comments} />
    </div>
  );
}

export async function getServerSideProps(context) {
  connectToDb();

  const product = await productModel
    .findOne({ _id: context.params.id })
    .populate("comments")
    .lean();

  const data = await JSON.parse(JSON.stringify(product));

  return { props: { data } };
}
