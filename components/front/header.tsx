import styles from './header.module.css'
import { FunctionComponent } from 'react'

const header: FunctionComponent = () => (
        <>
            <nav className={styles.nav}>
                <div className={styles.header}>
                    <div>
                        <img className={styles.logo} height="60" alt="Our logo, a lotus flower with nodes. It's cool." width="60" src="/images/logo.png" />
                        <h1 className={styles.title}>HackSC</h1><h1 className={styles.year}> &rsquo;21</h1>
                    </div>
                    <div className={styles.links}>
                        <a href="" className={styles.link}>Home</a>
                        <a href="" className={styles.link}>Blog</a>
                        <a href="" className={styles.link}>Sponsor Us</a>
                        <a href="" className={styles.link}>Our Team</a>
                        <a href="" className={styles.link}><button className={styles.apply}>Apply Now</button></a>
                    </div>
                </div>
            </nav>
        </>
)

export default header;