import './testimonials.css';
import TestimonialIMG1 from '../../assets/gossett.jpg';
import TestimonialIMG2 from '../../assets/nola.jpg';
import TestimonialIMG3 from '../../assets/go.jpg';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonialData = [
  {
    avatar: TestimonialIMG1,
    name: 'Brian Gossett - Acuity,Inc',
    link: 'https://www.linkedin.com/in/brian-gossett-686aa4175/',
    review:
      'Through the recent changes at Acuity, Inc., your resilience, teamwork, and positive attitude have been truly inspiring. You’ve handled challenges with professionalism and empathy, making a real impact on the team. Thank you for your dedication — it’s a pleasure working alongside you during this time of transition.',
  },
  {
    avatar: TestimonialIMG2,
    name: 'Nola Alzayat - Acuity,Inc',
    link: 'https://www.linkedin.com/in/nolaalzayat//',
    review:
      'Amidst the recent government budget cut at Acuity, Inc.,Your professionalism, adaptability, and support for the team have been truly admirable. Even during difficult times, you consistently led by example and helped create a sense of stability.Your contributions are valued and deeply appreciated. I look forward to continuing to work alongside you as we move forward.',
  },

  {
    avatar: TestimonialIMG3,
    name: 'Brian Go - Acuity,Inc',
    link: 'https://www.linkedin.com/in/brian-go/',
    review:
      'I would like to formally acknowledge your exceptional professionalism and support during the recent transitions at Acuity, Inc. Your positive attitude, adaptability, and steady leadership have been invaluable to the team. Thank you for your continued dedication during this critical time. It is a pleasure working with you.',
  },
];

export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review From Colleagues</h5>
      <h2>Feedback</h2>
      <Swiper
        className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={true}
      >
        {testimonialData.map(({ avatar, name, review, link }, index) => (
          <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <a href={link} target='__blank'>
                <img src={avatar} alt='Avatar 1' />
              </a>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
