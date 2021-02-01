import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex">
      <Link href="/">
        <a href="#">
          <img src="/images/kev.jpg" alt="Kev" />
        </a>
      </Link>
      <div className="flex justify-end w-full">
        <ul className="flex space-x-5">
          <li>
            <Link href="/fitness">
              <a href="#">Fitness</a>
            </Link>
          </li>
          <li>
            <Link href="/investing">
              <a href="#">Investing</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
