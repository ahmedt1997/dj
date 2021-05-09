
import Link from 'next/link'
import Layout from '../components/Layout.js'
export default function HomePage() {
  return (
    <Layout>
    <h1>Home</h1>
    <p>Lorem ipsum lor sit amet consectetur adipisicing elit. Consectetur aut doloribus commodi perspiciatis, dolores exercitationem explicabo iusto nemo consequatur minima?
    </p>
    <Link href="/about">About</Link>
    </Layout>
  )
}
