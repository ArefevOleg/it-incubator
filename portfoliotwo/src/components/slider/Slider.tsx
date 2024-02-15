import React from 'react';
import styled from "styled-components"
import { FlexWrapper } from '../Flexwrapper';

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
      <Slide>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Text>
        <Name>@ivan ivanow</Name>
      </Slide>
      </FlexWrapper>
        <Pagination>
        <span></span>
        <span></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  background-color: #a6c9cc;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  background-color: #a6c9cc;
  text-align: center;
`

const Text = styled.p`
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  background-color: #a6c9cc;
`

const Name = styled.div`
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  background-color: #a6c9cc;
`

const Pagination = styled.div`


span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #0d00f9;
  margin: 5px;
}

`