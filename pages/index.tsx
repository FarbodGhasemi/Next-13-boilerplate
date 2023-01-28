import { IndexPageWrapper } from '@/styles/pages'
import Head from 'next/head'

const Index = () => {
  return (
    <IndexPageWrapper>
      <Head>
        <title>Ready!</title>
        <meta name="description" content="Ready!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="ReadyBoxWrapper">
        {`You're all set!`}
      </main>
    </IndexPageWrapper>
  )
}

export default Index