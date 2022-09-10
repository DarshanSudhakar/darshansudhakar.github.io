import React from 'react';
import styled from 'styled-components';

import PageHeader from '@src/components/common/PageHeader';
import { Hidden } from 'react-grid-system';
import Flex from '@src/components/common/Flex';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import DotNet from '@src/static/tech-svg/dot-net-plain-wordmark.svg';
import CSharp from '@src/static/tech-svg/csharp-plain.svg';
import VisualStudio from '@src/static/tech-svg/visualstudio-plain.svg';
import SQLServer from '@src/static/tech-svg/microsoftsqlserver-plain-wordmark.svg';

const SkillsWrapper = styled.section`
  ${props => props.theme.spacing.sectionBottom};
  position: relative;
  .skill__icons {
    padding: 30px 0;
    @media ${props => props.theme.media.tablet} {
      padding: 10px 0;
    }

    svg {
      color: ${props => props.theme.primaryColor};
    }
  }
  .skills__word-clouds {
    @media ${props => props.theme.media.tablet} {
      display: none;
    }

    p {
      position: absolute;
      color: ${props => props.theme.accentColor};
      z-index: -1;
      left: 0;
      right: 0;
      font-weight: 900;
    }
    z-index: -1;
  }
`;

const WordClouds = () => {
  return (
    <Parallax
      y={['-350px', '-150px']}
      slowerScrollRate={true}
      aria-hidden="true"
      className="skills__word-clouds"
    >
      <p style={{ top: 50, left: '100%', fontSize: 23 }}>WCF</p>
      <p style={{ top: 0, left: 0, fontSize: 18 }}>Azure Devops</p>
      <p style={{ top: 200, left: -60, fontSize: 14 }}>SSAS</p>
      <p style={{ top: '30%', left: '25%', fontSize: 25 }}>Unit testing</p>
      <p style={{ top: 40, left: '60%', fontSize: 12 }}>Durandal</p>
      <p style={{ top: 380, left: '85%', fontSize: 18 }}>React + Gatsby</p>
      <p style={{ top: 320, left: '65%', fontSize: 18 }}>Javascript</p>
      <p style={{ top: 350, left: 150, fontSize: 20 }}>Web API</p>
      <p style={{ top: 25, left: '75%', fontSize: 18 }}>Winforms and WPF</p>
      <p style={{ top: 320, left: '35%', fontSize: 12 }}>Microservices</p>
      <p style={{ top: 280, left: '92%', fontSize: 18 }}>ASP.NET Core</p>
    </Parallax>
  );
};

const Skills = () => (
  <SkillsWrapper>
    <ParallaxProvider>
      <PageHeader>My Skillsets</PageHeader>

      {/* <SkillPie percent={90} name={"JavaScript"} /> */}
      <Flex className="skill__icons" justify="space-around" align="center">
        {/* <FontAwesomeIcon icon={['fab', 'html5']} size="5x" />
        <FontAwesomeIcon icon={['fab', 'js']} size="5x" />
        <FontAwesomeIcon icon={['fab', 'react']} size="5x" />
        <FontAwesomeIcon icon={['fab', 'node']} size="5x" /> */}
        <DotNet style = {{width: 150}}/>
        <CSharp style = {{width: 150}}/>
        <VisualStudio style = {{width: 150}}/>
        <SQLServer style = {{width: 150}}/>
      </Flex>

      <Hidden md xs sm>
        <WordClouds />
      </Hidden>
    </ParallaxProvider>
  </SkillsWrapper>
);

export default Skills;
