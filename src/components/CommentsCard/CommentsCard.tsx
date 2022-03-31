import { useState } from 'react';
import { formatDistance } from 'date-fns';

import InputStepper from 'components/InputStepper';
import { Comment, User } from 'models/Comment';
import * as S from './CommentsCard.styles';
import DeleteModal from 'components/DeleteModal';
import InputCard from 'components/InputCard';

interface CommentsCardProps {
	commentId?: number;
	data: Comment;
	currentUser: User;
	deleteComment: (props: { id: number; commentId?: number }) => void;
	submitReply?: (props: {
		replyUser: User;
		comment: string;
		comentId: number;
	}) => void;
}

function CommentsCard({
	commentId,
	data,
	currentUser,
	deleteComment,
	submitReply,
}: CommentsCardProps) {
	const isCurrentUser = data.user.username === currentUser.username;
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [showReplyInput, setShowReplyInput] = useState(false);

	const toggleModal = () => {
		setIsOpenModal(!isOpenModal);
	};

	const handleDeleteComment = () => {
		deleteComment({ id: data.id, commentId });
		toggleModal();
	};

	const handleToggleReply = () => {
		setShowReplyInput(!showReplyInput);
	};

	const handleSubmitReply = (text: string) => {
		submitReply!({
			replyUser: data.user,
			comment: text,
			comentId: commentId ?? data.id,
		});
		handleToggleReply();
	};

	const renderActionsButton = () => {
		if (isCurrentUser) {
			return (
				<>
					<S.DeleteButton type='button' onClick={toggleModal}>
						<S.Icon src='/images/icon-delete.svg' /> Delete
					</S.DeleteButton>
					<S.PrimaryButton type='button'>
						<S.Icon src='/images/icon-edit.svg' /> Edit
					</S.PrimaryButton>
				</>
			);
		}
		return (
			<S.PrimaryButton type='button' onClick={handleToggleReply}>
				<S.Icon src='/images/icon-reply.svg' /> Reply
			</S.PrimaryButton>
		);
	};

	return (
		<>
			<S.Container>
				<S.ScoreContainer>
					<InputStepper score={data.score} />
				</S.ScoreContainer>
				<S.Content>
					<S.AvatarContainer>
						<S.AvatarImg src={data.user.image.png} alt={data.user.username} />
						<S.Name>{data.user.username}</S.Name>
						{isCurrentUser && <S.Tag>you</S.Tag>}
						<S.Date>
							{formatDistance(new Date(data.createdAt), new Date(), {
								addSuffix: true,
							})}
						</S.Date>
					</S.AvatarContainer>
					<S.Comment>
						{data.replyingTo && (
							<S.ReplyingTo>@{data.replyingTo} </S.ReplyingTo>
						)}
						{data.content}
					</S.Comment>
					<S.ActionContainer>{renderActionsButton()}</S.ActionContainer>
				</S.Content>
			</S.Container>
			{showReplyInput && (
				<InputCard
					buttonLabel='REPLY'
					replyUser={data.user.username}
					user={currentUser}
					onSubmit={handleSubmitReply}
				/>
			)}
			<DeleteModal
				isOpen={isOpenModal}
				toggleModal={toggleModal}
				deleteComment={handleDeleteComment}
			/>
		</>
	);
}

export default CommentsCard;
