import React from 'react';
import Head from 'next/head';
import BackToHome from './backToHome';
import Header from './header';
import Footer from './footer';

export const siteTitle = 'FWKSQ';

interface LayoutProps {
  children?: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: LayoutProps) {
  return (
    <div className="max-w-screen-md mx-auto bg-offwhite p-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kevin H. Kim - FWKSQ" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header />
      <main>{children}</main>
      {!home && <BackToHome />}
      <Footer />
    </div>
  );
}
