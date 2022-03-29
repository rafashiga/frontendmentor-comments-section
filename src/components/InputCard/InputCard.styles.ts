import styled from 'styled-components';

export const Container = styled.form`
	width: 100%;
	background-color: var(--white);
	border-radius: 0.5rem;
	padding: 1rem;

	display: grid;
	grid-template-areas: 'CM CM' 'AV BT';
	grid-template-columns: 1fr auto;

	@media (min-width: 768px) {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		padding: 2rem;
	}
`;

export const AvatarImg = styled.img`
	grid-area: AV;

	width: 2.5rem;
	height: 2.5rem;
`;

export const Textarea = styled.textarea`
	grid-area: CM;
	margin-bottom: 1rem;

	width: 100%;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	border: 1px solid var(--gray-300);

	font-size: 1rem;
	line-height: 1.5rem;
	color: var(--gray-600);

	&:hover,
	&:focus {
		outline: none;
		border: 1px solid var(--color-primary);
	}

	&::placeholder {
		color: var(--gray-400);
		font-weight: 400;
	}

	@media (min-width: 768px) {
		margin-bottom: 0;
	}
`;

export const Button = styled.button`
	grid-area: BT;

	background: var(--color-primary);
	color: var(--white);
	border: none;
	padding: 0.75rem 1.75rem;
	border-radius: 0.5rem;
	text-transform: uppercase;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.75;
	}
`;
