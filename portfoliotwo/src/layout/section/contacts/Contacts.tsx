import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';

export const Contact = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder={"Name"}/>
        <Field placeholder={"Subject"}/>
        <Field placeholder={"Message"} as={"textarea"}/>
        <Button type={"submit"}>Send message</Button>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section `
  min-height: 40vh;
  background-color: #a6c9cc;
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
`
const StyledForm = styled.form `
  max-width: 100%;
  width: 40%;
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  background-color: #a6c9cc;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`

const Field = styled.input `
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  background-color: #a6c9cc;
  width: 80%;
  margin: 10px;
  padding: 10px;
`