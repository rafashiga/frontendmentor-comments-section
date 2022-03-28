import { ReactNode } from 'react';

import InputStepper from 'components/InputStepper';
import * as S from './CommentsCard.styles';

interface CommentsCardProps {
	children: ReactNode;
}

function CommentsCard() {
	return (
		<S.Container>
			<S.ScoreContainer>
				<InputStepper />
			</S.ScoreContainer>
			<S.Content>
				<S.AvatarContainer>
					<S.AvatarImg src='/images/avatars/image-amyrobson.png' alt='Avatar' />
					<S.Name>podpoasdjaso</S.Name>
					<S.Date> 1 month ago </S.Date>
				</S.AvatarContainer>
				<S.Comment>
					Eu enim magna ad culpa mollit est ad officia tempor aliquip dolore
					est. Esse non elit enim dolor officia ex nisi non amet excepteur
					ipsum. Cillum in eu eiusmod sint consectetur nulla adipisicing
					exercitation id cupidatat quis non.
				</S.Comment>
				<S.ReplyButton type='button'>
					<S.ReplyIcon src='/images/icon-reply.svg' /> Reply
				</S.ReplyButton>
			</S.Content>
		</S.Container>
	);
}

export default CommentsCard;
