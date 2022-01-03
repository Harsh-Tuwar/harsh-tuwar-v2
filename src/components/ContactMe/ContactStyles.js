import styled, { keyframes } from 'styled-components';

export const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	background: rgb(39, 51, 89, 0.4);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const ContactInputField = styled.input`
	margin: 1rem;
	padding: 1rem;
	outline: 0;
	background-color: transparent;
	color: white;
	border-style: none;
	font-size: 1.5rem;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 8px;
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const ContactTextArea = styled.textarea`
	margin: 1rem;
	resize: none;
	padding: 1rem;
	outline: 0;
	background-color: transparent;
	color: white;
	border-style: none;
	font-size: 1.5rem;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 8px;
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const SubmitButton = styled.button`
	color: white;
	margin-top: 0.5rem;
	padding: 0.5rem;
	border: 1px solid rgba(255, 255, 255, 0.3);
	border-radius: 9999px;
	cursor: pointer;
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	background: rgba(255, 255, 255, 0.05);
	padding: 1rem;
	margin: 1rem;
`;

export const LoaderDivContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 0.75rem/* 12px */;
    padding-bottom: 0.75rem/* 12px */;
`;