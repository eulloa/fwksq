import Link from 'next/link';

export default function BackToHome() {
  return (
    <div className="pt-5 dark:text-white">
      <Link href="/">
        <a className="text-xl">
          <i>&larr;</i>
        </a>
      </Link>
    </div>
  );
}
