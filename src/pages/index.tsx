import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from 'styles/Home.styles';

import data from '../../data.json';

import { Comment } from 'models/Comment';
import CommentsCard from 'components/CommentsCard';
import InputCard from 'components/InputCard';

const Home: NextPage = () => {
	const renderReply = (replies: Comment[]) => {
		if (replies.length) {
			return (
				<S.ReplyContainer>
					{replies.map((reply) => (
						<CommentsCard key={reply.id} comment={reply} />
					))}
				</S.ReplyContainer>
			);
		}
		return '';
	};

	return (
		<div>
			<Head>
				<title>Shiga Project: Comments Section</title>
				<meta name='description' content='Comments Section' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<S.Container>
				{data.comments.map((comment) => (
					<>
						<CommentsCard key={comment.id} comment={comment} />
						{renderReply(comment.replies)}
					</>
				))}
				<InputCard user={data.currentUser} />
			</S.Container>
		</div>
	);
};

export default Home;
