import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/slider/Container';
import { SectionTitle } from '../../components/textComponents/SectionTitle';
import { Hashtag } from '../../components/hashtag/Hashtag';
import { Logo } from '../../components/logo/Logo';
import { Icon } from '../../components/icon/Icon';




export const Footer = () => {
  return (
    
      <Container>
      <StyledFooter>
        <SignatureWrapper>
        <LogoWrapper>
        <Logo />
          <Email>
            elias@elias-dev.ml
          </Email>
        </LogoWrapper>
        <Signature>
        Web designer and front-end developer
        </Signature>
        </SignatureWrapper>
        
        <StyledMedia>
          <MediaTitle>Media</MediaTitle>
      <MediaList>
        <MediaItem>
          <MedialLink>
            <Icon iconId={"github"} 
                  width={'32px'} 
                  height={'32px'}
                  viewbox={'0 0 32 32'}/>
          </MedialLink>
        </MediaItem>
        <MediaItem>
          <MedialLink>
          <Icon iconId={"dribble"} 
                  width={'32px'} 
                  height={'32px'}
                  viewbox={'0 0 32 32'}/>
          </MedialLink>
        </MediaItem>
        <MediaItem>
          <MedialLink>
          <Icon iconId={"figma"} 
                  width={'32px'} 
                  height={'32px'}
                  viewbox={'0 0 32 32'}/>
          </MedialLink>
        </MediaItem>
      </MediaList>
    </StyledMedia>
    </StyledFooter>
      </Container>
    
  );
};


const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
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