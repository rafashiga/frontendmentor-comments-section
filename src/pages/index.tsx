import type { NextPage } from 'next';
import Head from 'next/head';

import CommentsCard from 'components/CommentsCard';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Shiga Project: Comments Section</title>
				<meta name='description' content='Comments Section' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section className='home-container'>
				<CommentsCard />
			</section>
		</div>
	);
};

export default Home;
