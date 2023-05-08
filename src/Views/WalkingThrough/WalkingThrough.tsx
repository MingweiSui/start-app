import React, { useState } from 'react';
import {
	Container,
	ContainerDescription,
	Description,
	Title,
} from './WalkingThrough.styles';
import { useNavigate } from 'react-router-dom';
import { Button } from 'designSystem';

export const WalkingThrough = () => {
	const [currentStep, setCurrentStep] = useState('getCertification');

	const navigate = useNavigate();

	const goToSelectFields = () => navigate('/select-fields');

	const stepProps = {
		getCertification: {
			title: 'GET YOUR FREE CERTIFICATION',
			description:
				'Do a knowledge practice test in your field and become an expert',
			buttonText: 'CONTINUE',
			onNext: () => setCurrentStep('aboutTheTest'),
		},
		aboutTheTest: {
			title: 'ABOUT THE TEST',
			description:
				'You will respond 30 multiple choice questions. There is only one correct answer per question',
			buttonText: 'CONTINUE',
			onNext: () => setCurrentStep('timer'),
		},
		timer: {
			title: 'SET A TIMER',
			description:
				'Make sure to spend your time wisely! You will have 40 mins for completing the test',
			buttonText: 'GET STARTED',
			onNext: goToSelectFields,
		},
	}[currentStep];

	return (
		<Container data-testid="walking-through">
			<ContainerDescription>
				<Title>{stepProps?.title}</Title>
				<Description>{stepProps?.description}</Description>
			</ContainerDescription>
			<Button
				text={stepProps?.buttonText || ''}
				onClick={stepProps?.onNext}
				fullSize
			/>
		</Container>
	);
};
