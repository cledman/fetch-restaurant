import styled from 'styled-components';
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