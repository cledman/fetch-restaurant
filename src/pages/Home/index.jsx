import React, { useState } from 'react';
//import Slider from "react-slick";
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal } from '../../components';
import { Wrapper,Container, Carousel,Search, Logo, Map, CarouselTitle } from './styles';

const Home = () =>{
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(true);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptativeHeight:true        
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
                        onChange={(e) => setInputValue(e.target.value)} 
                    />
                    </TextField>  
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title="Nome 1" />
                        <Card photo={restaurante}  title="Nome 2" />
                        <Card photo={restaurante} title="Nome 3"  />
                        <Card photo={restaurante}  title="Nome 4" />
                        <Card photo={restaurante}  title="Nome 5" />                                                                        
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map />
            <Modal open={modalOpened} onClose={ ()=>setModalOpened(!modalOpened)}/>
        </Wrapper>
    )
}

export default Home;