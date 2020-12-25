import React from 'react';
import Head from 'next/head';
import BackToHome from './backToHome';
import styles from './layout.module.scss';

export const siteTitle = 'FWKSQ';

interface LayoutProps {
   children?: React.ReactNode;
   home?: boolean;
}

export default function Layout({ children, home }: LayoutProps) {
   return (
      <div className={styles.container}>
         <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Kevin H. Kim - FWKSQ" />
            <meta name="og:title" content={siteTitle} />
         </Head>
         <header className={styles.header}></header>
         <main>{children}</main>
         {!home && <BackToHome />}
      </div>
   );
}