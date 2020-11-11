import styled from 'styled-components';

export const Overlay = styled.div`
    align-items:center;
    background:rgba(78,89,131,0.5);
    backdrop-filter:blur;    
    display:flex;
    height:100vh;
    justify-content:center;
    position:fixed;
    right:0;
    top:0;
    width:100%;
    z-index:999;
`;

export const Dialog = styled.div`
    background-color:#ffffff;
    border-radius:8px;
    box-shadow: 0px 0px 32px rgba(78,89,131,0,2);
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    max-height:calc(100%-144px);
    padding:24px;
    width:500px;
`;

