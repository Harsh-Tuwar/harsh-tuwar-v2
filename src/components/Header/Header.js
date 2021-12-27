import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, InitialsSpan } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <Image
            alt="Mountains"
            src="/images/logo1.png"
            layout="fixed"
            height="52px"
            width="52px"
            objectFit="scale-down"
            quality={100}
          />&nbsp;
          <InitialsSpan>HT</InitialsSpan>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/">
          <NavLink>Contact</NavLink>
        </Link>
      </li>  
    </Div2>
      <Div3>
        <SocialIcons target="_blank" href="https://github.com/harsh-tuwar">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://www.linkedin.com/in/tuwar08">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://instagram.com/tuwar_08">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
