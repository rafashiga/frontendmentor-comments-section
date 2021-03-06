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
	updateComment: (props: {
		comment: string;
		commentId?: number;
		id: number;
	}) => void;
}

function CommentsCard({
	commentId,
	data,
	currentUser,
	deleteComment,
	submitReply,
	updateComment,
}: CommentsCardProps) {
	const isCurrentUser = data.user.username === currentUser.username;
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [comment, setComment] = useState(
		`${data.replyingTo ? `@${data.replyingTo} ` : ''}${data.content}`
	);
	const [showEdit, setShowEdit] = useState(false);
	const [showReplyInput, setShowReplyInput] = useState(false);

	const toggleModal = () => {
		setIsOpenModal(!isOpenModal);
	};

	const getComment = () => {
		return (
			<>
				{data.replyingTo && <S.ReplyingTo>@{data.replyingTo} </S.ReplyingTo>}
				{data.content}
			</>
		);
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
						<S.Icon src='/images/icon-delete.svg' alt='delete icon' /> Delete
					</S.DeleteButton>
					<S.PrimaryButton type='button' onClick={() => setShowEdit(!showEdit)}>
						<S.Icon src='/images/icon-edit.svg' alt='edit icon' /> Edit
					</S.PrimaryButton>
				</>
			);
		}
		return (
			<S.PrimaryButton type='button' onClick={handleToggleReply}>
				<S.Icon src='/images/icon-reply.svg' alt='reply icon' /> Reply
			</S.PrimaryButton>
		);
	};

	const handleUpdateComment = (e: React.FormEvent) => {
		e.preventDefault();
		updateComment({
			comment,
			commentId,
			id: data.id,
		});
		setShowEdit(false);
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
					{!showEdit ? (
						<S.Comment>{getComment()}</S.Comment>
					) : (
						<S.FormContainer onSubmit={handleUpdateComment}>
							<S.Texarea
								value={comment}
								onChange={(e) => setComment(e.target.value)}
							></S.Texarea>
							<S.UpdateButton type='submit'>UPDATE</S.UpdateButton>
						</S.FormContainer>
					)}
					<S.Footer>
						<S.InputContainer>
							<InputStepper score={data.score} />
						</S.InputContainer>
						<S.ActionContainer>{renderActionsButton()}</S.ActionContainer>
					</S.Footer>
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
