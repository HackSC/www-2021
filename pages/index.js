import Head from 'next/head'
import Terminal from '../components/terminal';

const Home = () => (
  <div className="container">
    <Head>
      <title>HackSC 2021</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Terminal />

    <style jsx>{`

    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background: #1f1f1f;
        color: #EAEAEA;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
