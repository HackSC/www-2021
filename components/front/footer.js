import Logo from '../images/logoAndText.png';
import styled from 'styled-components';
import { Bold, Body } from './type';

const Footer = () => {
	return (
		<Wrapper>
			<Row>
				<SocialColumn>
					<LogoGraphic src={Logo} />
					<SocialLinks>
						{/* <a href="mailto:hackers@hacksc.com">
							<img src={Email} />
						</a>
						<a href="https://www.facebook.com/hackscofficial/" target="_blank">
							<img src={Facebook} />
						</a>
						<a href="https://www.instagram.com/hackscofficial/" target="_blank">
							<img src={Instagram} />
						</a>
						<a href="https://medium.com/@hacksc" target="_blank">
							<img src={Medium} />
						</a>
						<a href="https://twitter.com/hackscofficial" target="_blank">
							<img src={Twitter} />
						</a> */}
					</SocialLinks>
					<Copyright>HackSC 2019 &copy;</Copyright>
				</SocialColumn>

				<LinksColumn>
					<Bold>HackSC</Bold>

					<Links>
						<a href="https://hacksc.com">Overview</a>
						<a
							href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
							target="_blank"
							rel="noreferrer"
						>
							MLH Code of Conduct
						</a>
					</Links>
				</LinksColumn>

				<ContactColumn>
					<Bold>Contact us</Bold>
					<ContactBody>
						Reach out to us at{' '}
						<a href="mailto:hackers@hacksc.com">hackers@hacksc.com</a> or on
						social media if you have any questions or want more information.
						Want to talk about sponsorship? Let us know at{' '}
						<a href="mailto:sponsorship@hacksc.com">sponsorship@hacksc.com</a>!
					</ContactBody>
				</ContactColumn>
			</Row>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	background: #f6f6f6;
	padding-top: 64px;
	padding-bottom: 64px;
`;

const Row = styled.div`
	max-width: 95%;
	display: flex;
	flex-direction: row;
	${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `}
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	${({ theme }) => theme.media.tablet`
    width: 100%;
  `}
`;

const LogoGraphic = styled.img`
	width: 200px;
	margin-bottom: 16px;
`;

const SocialColumn = styled(Column)`
	width: 35%;
	padding: 0 32px;
	box-sizing: border-box;
	${({ theme }) => theme.media.tablet`
    padding: 0 16px;
  `}
`;

const LinksColumn = styled(Column)`
	width: 25%;
	padding: 0 32px;
	box-sizing: border-box;
	${({ theme }) => theme.media.tablet`
    margin-top: 32px;
  `}
`;

const ContactColumn = styled(Column)`
	width: 40%;
	padding: 0 32px;
	box-sizing: border-box;
	${({ theme }) => theme.media.tablet`
    margin-top: 32px;
  `}
`;

const ContactBody = styled(Body)`
	margin-top: 16px;
`;

const SocialLinks = styled.div`
	width: 100%;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	padding: 0 16px;
	a {
		display: inline-flex;
		margin-right: 24px;
	}
`;

const Links = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 16px;
	a {
		margin-bottom: 8px;
	}
`;

const Copyright = styled.p`
	font-size: 18px;
	color: #b2b2b2;
	padding-left: 16px;
	margin-top: 24px;
`;

export default Footer;
