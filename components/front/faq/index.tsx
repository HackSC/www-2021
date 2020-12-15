import FaqEntry from './entry';
import Fade from 'react-reveal/Fade';

interface Entry {
	question: string;
	answer: string;
}

const Faqs: Entry[] = [
	{
		question: 'what is a hackathon?',
		answer:
			'A hackathon is a 36 hour competition in which teams of students collaborate to ideate and innovate solutions to real world problems! No knowledge of coding or hacking necessary.',
	},
	{
		question: 'Who can participate?',
		answer:
			'Any college student of any major! Every skill/field of study can be applied at the hackathon. Anyone with a passion for innovation and/or connecting the world will be a great asset to any team.',
	},
	{
		question: 'What if I don’t know how to code?',
		answer:
			'Don’t worry! HackSC offers plenty of beginner friendly workshops to get you started and help you lift your projects off the ground. ',
	},
	{
		question: 'What if I do not have a team yet?',
		answer:
			'HackSC will provide channels for you to join/search for teams and others to work with! Look out for more information on how to find a team once you have been admitted to the hackathon.',
	},
	{
		question: 'What will I need?',
		answer:
			'A computer and a passion for HackSC’s mission of connecting the world!',
	},
	{
		question: 'Will there be a hardware lab?',
		answer:
			'Due to COVID, unfortunately, we are unable to provide hardware (VR headsets, Arduino, etc) rentals this year.',
	},
	{
		question: 'How many people can I have per team?',
		answer: 'Maximum of 4 people',
	},
	{
		question: 'When do applications open?',
		answer:
			'Applications are open from December 1st through the 21st! Check here or our social media for updates. ',
	},
	{
		question: 'What are verticals?',
		answer:
			'In order to focus your projects on one specific area of Connectivity, we created 4 different categories (verticals) for you to develop under. There will be a winner of a prize in each vertical.',
	},
	{
		question: '404: Question Not Found',
		answer:
			"Please email hacker@hacksc.com if you have any questions! We'd love to hear from you.",
	},
];
const faq = () => {
	return (
		<div
			style={{
				marginTop: 64,
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}
		>
			<Fade>
				{Faqs.map(({ question, answer }) => (
					<FaqEntry
						key={question.substring(0, 15)}
						question={question}
						answer={answer}
					/>
				))}
			</Fade>
		</div>
	);
};

export default faq;
