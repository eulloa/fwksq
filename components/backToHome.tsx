import Link from 'next/link';
import styles from './layout.module.scss';

export default function BackToHome() {
   return (
      <div className={styles.backToHome}>
         <Link href="/">
            <a>⏪ Back to home</a>
         </Link>
      </div>
   );
}
