import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Container } from '../slider/Container';
import { SectionTitle } from '../textComponents/SectionTitle';
import { Hashtag } from '../hashtag/Hashtag';
import { Logo } from '../logo/Logo';
import { Icon } from '../icon/Icon';




export const Footer = () => {
  return (
    <Container>
       <StyledFooterWrapper>
      <StyledFooter>
        <SignatureWrapper>
          <LogoWrapper>
            <Logo />
            <Email>elias@elias-dev.ml</Email>
          </LogoWrapper>
          <Signature>Web designer and front-end developer</Signature>
        </SignatureWrapper>

        <StyledMedia>
          <MediaTitle>Media</MediaTitle>
          <MediaList>
            <MediaItem>
              <MedialLink>
                <Icon
                  iconId={"github"}
                  width={"32px"}
                  height={"32px"}
                  viewbox={"0 0 32 32"}
                />
              </MedialLink>
            </MediaItem>
            <MediaItem>
              <MedialLink>
                <Icon
                  iconId={"dribble"}
                  width={"32px"}
                  height={"32px"}
                  viewbox={"0 0 32 32"}
                />
              </MedialLink>
            </MediaItem>
            <MediaItem>
              <MedialLink>
                <Icon
                  iconId={"figma"}
                  width={"32px"}
                  height={"32px"}
                  viewbox={"0 0 32 32"}
                />
              </MedialLink>
            </MediaItem>
          </MediaList>
        </StyledMedia>
        
       
      </StyledFooter>
      <Copyright>© Copyright 2022. Made by Elias</Copyright>
      </StyledFooterWrapper>
    </Container>
  );
};


const StyledFooterWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 48px;
padding-bottom: 32px;
`


const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  color: ${theme.colors.colorGray};
  `



  const SignatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 346px;
  `

  const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  `

  const Email = styled.p`
  font-size: 16px;
  `

  const Signature = styled.p`
  font-size: 16px;
  color: ${theme.colors.accentWhite};
  `

  const StyledMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 112px;
  height: 75px;
  `

const MediaList = styled.ul`
  display: flex;
  gap: 8px;
`;

  const MediaTitle = styled.p`
  display: inline-block;
  align-items: center;
  color: ${theme.colors.accentWhite};
  font-size: 24px;
  font-weight: 500;
  `

  const MediaItem = styled.li`
  

  `

  const MedialLink = styled.a`
  display: flex;

  `

  const Copyright = styled.p`
  display: inline-block;
  color: ${theme.colors.colorGray};
  `