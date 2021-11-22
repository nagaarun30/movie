import React from 'react'
import styled from 'styled-components'

const BoxContainer = styled.div`
width: 100%;
min-height: 550px;
display: flex;
flex-direction: column;
border-radius: 0;
background-color: #fff;
box-shadow: 0 0 2px rgba(15,15,0,0.28);
position: relative;
overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
  background: rgb(241,196,15);
  background: linear-gradient(90deg, rgba(241,196,15,1) 20%, rgba(243,172,18,1) 100%);
`;

const BackDrop = styled.div`
width: 160%;
height: 550px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
`;

export function AccountBox(props) {
    return <BoxContainer>
        <TopContainer>
            <BackDrop />
        </TopContainer>
    </BoxContainer>
}