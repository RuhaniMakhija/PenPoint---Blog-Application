import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Layout from "@/layout";
import FeaturedPosts from "@/components/FeaturedPosts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Tech Jupyter"}</title>
        <meta name="description" content="TechJupyter, Your Tech Archive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          {" "}
          <FeaturedPosts />{" "}
        </Layout>
      </main>
    </>
  );
}
