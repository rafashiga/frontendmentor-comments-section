import type { NextPage } from 'next';
import { Fragment, useState } from 'react';
import Head from 'next/head';
import * as S from 'styles/Home.styles';

import data from '../../data.json';

import { Comment, CommentData } from 'models/Comment';
import CommentsCard from 'components/CommentsCard';
import InputCard from 'components/InputCard';

const Home: NextPage = () => {
	const [comments, setComments] = useState<CommentData[]>(data.comments);

	const handleSubmitComment = (comment: string) => {
		const newComment: CommentData = {
			id: comments.length + 1,
			content: comment,
			createdAt: new Date().toISOString(),
			score: 0,
			user: {
				...data.currentUser,
			},
			replies: [],
		};

		setComments([...comments, newComment]);
	};

	const renderReply = (replies?: Comment[]) => {
		if (replies?.length) {
			return (
				<S.ReplyContainer>
					{replies.map((reply) => (
						<CommentsCard
							key={reply.id}
							comment={reply}
							currentUser={data.currentUser}
						/>
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
				{comments.map((comment) => (
					<Fragment key={comment.id}>
						<CommentsCard comment={comment} currentUser={data.currentUser} />
						{renderReply(comment.replies)}
					</Fragment>
				))}
				<InputCard
					user={data.currentUser}
					buttonLabel='SEND'
					onSubmit={handleSubmitComment}
				/>
			</S.Container>
		</div>
	);
};

export default Home;
