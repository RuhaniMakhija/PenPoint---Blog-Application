import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Layout from "@/layout";
import FeaturedPosts from "@/components/FeaturedPosts";
import Post from "@/components/Post";
import { TECHJUPTER_LOGO } from "@/constants/images";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

const myJson = [
  {
    pageUrl: "archit",
    title: "Archit Post 1",
    description:
      "Baking soda A quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdogA quick brown fox jumps over the lazy sdog",
    author: "Archit",
    date: "25th July, 2024",
  },
  {
    pageUrl: "ruhani",
    title: "Sandwiches",
    description:
      "Bread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucitBread bisucit",
    author: "Ruhani",
    date: "29th July, 2024",
  },
  {
    pageUrl: "techjupyter",
    title: "Cola",
    description:
      "COla 5x 10x Educatiuon COla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x EducatiuonCOla 5x 10x Educatiuon",
    author: "TechJupyter",
    date: "25th July, 2030",
  },
];

export default function Posts() {
  const router = useRouter();
  const pageUrlExtracted = router.query.slug;
  console.log("The extracted url is:", pageUrlExtracted);

  const pageData = myJson?.filter((item) => item?.pageUrl === pageUrlExtracted);

  console.log("Filterted this page DataL", pageData);

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#ffffff",
              border: "4px solid #000000",
              borderRadius: "30px",
              padding: "5%",
              gap: "20px",
            }}
          >
            <h2>{pageData[0]?.title}</h2>
            <h6>
              {`Posted by ${pageData[0]?.author}`}{" "}
              <span>{pageData[0]?.date}</span>
            </h6>

            <Image
              src={TECHJUPTER_LOGO}
              alt={"post-image"}
              width="350"
              height="400"
            />
            <p style={{ fontSize: "15px", lineHeight: "1.5em" }}>
              {pageData[0]?.description}
            </p>
          </div>
        </Layout>
      </main>
    </>
  );
}
