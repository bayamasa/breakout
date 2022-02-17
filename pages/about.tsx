import type { NextPage } from 'next'

interface Props {
	hello?: string;
}

const About: NextPage<Props> = ({hello}) => {
	return (
		<>
		<div>about</div>
		<div>{hello}</div>
		</>
	)
}

About.getInitialProps = () => {
	const hello = "hello"
	return { hello }
  }

export default About
