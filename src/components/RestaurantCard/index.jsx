import React from 'react';
import ReactStars from "react-rating-stars-component";
import restaurant from '../../assets/restaurante-fake.png';
import {Restaurant, RestaurantInfo, RestaurantPhoto,Title, Address} from './styles';
const RestaurantCard = () => (
    <Restaurant >
        <RestaurantInfo>
            <Title>Nome do Restaurant</Title>
            <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />
            <Address>Av Rio Branco, 120</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurant} alt="Foto do restaurante" />
    </Restaurant>
)

export default RestaurantCard;