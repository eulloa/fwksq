import Link from 'next/link';
import { Post, Posts } from '../types/types';

export default function BlogPosts({ posts }: Posts) {
  if (!posts || !posts.length) return null;

  return (
    <ol className="text-center space-y-6">
      {posts.map(({ date, id, summary, title }: Post) => (
        <Link href={`/posts/${id}`} key={`${date}-${title}`}>
          <a className="block">
            <li className="p-2" key={`${date}-${title}`}>
              <div className="dark:text-white">
                <h1 className="text-2xl font-bold text-center">{title}</h1>
                <p className="text-sm font-light pb-5 text-center">{date}</p>
                <p className="text-sm font-light">{summary}</p>
              </div>
            </li>
          </a>
        </Link>
      ))}
    </ol>
  );
}
