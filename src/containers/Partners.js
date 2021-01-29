import React from 'react';
import SwiperCore, { Navigation, A11y, EffectFlip } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-flip/effect-flip.scss';

// install Swiper components
SwiperCore.use([Navigation, A11y, EffectFlip ]);



class PartnerWithUs extends React.Component  {
  render () {
    return (
      <Swiper
      spaceBetween={20}
      slidesPerView={3}
      effect={"flip"}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    >
      <SwiperSlide style={{height:300,width:200,display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} ><img src="../assets/images/Gray1.png"></img></SwiperSlide>
      <SwiperSlide style={{height:300,width:200,display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} ><img src="../assets/images/Gray2.png"></img></SwiperSlide>
      <SwiperSlide style={{height:300,width:200,display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} ><img src="../assets/images/Gray3.png"></img></SwiperSlide>
      <SwiperSlide style={{height:300,width:200,display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} ><img src="../assets/images/Gray4.png"></img></SwiperSlide>
      <SwiperSlide style={{height:300,width:200,display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} ><img src="../assets/images/Gray5.png"></img></SwiperSlide>
      <SwiperSlide style={{height:300,width:200,display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} ><img src="../assets/images/Gray6.png"></img></SwiperSlide>
      <SwiperSlide style={{height:300,width:200,display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} ><img src="../assets/images/Gray7.png"></img></SwiperSlide>
      <SwiperSlide style={{height:300,width:200,display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} ><img src="../assets/images/Gray80.png"></img></SwiperSlide>
      <SwiperSlide style={{height:300,width:200,display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} ><img src="../assets/images/Gray9.png"></img></SwiperSlide>
      <SwiperSlide style={{height:300,width:200,display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} ><img src="../assets/images/Gray10.png"></img></SwiperSlide>
      <SwiperSlide style={{height:300,width:200,display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} ><img src="https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/i1.png"></img></SwiperSlide>
      <SwiperSlide style={{height:300,width:200,display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} ><img src="https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/i2.png"></img></SwiperSlide>
      <SwiperSlide style={{height:300,width:200,display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} ><img src="https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/i3.png"></img></SwiperSlide>
      <SwiperSlide style={{height:300,width:200,display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} ><img src="https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/i4.png"></img></SwiperSlide>
      <SwiperSlide style={{height:300,width:200,display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} ><img src="https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/i6.png"></img></SwiperSlide>

    </Swiper>
    );
  }
   }  

export default PartnerWithUs;
