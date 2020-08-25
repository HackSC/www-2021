import styles from './first.module.css'

const First = () => {
    return (
        <section style={{height: '100vh'}}>
          <span className={styles.container}>
          <span className={styles.applyNowWrapper}>
              <span className={`${styles.rainbow} ${styles.headingText}`}>USC&apos;s Largest Hackathon</span> 
              <span className={styles.rainbow}>02.19.21 &mdash; 02.21.21</span>
              <button className={styles.apply}>Apply Now</button>
          </span>
            </span>
      </section>
    )
}

export default First;