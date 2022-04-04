import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	background-color: var(--gray-300);
	border-radius: 0.5rem;
	gap: 0.5rem;

	padding: 0.5rem 0.75rem;

	@media (min-width: 768px) {
		width: 2.5rem;
		flex-direction: column;
	}
`;

export const Button = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	transition: filter 0.2s;

	font-size: 0;

	&:hover {
		filter: invert(27%) sepia(37%) saturate(2475%) hue-rotate(223deg)
			brightness(50%) contrast(94%);
	}

	@media (min-width: 768px) {
		width: 2rem;
		height: 2.25rem;
	}
`;

export const Icon = styled.img``;

export const Input = styled.input`
	border: none;
	width: 2rem;
	background: transparent;

	text-align: center;
	color: var(--color-primary);
	font-size: 1rem;
	font-weight: 700;
	padding: 0;
`;
