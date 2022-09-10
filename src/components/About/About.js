import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="Darshan_profile.jpeg" />
        </div>
        <p>
          Hi, I am Darshan Sudhakar, a passionate C# and .NET developer
          from India, currently working at{' '}
          <a className="about__link" href="https://www.jllt.com/">
          JLL Technologies
          </a>{' '}
          as a Full Stack .NET developer.
          <br />
          <br />
          My core focus is on solving technical problem using .NET and C#.
          It give me great pleasure helping my fellow mates understand the process of software building and industry best practices.
        </p>
      </AboutInfo>

      {/* TODO : Add authors */}
      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>“If you wanna master something. Teach it!“</p>
        </Quote>
        <Quote>
          <p>
            “Simplicity is the ultimate sophistication“
          </p>
        </Quote>
        <Quote>
          <p>
            “In carpentry there is a rule. Measure twice, cut once.
            Similarly, in coding we gotta think twice before we code"
          </p>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
