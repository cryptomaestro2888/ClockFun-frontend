import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Time.fun - Tokenize Your Time</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Time.fun</h1>
        <p>Tokenize your time on the Ethereum Layer 2 blockchain Base</p>
        <div>
          <Link href="/create-token">
            <a>Create Token</a>
          </Link>
          <Link href="/purchase-token">
            <a>Purchase Token</a>
          </Link>
          <Link href="/redeem-token">
            <a>Redeem Token</a>
          </Link>
        </div>
      </main>
    </Layout>
  )
}