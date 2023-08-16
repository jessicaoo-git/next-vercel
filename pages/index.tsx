import { Inter } from 'next/font/google'

import Link from 'next/link'
import {MainLayout} from '../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage({children}) {
  return (
   <MainLayout>
      <h1>Home Page</h1>

      <h1 className= {'title'}>
        Ir a <Link href='/about'> about </Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.js</code>
      </p>
    


   </MainLayout>
  )
}
