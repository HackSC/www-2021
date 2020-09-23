import React from 'react';
import styles from './calendar.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import SubjectIcon from '@material-ui/icons/Subject';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import hackSC from '../images/logo.png';
import nodelogo from '../images/nodelogo.png';

const useStyles = makeStyles(() => ({
	title: {
		fontSize: 'calc(12px + 2vw)',
		lineHeight: 'calc(12px + 2.5vw)',
		letterSpacing: '1px',
		minWidth: '50vw',
		font:
			'--font-sans: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
		fontStyle: 'normal',
		fontWeight: 'normal',
		textTransform: 'uppercase',
	},
	date: {
		color: 'var(--blue)',
		fontSize: 'calc(12px + 1.5vw)',
		wordWrap: 'normal',
		maxWidth: '20vw',
	},
	dot: {
		padding: '0px',
		margin: '0px',
		alignItems: 'center',
		justifyContent: 'center',
		background: 'transparent',
	},
	separator: {
		height: 'calc(90px + 10vh)',
	},
	line: {
		backgroundColor: '#FEDA22',
		margin: '10px',
	},
	imageIcon: {
		maxHeight: 'calc(20px + 4vw)',
		maxWidth: 'calc(20px + 4vw)',
		alignContent: 'center',
		padding: '0px',
		margin: '0px',
	},
	iconRoot: {
		height: 'calc(20px + 4vw)',
		width: 'calc(20px + 4vw)',
	},
}));

export default function CalendarSection() {
	const classes = useStyles();

	return (
		<>
			<section className={styles.calendar}>
				<h2 className={styles.timelineHeader}>Timeline</h2>
				<img alt="" src={nodelogo} className={styles.nodelogo} />
				<div className={styles.calendarWrapper}>
					<Timeline>
						<TimelineItem>
							<TimelineOppositeContent>
								<Typography
									variant="h4"
									color="textSecondary"
									className={classes.date}
								>
									00.00.00
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator className={classes.separator}>
								<div className={classes.dot}>
									<LaptopMacIcon classes={{ root: classes.iconRoot }} />
								</div>
								<TimelineConnector className={classes.line} />
							</TimelineSeparator>
							<TimelineContent>
								<Typography className={classes.title}>
									Applications Released
								</Typography>
								<Typography>
									Make sure to subscribe to our mailing list!
								</Typography>
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineOppositeContent>
								<Typography
									variant="h4"
									color="textSecondary"
									className={classes.date}
								>
									00.00.00
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator className={classes.separator}>
								<div className={classes.dot}>
									<SubjectIcon classes={{ root: classes.iconRoot }} />
								</div>
								<TimelineConnector className={classes.line} />
							</TimelineSeparator>
							<TimelineContent>
								<Typography className={classes.title}>
									Applications Due
								</Typography>
								<Typography>Application Link: // link </Typography>
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineOppositeContent>
								<Typography
									variant="h4"
									color="textSecondary"
									className={classes.date}
								>
									02.19.21 - 02.21.21
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator className={classes.separator}>
								<div className={classes.dot}>
									<Icon classes={{ root: classes.iconRoot }}>
										<img
											alt="hack icon"
											className={classes.imageIcon}
											src={hackSC}
										/>
									</Icon>
								</div>
							</TimelineSeparator>
							<TimelineContent>
								<Typography className={classes.title}>Hackathon!</Typography>
								<Typography>Online || Free </Typography>
							</TimelineContent>
						</TimelineItem>
					</Timeline>
					{/* </ThemeProvider> */}
				</div>
			</section>
		</>
	);
}
// export default CalendarSection;
