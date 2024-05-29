import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../header";
import AOS from 'aos'
import 'aos/dist/aos.css'

export interface ILayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
  className?: string;
  title?: string;
}

const Layout = (props: ILayoutProps) => {
  const { children, title } = props;
  useEffect(()=>{
    AOS.init({
      duration: 850
    });
  },[])
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-full h-auto">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
