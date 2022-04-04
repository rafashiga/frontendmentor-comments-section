import styled from 'styled-components';

export const Container = styled.section`
	width: 94%;
	margin: 0 auto;
	margin-top: 2rem;
	padding-bottom: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	@media (min-width: 768px) {
		width: 75%;
		margin-top: 4rem;
	}
`;

export const ReplyContainer = styled.div`
	width: -webkit-fill-available;
	padding-left: 1rem;
	border-left: 2px solid var(--gray-300);

	display: flex;
	flex-direction: column;
	gap: 0.75rem;

	@media (min-width: 768px) {
		margin-left: 3rem;
		padding-left: 2.5rem;
	}
`;

export const Footer = styled.footer`
	text-align: center;
	color: var(--gray-600);
	font-size: 0.875rem;
	margin: 1rem 0;
	transition: all 0.2s;

	a {
		color: var(--color-primary);

		&:hover {
			opacity: 0.8;
		}
	}
`;
