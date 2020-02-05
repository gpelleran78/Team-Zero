import React from 'react';
import styled from 'styled-components';
import SlideView from '../../components/SlideView'

const AppWrapper = styled.div`
display: flex;
justify-content: center;
`;

export default function App(props) {
    // console.log("index/app", props )
    return (
        <AppWrapper>
            <SlideView inputhandler={props.handleInputChange}/>
        </AppWrapper>
    );
}