import { TextField } from '@mui/material';
import React from 'react';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { ContactContainer } from './ContactStyles';

  
const Contact = () => (
	<Section id="contact">
		<SectionDivider divider />
		<SectionTitle>Contact</SectionTitle>
		<SectionText>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae quidem. 
		</SectionText>
		<ContactContainer>
			<TextField id="outlined-basic" label="Outlined" variant="outlined" />
		</ContactContainer>
	</Section>
)

export default Contact;