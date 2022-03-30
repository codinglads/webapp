
import { Rating } from '@mui/material';
import Head from 'next/head'
import { PostCard, Categories, PostWidget, RWidget } from '../src/components/next';
import { getPop } from '../services'


export default function Home({ popSpots }) {
    return (
        <div className="container mx-auto px-10 mb-8">
            <Head>
                <title>CMS Blog</title>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className="lg:col-span-8 col-span-1">
                    {popSpots.map((post) => <PostCard post={post.node} key={post.title} />)}
                </div>
                <div className="lg:col-span-4 col-span-1">
                    <div className="lg:sticky relative top-8">
                        <PostWidget />
                        <RWidget />
                        <Categories />

                    </div>
                </div>
            </div>

        </div>
    )
}
//this is where we get the query data make sure to import the query function 
export async function getStaticProps() {
    const popSpots = (await getPop()) || [];

    return {
        props: { popSpots }
    }
}