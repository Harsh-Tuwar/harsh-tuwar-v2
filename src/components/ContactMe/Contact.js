import React, { useState } from 'react';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { ContactContainer, ContactInputField, ContactTextArea, SubmitButton, LoaderDivContainer } from './ContactStyles';
  
const Contact = () => {
	const [formData, setFormData] = useState({ name: '', subject: '', email: '', msg: '' });
	const [loading, setLoading] = useState(false);

	const handleSubmit = async () => {
		if (!formData.name || !formData.subject || !formData.email || !formData.msg) {
			alert('Contact form fields can not be empty!');
			return;
		}

		setLoading(true);
		
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData)
		}

		const response = await fetch('https://api.harshtuwar.ml/send', requestOptions);

		const { status } = await response.json();
		
		setLoading(false);
		setFormData({ name: '', subject: '', email: '', msg: '' })

		if (status === 'success') {
			alert('Message sent! Harsh will get back to you soon. Thanks!')
		}
	}

	const handleChange = (e) => {
		setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	}

	return (
		<Section id="contact">
			<SectionDivider divider />
			<SectionTitle>Contact</SectionTitle>
			<SectionText>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae quidem.
			</SectionText>
			<ContactContainer>
				{loading ?
					<Loader /> :
					(<>
						<ContactInputField placeholder='Enter your name.' type="text" name='name' onChange={(e) => handleChange(e)} />
						<ContactInputField placeholder='Enter subject.' type="text" name='subject' onChange={(e) => handleChange(e)} />
						<ContactInputField placeholder='Enter your email address.' type="text" name='email' onChange={(e) => handleChange(e)} />
						<ContactTextArea placeholder='Enter your message.' rows={15} name='msg' onChange={(e) => handleChange(e)} />
						<SubmitButton type='button' onClick={handleSubmit}>Send 💬</SubmitButton>
					</>)
				}
			</ContactContainer>
		</Section>
	);
};

const Loader = () => (
	<LoaderDivContainer>
		<img src='/images/loader.gif' alt='loader' height={128} width={128} />
	</LoaderDivContainer>
)

export default Contact;