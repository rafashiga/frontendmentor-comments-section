import styled from 'styled-components';

export const Container = styled.section`
	width: 75%;
	margin: 0 auto;
	margin-top: 4rem;
	padding-bottom: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

export const CommentsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

export const ReplyContainer = styled.div`
	margin-left: 3rem;
	padding-left: 2.5rem;
	border-left: 2px solid var(--gray-300);

	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;
