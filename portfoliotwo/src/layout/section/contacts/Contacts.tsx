import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/slider/Container';
import { theme } from '../../../styles/Theme';

export const Contact = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm>
          <Field placeholder={"Name"} />
          <Field placeholder={"Subject"} />
          <Field placeholder={"Message"} as={"textarea"} />
          <Button type={"submit"}>Send message</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section `

`
const StyledForm = styled.form `
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
`

const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: ${theme.colors.borderColor};
  padding: 7px 15px;

  
font-size: 12px;
font-weight: 400;
letter-spacing: 0.05em;

color: ${theme.colors.font};
`;
