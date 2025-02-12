import React from 'react';
import styled from 'styled-components';
import Wrapper from '@common/Wrapper';

import logo from '@src/static/logo.svg';

const FooterWrapper = styled.footer`
  width: 100vw;
  padding: 10px;
  background: ${p =>
    p.theme.dark ? p.theme.secondaryColor : p.theme.gradient};

  p {
    font-size: 1rem;
    line-height: 35px;
    color: white;
  }

  a {
    color: ${p =>
      p.theme.dark ? p.theme.primaryColor : p.theme.secondaryColor};
    &:hover {
      color: ${p => p.theme.primaryText};
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Wrapper>
      <img width="35px" src={logo} alt="Darshan Sudhakar" />
      <p style={{ float: 'right' }}>
        &nbsp;Made with love and
        <a href="https://gatsbyjs.org" target="__blank">
          &nbsp;Gatsby.&nbsp;
        </a>
        Project forked from
        <a href="https://anuraghazra.dev/" target="__blank">
          &nbsp;Anurag Hazra&nbsp;
        </a>
      </p>
    </Wrapper>
  </FooterWrapper>
);

export default Footer;
