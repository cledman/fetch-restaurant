import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-image: url(${(props) =>props.photo});
    background-size:cover;
    border-radius:6px;
    display:flex;
    height:90px;
    justify-content:center;
    padding:5px;
    width:90px;
`;

const Title =styled.span`
    color:#ffffff;
    font-family: ${(props) =>props.theme.fonts.regular};
    font-size:16px;

`;

const ImageCard = ({photo, title}) => (
    <Card photo={photo} >
        <Title>{title}</Title>
    </Card>
);

export default ImageCard;