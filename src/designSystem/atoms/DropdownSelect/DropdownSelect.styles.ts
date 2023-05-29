import styled from 'styled-components';

interface IContainerCollapseButton {
	isOpen?: boolean;
}

interface SublistSelected {
	selected?: boolean;
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ContainerCollapseButton = styled.button<IContainerCollapseButton>`
	width: 100%;
	height: 50px;
	background-color: ${({ isOpen }) => (isOpen ? '#C5002B' : 'white')};
	border: ${({ isOpen }) => (!isOpen ? '1px solid black' : 'none')};
	margin: 15px auto;
	display: flex;
	transition: all 0.5s;

	.up-down-icon {
		width: 24px;
		height: 24px;
		margin: auto 4%;
	}
`;

export const ContainerIcon = styled.button<IContainerCollapseButton>`
	height: 100%;
	width: 55px;
	background-color: rgba(0, 0, 0, 0);
	border: none;
	border-right: 1px solid ${({ isOpen }) => (!isOpen ? 'black' : 'white')};
	transition: all 0.5s;
`;

export const ContainerTitleAction = styled.button<IContainerCollapseButton>`
	background-color: rgba(0, 0, 0, 0);
	border: none;
	margin: auto;
	margin-left: 15px;
	margin-top: 15px;
	transition: all 0.5s;
	p {
		color: ${({ isOpen }) => isOpen && 'white'};
		font-size: 20px;
		position: absolute;
	}
`;

export const List = styled.button<IContainerCollapseButton>`
	height: auto;
	width: 300px;
	border: none;
	background-color: white;
	margin: -15px auto 0px auto;
	display: flex;
	flex-direction: column;
	transition: all 0.5s;
`;

export const Item = styled.button<SublistSelected>`
	width: 246px;
	color: ${({ selected }) => (selected ? 'black' : 'grey')};
	height: 50px;
	font-size: 18px;
	display: flex;
	background-color: rgba(0, 0, 0, 0);
	border: 1px solid ${({ selected }) => (selected ? 'black' : 'grey')};
	margin: auto;
	margin-left: 54px;
	margin-top: 1px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	transition: all 0.5s;
	.check-icon {
		width: 20px;
		opacity: ${({ selected }) => (selected ? '1' : '0')};
	}
`;
