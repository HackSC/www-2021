import Head from 'next/head'
import Header from '@/components/front/header'
import styles from './index.module.scss'
import FirstSection from '@/components/front/first'

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
        <div style={{position: 'absolute',  right: 0, top: '150vh', zIndex: -2}}><img width="500" src="/images/handglobe.png" /></div>
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

  <section style={{height: '200px', background: "linear-gradient(180deg, #FFFFFF 0%, rgba(43, 45, 61, 0) 100%), #181923"}}>

  </section>
  <section style={{height: '100vh', background: "#181923"}}>
    <div className={styles.dark}>
      <img src="/images/connect.png" width="450px" />
      <div className={styles.verticals}>
        <h1> Verticals </h1>
        <div className={styles.verticalsGrid}>
          <div className={styles.verticalCell}>
            <img className={styles.verticalCell}></img>
            <h3 className={styles.verticalTitle}>PERSON</h3>
            <h4 className={styles.verticalDescription}>Everyone deserves to feel comfortable in their own skin, online or off.</h4>
          </div>
          <div className={styles.verticalCell}>
            <img className={styles.verticalCell}></img>
            <h3 className={styles.verticalTitle}>PERSON</h3>
            <h4 className={styles.verticalDescription}>Everyone deserves to feel comfortable in their own skin, online or off.</h4>
          </div>
          <div className={styles.verticalCell}>
            <img className={styles.verticalCell}></img>
            <h3 className={styles.verticalTitle}>PERSON</h3>
            <h4 className={styles.verticalDescription}>Everyone deserves to feel comfortable in their own skin, online or off.</h4>
          </div>
          <div className={styles.verticalCell}>
            <img className={styles.verticalCell}></img>
            <h3 className={styles.verticalTitle}>PERSON</h3>
            <h4 className={styles.verticalDescription}>Everyone deserves to feel comfortable in their own skin, online or off.</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
)

export default Home
