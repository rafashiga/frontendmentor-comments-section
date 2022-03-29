import { useState } from 'react';
import { formatDistance } from 'date-fns';

import InputStepper from 'components/InputStepper';
import { Comment, User } from 'models/Comment';
import * as S from './CommentsCard.styles';
import DeleteModal from 'components/DeleteModal';

interface CommentsCardProps {
	commentId?: number;
	comment: Comment;
	currentUser: User;
	handleDeleteComment: (params: { id: number; commentId?: number }) => void;
}

function CommentsCard({
	commentId,
	comment,
	currentUser,
	handleDeleteComment,
}: CommentsCardProps) {
	const isCurrentUser = comment.user.username === currentUser.username;
	const [isOpenModal, setIsOpenModal] = useState(false);

	const toggleModal = () => {
		setIsOpenModal(!isOpenModal);
	};

	const deleteComment = () => {
		handleDeleteComment({ id: comment.id, commentId });
		toggleModal();
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
			<S.PrimaryButton type='button'>
				<S.Icon src='/images/icon-reply.svg' /> Reply
			</S.PrimaryButton>
		);
	};

	return (
		<>
			<S.Container>
				<S.ScoreContainer>
					<InputStepper score={comment.score} />
				</S.ScoreContainer>
				<S.Content>
					<S.AvatarContainer>
						<S.AvatarImg
							src={comment.user.image.png}
							alt={comment.user.username}
						/>
						<S.Name>{comment.user.username}</S.Name>
						{isCurrentUser && <S.Tag>you</S.Tag>}
						<S.Date>
							{formatDistance(new Date(comment.createdAt), new Date(), {
								addSuffix: true,
							})}
						</S.Date>
					</S.AvatarContainer>
					<S.Comment>
						{comment.replyingTo && (
							<S.ReplyingTo>@{comment.replyingTo} </S.ReplyingTo>
						)}
						{comment.content}
					</S.Comment>
					<S.ActionContainer>{renderActionsButton()}</S.ActionContainer>
				</S.Content>
			</S.Container>
			<DeleteModal
				isOpen={isOpenModal}
				toggleModal={toggleModal}
				deleteComment={deleteComment}
			/>
		</>
	);
}

export default CommentsCard;
