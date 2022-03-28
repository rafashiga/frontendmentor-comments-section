import * as S from './InputCard.styles';

interface InputCardProps {}

function InputCard() {
	return (
		<S.Container>
			<S.AvatarImg src='/images/avatars/image-amyrobson.png' alt='Avatar' />
			<S.Textarea placeholder='Add a comment...' />
			<S.Button> Reply </S.Button>
		</S.Container>
	);
}

export default InputCard;
