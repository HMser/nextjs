import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>


<footer>
  <div className="inside__footer">
    <p className="copyright">
      Design By  <a href="https://www.hmser.ml/"> HM </a>
      <br />
       {`© ${new Date().getFullYear()}`} StatusArea, All Rights Reserved.
      <br /> </p>
  </div>
</footer>
 
</>


    </>
  )
}
