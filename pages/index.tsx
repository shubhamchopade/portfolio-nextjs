import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Landing } from "../components/Landing";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shubham Chopade - Full Stack Developer - Porfolio Website</title>
        <meta
          name="description"
          content="Hi, my name is Shubham Chopade and I am a graduate student pursuing Masters's in Computer Science at Syracuse University. I have over 2 years of experience working as a Full Stack Developer."
        />
        <meta
          name="keywords"
          content="portfolio, software engineer, open to work"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="60 days" />
        <meta name="author" content="Shubham Chopade" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shubhamchopade.com/" />
        <meta
          property="og:title"
          content="Shubham Chopade - Full Stack Developer - Porfolio Website"
        />
        <meta
          property="og:description"
          content="Hi, my name is Shubham Chopade and I am a graduate student pursuing Masters's in Computer Science at Syracuse University. I have over 2 years of experience working as a Full Stack Developer."
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />

        <meta
          property="article:modified_time"
          content="2022-10-02T23:34:27+00:00"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  );
};

export default Home;
