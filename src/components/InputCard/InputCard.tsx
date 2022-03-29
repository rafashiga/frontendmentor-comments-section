import { User } from 'models/Comment';
import * as S from './InputCard.styles';

interface InputCardProps {
	user: User;
}

function InputCard({ user }: InputCardProps) {
	return (
		<S.Container>
			<S.AvatarImg src={user.image.png} alt={user.username} />
			<S.Textarea placeholder='Add a comment...' />
			<S.Button> Reply </S.Button>
		</S.Container>
	);
}

export default InputCard;
