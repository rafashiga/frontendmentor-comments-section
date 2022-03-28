import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	position: relative;
	background-color: var(--white);
	padding: 2rem;
	border-radius: 0.5rem;

	display: flex;
`;

export const ScoreContainer = styled.div`
	margin-right: 1.5rem;
`;

export const Content = styled.div``;

export const AvatarContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const AvatarImg = styled.img`
	width: 3rem;
	height: 3rem;
`;

export const Name = styled.span`
	color: var(--gray-600);
	font-weight: 700;
`;

export const Date = styled.span`
	color: var(--gray-400);
	font-weight: 500;
`;

export const Comment = styled.div`
	color: var(--gray-400);
	margin-top: 1.5rem;
	line-height: 1.5rem;
`;

export const ReplyButton = styled.button`
	background: none;
	border: none;
	color: var(--color-primary);
	font-weight: 700;
	font-size: 1.125rem;
	cursor: pointer;
	transition: opacity 0.2s;

	position: absolute;
	top: 25%;
	right: 2rem;

	display: flex;
	align-items: center;
	gap: 0.25rem;

	&:hover {
		opacity: 0.7;
	}
`;

export const ReplyIcon = styled.img``;