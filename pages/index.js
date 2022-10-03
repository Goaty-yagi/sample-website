import Head from 'next/head'
import Image from 'next/image'
import Access from '../components/Access'
import Article from '../components/Article'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Partners from '../components/Partners'
import Schedule from '../components/Schedule'
import styles from '../styles/Home.module.css'
import fs from "fs";
import path from "path";

export default function Home({files}) {
  return (
    <>
    <Main/>
    <Article/>
    <Access/>
    <Schedule/>
    <Partners files={files}/>
    <Contact/>
    <Footer/>
    </>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("public/partners"));
  console.log("files",files)
  return {
    props: {
      files,
    },
  };
}

