import styles from './verticals.module.css'
import Zoom from 'react-reveal/Zoom';
interface Vertical {
    name: string,
    byline: string,
    info: string,
    color: string
}

const VerticalInfo: Vertical[] = [
    {
        name: 'person',
        byline: 'Everyone deserves to feel comfortable in their own skin, online or off.',
        info: 'asdfjksdfhnasjkfvasdjkfhajkjsdffjka',
        color: '#FEDA22'
    },
    {
        name: 'team',
        byline: 'Mother Earth has a fever and it’s in our best interest to cure her.',
        info: 'asdfjksdfhnasjkfvasdjkfhajkjsdffjka',
        color: '#86DCEA'
    },
    {
        name: 'customer',
        byline: 'Not everyone has access to financial literacy, legal aid, health information, and other',
        info: 'asdfjksdfhnasjkfvasdjkfhajkjsdffjka',
        color: '#97329A'
    },
    {
        name: 'device',
        byline: 'The conversation around mental health is becoming more accepted, but there is still a ',
        info: 'asdfjksdfhnasjkfvasdjkfhajkjsdffjka',
        color: '#FF2B9D'
    }
]
const Verticals = () => {
    return (
        <div className={styles.verticals}>
            <Zoom delay={425}>
            {VerticalInfo.map(({ name, byline, info, color }) => {
                return (<div className={styles.card} key={name}>
                    <img alt={`An icon representing ${name}`} src={`/images/verticals/${name}.svg`} />
                    <h3 style={{color}}>{name}</h3>
                    <p>
                        {byline}
                    </p>
                    </div>)
            })}
            </Zoom>
        </div>
    )
}

export default Verticals