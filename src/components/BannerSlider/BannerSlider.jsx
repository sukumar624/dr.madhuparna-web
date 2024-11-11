import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerData from './BannerData';
import './bannerslider.css';
import { v4 as uuidv4 } from 'uuid';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Container } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';

const BannerSlider = () => {
    const { handleAppointmentClick } = useOutletContext();

    return (
        <>
            <div className='banner_slider'>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    slidesPerView={1}
                    effect="fade"
                    navigation
                    autoplay={{ delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    pagination={{ clickable: true }}
                >
                    {
                        BannerData.map((data) => (
                            <SwiperSlide key={uuidv4()}>
                                <Container>
                                    <div className="banner_wrap">
                                        <div className="banner_content">
                                            <h1>{data.title}</h1>
                                            {/* <p>{data.description}</p> */}
                                            <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
                                            <button
                                                className='custom_btn'
                                                onClick={handleAppointmentClick}
                                            >
                                                Book Appointment
                                            </button>
                                        </div>
                                        <div className="banner_img_area">
                                            <div className="banner_img">
                                                <img src={data.img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    );
}

export default BannerSlider;
