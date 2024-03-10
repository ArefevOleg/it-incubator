import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

type PropsType = {
  name: string;
};


export const Hashtag = ({ name,}: PropsType) => {
  return (
    <HashtagLink>{ name }</HashtagLink>
  );
};

const HashtagLink = styled.a`
  color: ${theme.colors.accentGreen} ;
`
