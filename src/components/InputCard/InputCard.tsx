import { User } from 'models/Comment';
import { useEffect, useState } from 'react';
import * as S from './InputCard.styles';

interface InputCardProps {
	user: User;
	replyUser?: string;
	buttonLabel: 'REPLY' | 'SEND';
	onSubmit: (comment: string) => void;
}

function InputCard({ user, buttonLabel, onSubmit, replyUser }: InputCardProps) {
	const [comment, setComment] = useState('');

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		onSubmit(comment);
		setComment('');
	};

	useEffect(() => {
		if (replyUser) {
			setComment(`@${replyUser} `);
		}
	}, [replyUser]);

	return (
		<S.Container onSubmit={handleSubmit}>
			<S.AvatarImg src={user.image.png} alt={user.username} />
			<S.Textarea
				placeholder='Add a comment...'
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>
			<S.Button type='submit'> {buttonLabel} </S.Button>
		</S.Container>
	);
}

export default InputCard;
