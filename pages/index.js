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


export default function Home({images}) {
  console.log(images)
  return (
    <>
    <Main/>
    <Article/>
    <Access/>
    <Schedule/>
    <Partners images={images}/>
    <Contact/>
    <Footer/>
    </>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const sizeOf = require('image-size')
  const files = fs.readdirSync(path.join("public/partners"))
  const images = files.map((file, index) => {
    const imageSize = sizeOf(`public/partners/${files[index]}`)
    return {
      file: file,
      height: imageSize.height,
      width: imageSize.width,
      alt:`company logo ${file.split(".")[0]}`,
      type: imageSize.type
    }
  });
  console.log(images)
  return {
    props: {
      images,
    },
  };
}

