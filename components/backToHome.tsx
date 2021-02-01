import Link from 'next/link';

export default function BackToHome() {
  return (
    <div className="pt-5">
      <Link href="/">
        <a className="text-xl">🔙</a>
      </Link>
    </div>
  );
}
