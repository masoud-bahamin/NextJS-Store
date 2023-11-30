import articleModel from '@/models/article'
import connectToDb from '@/utils/db'
import React from 'react'

export default function article({ data }) {
    return (
        <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32">
                <img
                    src={data.images[0]  || "https://mdbcdn.b-cdn.net/img/new/slides/198.jpg"}
                    className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
                    alt="image"
                />
                <div className="mb-6 flex items-center">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (23).jpg"
                        className="mr-2 h-8 rounded-full"
                        alt="avatar"
                        loading="lazy"
                    />
                    <div>
                        <span>
                            {" "}
                            Published <u>15.07.2020</u> by{" "}
                        </span>
                        <a href="#!" className="font-medium">
                            Anna Maria Doe
                        </a>
                    </div>
                </div>
                <h1 className="mb-6 text-3xl font-bold">
                    {data.title}
                </h1>
                <p>{data.body} <br /><br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi harum
                    tempore cupiditate asperiores provident, itaque, quo ex iusto rerum
                    voluptatum delectus corporis quisquam maxime a ipsam nisi sapiente qui
                    optio! Dignissimos harum quod culpa officiis suscipit soluta labore!
                    Expedita quas, nesciunt similique autem, sunt, doloribus pariatur maxime
                    qui sint id enim. Placeat, maxime labore. Dolores ex provident ipsa
                    impedit, omnis magni earum. Sed fuga ex ducimus consequatur corporis,
                    architecto nesciunt vitae ipsum consequuntur perspiciatis nulla esse
                    voluptatem quos dolorum delectus similique eum vero in est velit quasi
                    pariatur blanditiis incidunt quam.
                </p>
            </section>
        </div>

    )
}
export async function getStaticPaths() {
    connectToDb()
    const articles = await articleModel.find({})
    const paths = articles.map(article => ({ params: { id: String(article._id) } }))
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { id } = context.params;
    connectToDb()
    const data = await articleModel.findOne({ _id: id })

    return {
        props: { data: JSON.parse(JSON.stringify(data)) },
        revalidate : 60 * 60 * 24
    }
}
