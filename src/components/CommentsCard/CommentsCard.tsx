import InputStepper from 'components/InputStepper';
import { Comment } from 'models/Comment';
import * as S from './CommentsCard.styles';

interface CommentsCardProps {
	comment: Comment;
}

function CommentsCard({ comment }: CommentsCardProps) {
	return (
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
					<S.Date> {comment.createdAt} </S.Date>
				</S.AvatarContainer>
				<S.Comment>
					{comment.replyingTo && (
						<S.ReplyingTo>@{comment.replyingTo} </S.ReplyingTo>
					)}
					{comment.content}
				</S.Comment>
				<S.ReplyButton type='button'>
					<S.ReplyIcon src='/images/icon-reply.svg' /> Reply
				</S.ReplyButton>
			</S.Content>
		</S.Container>
	);
}

export default CommentsCard;
