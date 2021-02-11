import { useState } from 'react';
import Link from 'next/link';
import Theme from '../components/theme/theme';

export default function Header() {
  const [searchValue, setSearchValue] = useState<string>('');
  const handleChange = (e: any) => setSearchValue(e.target.value);

  return (
    <header className="flex pb-6 md:pb-0 dark:text-white">
      <Link href="/">
        <a href="#">
          <img src="/images/kev.jpg" alt="Kev" />
        </a>
      </Link>
      <div className="flex justify-end w-full">
        <ul className="block md:flex space-x-5">
          <li className="md:order-last text-right pb-2 md:pb-0 md:pl-4">
            <Theme />
          </li>
          <li className="text-right pb-2 md:pb-0">
            <Link href="/fitness">
              <a href="#">Fitness</a>
            </Link>
          </li>
          <li className="text-right pb-2 md:pb-0">
            <Link href="/investing">
              <a href="#">Investing</a>
            </Link>
          </li>
          <li>
            <form className="border search flex" method="GET" action="/search">
              <input
                className="p-2 bg-transparent focus:outline-none"
                name="q"
                placeholder="Search"
                type="text"
                value={searchValue}
                onChange={handleChange}
              />
              <input type="submit" value="🔍" disabled={!searchValue} />
            </form>
          </li>
        </ul>
      </div>
    </header>
  );
}
