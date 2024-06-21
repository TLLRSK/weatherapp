const SwiperComponent = () => {
  return (
    <swiper-container
      space-between="50"
      slides-per-view="1"
      navigation
      pagination={{ clickable: true }}
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
    </swiper-container>
  );
};

export default SwiperComponent;
