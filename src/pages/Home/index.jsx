import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurantFake from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';
import { Wrapper,Container, Carousel,Search, Logo,  CarouselTitle } from './styles';

const Home = () =>{
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [modalOpened, setModalOpened] = useState(true);
    const {restaurants} = useSelector((state) =>state.restaurants);    

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptativeHeight:true        
    }

    function handleKeyPress(e) {
        if(e.key === 'Enter'){
            setQuery(inputValue);
        }
    }

    return(
        <Wrapper>
            <Container>
                <Search >
                    <Logo src={logo} alt="logo from Restaurant"/>
                    <TextField
                        label='Pesquisar restaurantes'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    >
                    <Input
                        value={inputValue}
                        onKeyPress={handleKeyPress}
                        onChange={(e) => setInputValue(e.target.value)} 
                    />
                    </TextField>  
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        {
                            restaurants.map((restaurant) =>
                                <Card 
                                    key={restaurant.place_id}
                                    photo={restaurant.photos? restaurant.photos[0].getUrl(): restaurantFake}
                                    title={restaurant.name}
                                 />)
                            }
                    </Carousel>
                </Search>
                {restaurants.map((restaurants) => (
                     <RestaurantCard restaurant={restaurants} />
                ))}
               
            </Container>
            <Map 
                query={query}
            />
            {/*
            <Modal open={modalOpened} onClose={ ()=>setModalOpened(!modalOpened)}/>
            */}
        </Wrapper>
    )
}

export default Home;