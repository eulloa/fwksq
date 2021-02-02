import Layout from '../components/layout';
import Link from 'next/link';
import { getSearchedPosts } from '../lib/posts';
import { Post, Posts } from '../types';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

interface SearchedPostProps {
  searchedPosts: Posts;
}

export default function Search({ searchedPosts }: SearchedPostProps) {
  const router = useRouter();
  const searchedTerm = router?.query?.q;

  if (!searchedPosts || !searchedPosts.length) {
    return (
      <Layout>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Oops!</h1>
          <p>
            {' '}
            Your search term <em>{`${searchedTerm}`}</em> did not return any
            results! Please try again.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ol className="text-center space-y-6">
        {searchedPosts.map(({ date, id, title }: Post) => (
          <Link href={`/posts/${id}`} key={`${date}-${title}`}>
            <a className="block">
              <li>
                <div>
                  <h1 className="text-2xl font-bold text-center">{title}</h1>
                  <p className="text-sm font-light pb-5 text-center">{date}</p>
                </div>
              </li>
            </a>
          </Link>
        ))}
      </ol>
    </Layout>
  );
}

export async function getServerSideProps({ query }: GetServerSideProps) {
  return {
    props: {
      searchedPosts: await getSearchedPosts(query.q),
    },
  };
}
