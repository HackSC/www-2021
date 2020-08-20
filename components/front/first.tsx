import styles from './section.module.css'
// import {RainbowText} from '@/components/front/rainbowtext'

const First = () => {
    return (
        <section style={{height: '100vh'}}>
            <span className={styles.container}>
    
            <span>
            <img className={styles.topo} height="900" src="/images/topo.png"/>
            <img className={styles.globe} height="500" src="/images/globe.png"/>
        </span>
        <span className={styles.applyNowWrapper}>
            {/* <RainbowText text="USC's Largest Hackathon" /> */}
            <img src="/images/rainbow.png" height="125" width="475" />
            02.19.21 - 02.21.21
            <button className={styles.apply}>Apply Now</button>
        </span>
            </span>
      </section>
    )
}

export default First;