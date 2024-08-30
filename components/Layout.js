import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Time.fun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {/* Add more navigation items */}
      </nav>

      <main>{children}</main>

      <footer>
        <p>&copy; 2023 Time.fun</p>
      </footer>
    </div>
  )
}