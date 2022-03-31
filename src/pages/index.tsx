import type { NextPage } from 'next';
import { Fragment, useState } from 'react';
import Head from 'next/head';
import * as S from 'styles/Home.styles';

import { Comment, CommentData, User } from 'models/Comment';
import CommentsCard from 'components/CommentsCard';
import InputCard from 'components/InputCard';

import data from '../../data.json';

const Home: NextPage = () => {
	const [comments, setComments] = useState<CommentData[]>(data.comments);

	const handleDeleteComment = ({ id }: { id: number; commentId?: number }) => {
		const newComments = comments.filter((comment) => comment.id !== id);
		setComments(newComments);
	};

	const handleDeleteReply = ({
		id,
		commentId,
	}: {
		id: number;
		commentId?: number;
	}) => {
		const commentFiltered = comments.find(
			(comment) => comment.id === commentId
		);
		const index = comments.findIndex((comment) => comment.id === commentId);
		const repliesFiltered = commentFiltered?.replies?.filter(
			(reply) => reply.id !== id
		);
		comments[index].replies = repliesFiltered;
		setComments([...comments]);
	};

	const handleSubmitReply = (props: {
		replyUser: User;
		comment: string;
		comentId: number;
	}) => {
		const { replyUser, comment, comentId } = props;
		const commentFiltered = comments.find((comment) => comment.id === comentId);
		const index = comments.findIndex((comment) => comment.id === comentId);
		const replies = commentFiltered?.replies || [];
		const newReply: Comment = {
			id: replies.length + 1,
			score: 0,
			user: {
				...data.currentUser,
			},
			replyingTo: replyUser.username,
			createdAt: new Date().toISOString(),
			content: comment.substring(comment.indexOf(' ') + 1),
		};
		comments[index].replies = [...replies, newReply];
		setComments([...comments]);
	};

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

	const renderReply = (commentId: number, replies?: Comment[]) => {
		if (replies?.length) {
			return (
				<S.ReplyContainer>
					{replies.map((reply) => (
						<CommentsCard
							key={reply.id}
							comment={reply}
							commentId={commentId}
							currentUser={data.currentUser}
							deleteComment={handleDeleteReply}
							submitReply={handleSubmitReply}
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
						<CommentsCard
							comment={comment}
							currentUser={data.currentUser}
							deleteComment={handleDeleteComment}
							submitReply={handleSubmitReply}
						/>
						{renderReply(comment.id, comment.replies)}
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
