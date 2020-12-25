import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.scss'
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

type Post = {
  date: string;
  id: string;
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
      <img src="/images/kev.jpg" alt="Kev" />
      {posts && posts.length > 0 &&
        <ul>
          {posts.map(({ id, date, title }) => (
            <li key={`${date}-${title}`}>
              <Link href={`/posts/${id}`}>
                <a>{title} - {date}</a>
              </Link>
            </li>
          ))}
        </ul>
      }
      <footer className={styles.footer}></footer>
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