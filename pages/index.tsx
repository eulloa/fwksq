import Head from 'next/head'
import Link from 'next/link';
import About from '../components/about';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

type Post = {
  date: string;
  id: string;
  summary: string;
  title: string;
}

interface IndexProps {
  posts?: Post[];
}

export default function Index({ posts }: IndexProps) {
  return (
    <Layout home>
      <Head>
        <title>FWKSQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      {posts?.length > 0 &&
        <ol className="text-center space-y-6">
          {posts.map(({ date, id, summary, title }) => (
            <Link href={`/posts/${id}`} key={`${date}-${title}`}>
              <a className="block">
                <li className="p-2" key={`${date}-${title}`}>
                  <div>
                    <h1 className="text-2xl font-bold text-center">{title}</h1>
                    <p className="text-sm font-light pb-5 text-center">{date}</p>
                    <p className="font-light">{summary}</p>
                  </div>
                </li>
              </a>
            </Link>
          ))}
        </ol>
      }
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getSortedPostsData()
    }
  }
}