"use client";

import { Content } from "@/components/parts/Content";
import Footer from "@/components/parts/Footer";
import { Header } from "@/components/parts/Header";

export default function Home() {

  return (
    <div className='w-[90%] mr-auto ml-auto max-w-[1200px]' >
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
