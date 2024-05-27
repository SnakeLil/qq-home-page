import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../header";

export interface ILayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
  className?: string;
  title?: string;
}

const Layout = (props: ILayoutProps) => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-screen h-auto">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
