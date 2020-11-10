import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
`;

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    height:100vh;
    overflow-y:auto;
    width:360px;
`;

export const Search = styled.section`
    background-color:#ffffff;
    display:flex;
    flex-direction: column;
    justify-content:center;
    padding:16px;
`;

export const Logo = styled.img`
    margin-bottom:15px;
`;

export const Map = styled.div`
    background-color:red;
    width:100%;
`;

export const CarouselTitle = styled.h1`
    color:${(props) =>props.theme.colors.text};
    font-family: ${(props) =>props.theme.fonts.regular};
    font-size:24px;
    font-weight:bold;
    line-height:29px;
    margin:16px 0;
`;