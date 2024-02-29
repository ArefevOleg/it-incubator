import React from 'react';
import styled from "styled-components"
import { Link } from '../../../../components/Link';
import { theme } from '../../../../styles/Theme';


type WorkPropstype = {
  title: string
  text: string
  src: string
}


export const Work = ( props: WorkPropstype ) => {
  return (
    <StyledWork>
      <Description>
        <Image src={props.src} alt=" " />
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href={"#"}>demo</Link>
        <Link href={"#"}>kode</Link>
      </Description>
    </StyledWork>
  );
};

const StyledWork = styled.div`
max-width: 540px;
width: 100%;
background-color: ${theme.colors.secondaryBg};

${Link} {
  padding: 10px 0;
}
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;

`
const Description = styled.div`
padding: 25px 20px;
`

const Title = styled.h3`
`

const Text = styled.p`
`
