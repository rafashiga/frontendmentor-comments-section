import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	position: relative;
	background-color: var(--white);
	border-radius: 0.5rem;
	padding: 1rem;

	display: flex;

	@media (min-width: 768px) {
		padding: 2rem;
	}
`;

export const ScoreContainer = styled.div`
	display: none;
	@media (min-width: 768px) {
		display: block;
		margin-right: 1.5rem;
	}
`;

export const Content = styled.div`
	width: 100%;
`;

export const AvatarContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;

export const AvatarImg = styled.img`
	width: 2.5rem;
	height: 2.5rem;
`;

export const Name = styled.span`
	color: var(--gray-600);
	font-weight: 700;
`;

export const Date = styled.span`
	color: var(--gray-400);
	font-weight: 500;
`;

export const Tag = styled.span`
	background-color: var(--color-primary);
	color: var(--white);
	padding: 2px 8px;
	border-radius: 4px;
	margin-left: -4px;
`;

export const Comment = styled.div`
	color: var(--gray-400);
	margin-top: 1.5rem;
	line-height: 1.5rem;
	white-space: pre-line;
	word-break: break-word;
`;

export const ReplyingTo = styled.span`
	color: var(--color-primary);
	font-weight: 700;
`;

export const FormContainer = styled.form`
	margin-top: 1rem;
	text-align: right;
`;

export const Texarea = styled.textarea`
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

export const UpdateButton = styled.button`
	margin-top: 0.5rem;
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

export const ActionContainer = styled.div`
	display: flex;
	gap: 1rem;

	@media (min-width: 768px) {
		margin-top: 1.25rem;
		position: absolute;
		top: 2.5rem;
		right: 2rem;
		margin-top: 0;
		gap: 2rem;
	}
`;

export const PrimaryButton = styled.button`
	cursor: pointer;
	background: none;
	border: none;
	color: var(--color-primary);
	font-weight: 700;
	font-size: 1rem;
	transition: opacity 0.2s;

	display: flex;
	align-items: center;
	gap: 0.25rem;

	&:hover {
		opacity: 0.7;
	}

	@media (min-width: 768px) {
		font-size: 1.125rem;
	}
`;

export const DeleteButton = styled.button`
	background: none;
	border: none;
	color: var(--color-danger);
	font-weight: 700;
	font-size: 1rem;
	cursor: pointer;
	transition: opacity 0.2s;

	display: flex;
	align-items: center;
	gap: 0.25rem;

	&:hover {
		opacity: 0.7;
	}

	@media (min-width: 768px) {
		font-size: 1.125rem;
	}
`;

export const Icon = styled.img`
	width: 0.75rem;
`;

export const Footer = styled.div`
	@media (max-width: 768px) {
		margin-top: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const InputContainer = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
`;
