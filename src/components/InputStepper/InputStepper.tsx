import { useState } from 'react';
import * as S from './InputStepper.styles';

interface InputStepperProps {
	score: number;
}

function InputStepper({ score }: InputStepperProps) {
	const [total, setTotal] = useState(score);

	const handleIncrease = () => {
		setTotal(total + 1);
	};

	const handleDecrease = () => {
		setTotal(total - 1);
	};

	return (
		<S.Container>
			<S.Button type='button' onClick={handleIncrease} aria-label='encrease 1'>
				<S.Icon src='/images/icon-plus.svg' />
			</S.Button>
			<S.Input type='text' value={total} readOnly />
			<S.Button type='button' onClick={handleDecrease} aria-label='decrease 1'>
				<S.Icon src='/images/icon-minus.svg' />
			</S.Button>
		</S.Container>
	);
}

export default InputStepper;
