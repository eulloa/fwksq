import Head from 'next/head'
import About from '../components/about';
import BlogPosts from '../components/blogPosts';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { Posts } from '../types';

export default function Index({ posts }: Posts) {
  return (
    <Layout home>
      <Head>
        <title>FWKSQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      <BlogPosts posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getSortedPostsData()
    }
  }
}