import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <div>
        <p>Hello Guys</p>
        <Link href="/users">Users</Link>
        <ProductCard/>
      </div>
    </main>
   
  )
}
