import Head from './Head'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <main>{children}</main>
      <Footer />
    </>
  )
}
