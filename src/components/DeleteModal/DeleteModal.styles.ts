import styled from 'styled-components';

export const Background = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	z-index: 99;
	background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
	position: fixed;
	margin: auto;
	top: 50%;
	left: 0;
	right: 0;
	width: 40%;
	background: var(--white);
	z-index: 999;
	padding: 2rem;
	border-radius: 0.5rem;
`;

export const Title = styled.h1`
	font-size: 1.5rem;
	color: var(--gray-400);
	margin-bottom: 1.25rem;
`;

export const Description = styled.p`
	color: var(--gray-400);
`;

export const ActionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	margin-top: 2rem;
`;

export const CancelButton = styled.button`
	background: var(--gray-400);
	border: none;
	color: var(--white);
	cursor: pointer;
	width: 100%;
	padding: 1rem;
	border-radius: 0.5rem;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.75;
	}
`;

export const DeleteButton = styled.button`
	background: var(--color-danger);
	border: none;
	color: var(--white);
	cursor: pointer;
	width: 100%;
	border-radius: 0.5rem;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.75;
	}
`;
