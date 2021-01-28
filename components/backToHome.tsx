import Link from 'next/link';

export default function BackToHome() {
   return (
      <div>
         <Link href="/">
            <a>⏪ Back to home</a>
         </Link>
      </div>
   );
}
