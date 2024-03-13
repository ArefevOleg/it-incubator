import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Button } from '../Button';

type PropsCardtype = {
  name: string;
  description: string;
  width?: number;
  list?: string;
};



export const SkillCard = ( { name, list, description, width=331}: PropsCardtype) => {
  return (
    <CardWrapperMain width={width}>
      <TechnologyList>{list}</TechnologyList>
      <CardWrapper>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
        <Button>Read more -&gt; </Button>
      </CardWrapper>
    </CardWrapperMain>
  );
};


const CardWrapperMain = styled.div<{width: number}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  outline: 1px solid ${theme.colors.colorGray};
  width: ${(props) => `${props.width}px`};
`;

const TechnologyList = styled.span`
  padding: 8px;
`


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  padding: 8px;
  color: ${theme.colors.accentWhite};
  border-bottom: 1px solid ${theme.colors.colorGray};
`;

const CardText = styled.p`
  padding: 8px;
`