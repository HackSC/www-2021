import Head from 'next/head'
import Header from '@/components/front/header'
import styles from './index.module.css'
import FirstSection from '@/components/front/first'
import Verticals from '@/components/front/verticals'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
const Home = () => (
  <div> 
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <FirstSection />
    
    <section className={styles.details} style={{height: '70vh'}}>
        <img className={styles.waves} height="270" src="/images/waves.png"/>
        <h1 className={styles.detailsHeading}> Details </h1>
        <div className={styles.detailsWrapper}>
          <div style={{flexDirection: 'column'}}>
          <p className={styles.detailsText}>
            <strong>Want to connect the world?</strong> HackSC is USC’s largest hackathon! This year we are focused on ideas/solutions that will help connect our world during this time.
            Get ready for a weekend full of innovation, connection, and education. In an interdisciplinary endeavor, join together with 800+ visionaries to engage in workshops, listen to speakers, and develop programs, tools, and relationships that can last for life. We hope to have you join us! 
          </p>
          <span>
              <p style={{width: '80%'}}>
                <strong>What is a hackathon?</strong> A hackathon is a 36 hour competition in which teams of students collaborate to ideate and innovate solutions to real world problems! No knowledge of coding or hacking necessary.
              </p>
              <p style={{width: '80%'}}>
                <strong>Who can participate?</strong> Any student (18+) with a passion for connecting the world through innovation. Students of all disciplines: coding, art & design, engineering, business, marketing, policy…etc. Every skill can be utilized to build a product or develop a solution!
              </p>
            </span>

          </div>
        </div>
        <div style={{overflow: 'hidden', position: 'absolute', right: 0, top: '135vh', zIndex: -2}}><Fade right><img width="500" src="/images/handglobe.png"/></Fade></div>
        <div className={styles.faq}>
              <p className={styles.faqQuestion}>WHEN?</p> 
              <p className={styles.faqResponse}>February 19th - 21st, 2021.</p>

              <p className={styles.faqQuestion}>WHERE?</p> 
              <p className={styles.faqResponse}>Online!</p>

              <p className={styles.faqQuestion}>PRICE?</p> 
              <p className={styles.faqResponse}>Free!</p>
      
              <p className={styles.faqQuestion}>HOW?</p> 
              <p className={styles.faqResponse}>Apps open in November.</p>
        </div>

     
    </section>

  <section style={{height: '80vh', marginTop: '16vh'}}>
    <div className={styles.connectivity}>
          <h2> Theme: Connectivity </h2>
          <hr />
      <h3 style={{color: '#757575', textTransform: 'uppercase', textAlign: 'center', fontWeight: 'bold', fontSize: '40px'}}>Verticals</h3>
      <Verticals />
      <img className={styles.nodes} src="/images/nodes.png"/>
    </div>
  </section>
  <style jsx global>{`
        body {
          background: #FFFEFF;
        }
      `}</style>
  </div>
)

export default Home
