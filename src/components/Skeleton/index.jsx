import React from 'react';
import styled, { keyframes } from 'styled-components';

const KeyFrameLoading = keyframes`
    0% {
        opacity:0.5;
    }
    100% {
        opacity:1;
    }   
`;

const LoadingSkeleton = styled.div`
    animation: ${KeyFrameLoading} 100ms infinite alternate;
    background-color:gray;
    border-radius:6px;
    height:${(props) => props.height};    
    margin-bottom:10px;
    min-width:${(props) => props.width};
`;

export default ({width, height}) => <LoadingSkeleton  width={width} height={height}  />
