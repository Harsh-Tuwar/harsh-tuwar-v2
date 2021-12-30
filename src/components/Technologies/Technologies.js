import React from 'react';
import Image from 'next/image';
import { BsCodeSlash } from 'react-icons/bs';
import { SiMaterialdesign, SiServerless } from 'react-icons/si';
import { MdDeveloperMode } from 'react-icons/md';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle, TitleSpacer, TitleDiv, TechnologyItemsContainer } from './TechnologiesStyles';
import { BackendTechnologies, FrontendTechnologies, MobileTechnologies, MiscTechnologies } from '../../constants/constants';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <TitleDiv>
          <picture>
            <SiMaterialdesign size="30px" style={{ marginBottom: 10}}/>
          </picture>
          <TitleSpacer />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
          </ListContainer>
        </TitleDiv>
        <TechnologyItemsContainer>
          {FrontendTechnologies.map((item, index) => {
            return <div style={{ margin: '0 10px', justifySelf: 'stretch' }} key={index}><Image layout="fixed" width='50px' height='50px' src={item.icon} alt={item.title} /></div>
          })}
        </TechnologyItemsContainer>
      </ListItem>
      <ListItem>
        <TitleDiv>
          <picture>
            <SiServerless size="30px" style={{ marginBottom: 10}} />
          </picture>
          <TitleSpacer />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
          </ListContainer>
        </TitleDiv>
        <TechnologyItemsContainer>
          {BackendTechnologies.map((item, index) => {
            return <div style={{ margin: '0 10px', justifySelf: 'stretch' }} key={index}><Image layout="fixed" width='50px' height='50px' src={item.icon} alt={item.title} /></div>
          })}
        </TechnologyItemsContainer>
      </ListItem>
      <ListItem>
        <TitleDiv>
          <picture>
            <MdDeveloperMode size="30px" style={{ marginBottom: 10}} />
          </picture>
          <TitleSpacer />
          <ListContainer>
            <ListTitle>Mobile Development</ListTitle>
          </ListContainer>
        </TitleDiv>
        <TechnologyItemsContainer>
          {MobileTechnologies.map((item, index) => {
            return <div style={{ margin: '0 10px', justifySelf: 'stretch' }} key={index}><Image layout="fixed" width='50px' height='50px' src={item.icon} alt={item.title} /></div>
          })}
        </TechnologyItemsContainer>
      </ListItem>
      <ListItem>
        <TitleDiv>
          <picture>
            <BsCodeSlash size="30px" style={{ marginBottom: 10}} />
          </picture>
          <TitleSpacer />
          <ListContainer>
            <ListTitle>Miscellaneous</ListTitle>
          </ListContainer>
        </TitleDiv>
        <TechnologyItemsContainer>
          {MiscTechnologies.map((item, index) => {
            return <div style={{ margin: '0 10px', justifySelf: 'stretch' }} key={index}><Image layout="fixed" width='50px' height='50px' src={item.icon} alt={item.title} /></div>
          })}
        </TechnologyItemsContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt style={{"marginTop": "60px"}} />
  </Section>
);

export default Technologies;
