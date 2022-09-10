import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import svgRect from '@src/static/home_rect.svg';

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from '@common/IconLink';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';
import Button from '@common/Button';

import resumePdfFile from '../../static/resume/Darshan_sudhakar_resume.pdf'

import { Card, CardIcon, CardText, CardTitle } from '@common/Card';

const ThingsILove = () => (
  <Flex justify="space-between" align="center">
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={['fab','windows']} />
      </CardIcon>
      <CardTitle>Front End</CardTitle>
      <CardText>
        I work more on front end technologies like Winforms and WPF.
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon="hashtag" />
      </CardIcon>
      <CardTitle>C# and .NET</CardTitle>
      <CardText>
        I program in C# using .NET framework.
        But I am open to all programing language and framework.
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={['fas','swatchbook']}/>
      </CardIcon>
      <CardTitle>Standardized Coding</CardTitle>
      <CardText>
        I believe in code design. Using best practices and design principles is what I crave for.
      </CardText>
    </Card>
  </Flex>
);

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>Darshan Sudhakar</h1>
          <p className="adjust">Full stack .NET DEVELOPER</p>

          <div className="home__CTA">
            <div className="home__resume">
              <Button className="cta" as="a" href={resumePdfFile} target="__blank" >
                PDF Resume
              </Button>

              <div className="home__resumeSeperator"></div>

              <Button className="cta" as="a" href="https://gitconnected.com/v1/portfolio/darshansudhakar" target="__blank">
                JSON Resume
              </Button>
            </div>

            <div className="home__social">
              <IconLink
                label="github"
                icon={['fab', 'github']}
                href="//github.com/darshansudhakar"
              />
              <IconLink
                label="twitter"
                icon={['fab', 'twitter']}
                href="//twitter.com/SudhakarDarshan"
              />
              
              <IconLink
                label="linkedIn"
                icon={['fab', 'linkedin']}
                href="//linkedin.com/in/darshanbangaloresudhakar/"
              />
            </div>
          </div>
        </div>
        {/* </Parallax> */}
        <HeroCard />
      </Intro>

      {/* Things I do */}
      <PageHeader style={{ marginBottom: 30 }}>
        Things I do <i className="fas fa-heart" />
      </PageHeader>
      <ThingsILove />
    </HomeWrapper>
  );
};

export default Home;
