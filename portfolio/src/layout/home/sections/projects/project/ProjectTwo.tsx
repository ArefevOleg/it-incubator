import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../../components/Button';
import { theme } from '../../../../../styles/Theme';



export const ProjectTwo = ( ) => {
  return (
    <ProjectWrapper>
      <ImgWrapper>
        <Img src="https://i.postimg.cc/ydCCN95H/Banner2.webp" />
      </ImgWrapper>
      <SkillsWrapper>
        <SkillName>React</SkillName>
        <SkillName>Express</SkillName>
        <SkillName>Discord.js</SkillName>
        <SkillName>Node.js</SkillName>
      </SkillsWrapper>
      <SkillsWrapper>
        <SkillName>HTML</SkillName>
        <SkillName>SCSS</SkillName>
        <SkillName>Python</SkillName>
        <SkillName>Flask</SkillName>
      </SkillsWrapper>
      <Description>
        <DescriptionTitle>ProtectX</DescriptionTitle>
        <DescriptionText>Discord anti-crash bot</DescriptionText>
        <ButtonWrapper>
        <Button>Live</Button>
        </ButtonWrapper>
      </Description>
    </ProjectWrapper>
  );
};


const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 100%;
  border: 1px solid ${theme.colors.colorGray};
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid ${theme.colors.colorGray};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const SkillsWrapper = styled.div`
  display: flex;
  padding: 8px;
  gap: 8px;
`;

const SkillName = styled.p`
  
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${theme.colors.colorGray};
  padding: 16px;
  gap: 16px;
`;


const DescriptionTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
`;


const DescriptionText = styled.p`
  display: flex;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;