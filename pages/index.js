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

export default function Home() {
  return (
    <>
    <Main/>
    <Article/>
    <Access/>
    <Schedule/>
    <Partners/>
    <Contact/>
    <Footer/>
    </>
  )
}
