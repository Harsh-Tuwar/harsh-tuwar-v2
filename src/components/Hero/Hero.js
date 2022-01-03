import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import Button from '../../styles/GlobalComponents/Button';

const Hero = () => {
  const scrollToSection = () => {
    const contactDivPlace = document.getElementById('contact');
    contactDivPlace.scrollIntoView();
  }

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          I'm Harsh Tuwar!
        </SectionTitle>
        <SectionTitle center>
          Welcome To <br />
          My Personal Space on Internet.
        </SectionTitle>
        <SectionText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe.
        </SectionText>
        <Button onClick={scrollToSection}>Contact Me!</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;