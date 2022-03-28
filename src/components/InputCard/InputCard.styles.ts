import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background-color: var(--white);
	padding: 2rem;
	border-radius: 0.5rem;

	display: flex;
	align-items: flex-start;
	gap: 1rem;
`;

export const AvatarImg = styled.img`
	width: 2.5rem;
	height: 2.5rem;
`;

export const Textarea = styled.textarea`
	width: 100%;
	padding: 1rem 2rem;
	border-radius: 0.5rem;

	font-size: 1rem;
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
`;

export const Button = styled.button`
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
