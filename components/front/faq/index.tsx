import FaqEntry from './entry';

interface Entry {
    question: string,
    answer: string
}

const Faqs: Entry[] = [
    {
        question: 'what is a hackathon?',
        answer: 'A hackathon is a 36 hour competition in which teams of students collaborate to ideate and innovate solutions to real world problems! No knowledge of coding or hacking necessary.',
    },
    {
        question: 'HOW DO TEAMS WORK?',
        answer: 'A hackathon is a 36 hour competition in which teams of students collaborate to ideate and innovate solutions to real world problems! No knowledge of coding or hacking necessary.',
    },
    {
        question: 'WHY HACKSC?',
        answer: 'A hackathon is a 36 hour competition in which teams of students collaborate to ideate and innovate solutions to real world problems! No knowledge of coding or hacking necessary.',
    },
    {
        question: 'WHO CAN PARTICIPATE?',
        answer: 'A hackathon is a 36 hour competition in which teams of students collaborate to ideate and innovate solutions to real world problems! No knowledge of coding or hacking necessary.',
    },
    {
        question: 'DOES IT COST ANYTHING?',
        answer: 'A hackathon is a 36 hour competition in which teams of students collaborate to ideate and innovate solutions to real world problems! No knowledge of coding or hacking necessary.',
    },
    {
        question: 'How do I choose a track?',
        answer: 'A hackathon is a 36 hour competition in which teams of students collaborate to ideate and innovate solutions to real world problems! No knowledge of coding or hacking necessary.',
    },
    {
        question: '404: Question Not Found',
        answer: 'A hackathon is a 36 hour competition in which teams of students collaborate to ideate and innovate solutions to real world problems! No knowledge of coding or hacking necessary.',
    },
]
const faq = () => {
    return (<>
        {Faqs.map(({question, answer}) => <FaqEntry key={question.substring(0, 10)} question={question} answer={answer} />)}
    </>)    
}

export default faq;
