import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import restaurantFake from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';
import {Restaurant, RestaurantInfo, RestaurantPhoto,Title, Address} from './styles';

const RestaurantCard = ({ restaurant, onClick }) => {
    const [imageLoaded, setImageLoaded] =useState(false);

    return (
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars 
                    activeColor="#e7711c" 
                    count={5} 
                    edit={false} 
                    isHalf 
                    value={restaurant.rating} 
                />
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto 
                alt="Foto do restaurante"
                isImageLoaded={imageLoaded}
                onLoad={() =>setImageLoaded(true)}
                src={restaurant.photos ? restaurant.photos[0].getUrl() :restaurantFake} 
            />
            {!imageLoaded && <Skeleton width="100px" height="100px" />}
        </Restaurant>
    );
}

export default RestaurantCard;