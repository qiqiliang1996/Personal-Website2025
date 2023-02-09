import React from 'react';
import './testimonials.css';
import TestimonialIMG1 from '../../assets/kiky.jpg';
import TestimonialIMG2 from '../../assets/tom.jpg';
import TestimonialIMG3 from '../../assets/bing.jpg';
import TestimonialIMG4 from '../../assets/peter.jpg';
import TestimonialIMG5 from '../../assets/land.jpg';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonialData = [
  {
    avatar: TestimonialIMG1,
    name: 'Kiky Chen -- Easy Hundred Inc',
    link: 'https://www.linkedin.com/in/kiky-chen-6356bb1b6/',
    review:
      'Congratulations on finishing this challenging project on record time, Qiqi. Given the project tight deadline and additional complexities, its truly amazing to see how you collaborated with different teams to fast-track your part at EZ100 LLC. It has been a pleasure ot all of us. Farewell, and wish you all the success in your new job! ',
  },
  {
    avatar: TestimonialIMG2,
    name: 'Tom Pan -- Easy Hundred Inc',
    link: 'https://www.linkedin.com/in/tompan89/',
    review:
      'You have been a true and amazing collegue to us.Your ability to relentlessly search for solutions to problems and find innovative ways to improve our projects is the key to make you a good collegue. Good luck for your future job hunting.I would like to thank you for all of your consistent hard work. Wish you all the best!',
  },
  {
    avatar: TestimonialIMG3,
    name: 'Bingjing Dong -- Class A IT',
    link: 'https://www.linkedin.com/in/bingjing-dong/',
    review:
      ' Having a friend like you in the workplace is a gift.You behaved with such kindness to others. I appreciate how you always share your success with our team, and your love for your community is one of the reasons I like to work with you. I would like to thank you for helping us achieve our milestones and make us a better organization. ',
  },
  {
    avatar: TestimonialIMG4,
    name: 'Peter Chan -- Class A IT',
    link: 'https://www.linkedin.com/in/peterchen21/',
    review:
      'My name is Peter Chan and I was the supervisor when Qiqi working for Class A IT as a software Engineer intern. Qiqi have contributed to Class A IT personally as well as inspired others to make a difference. We will always remember you as a great employee! Thanks for being with the company through its ups and downs. ',
  },
  {
    avatar: TestimonialIMG5,
    name: 'Shinan Liu -- Class A IT',
    link: 'https://www.linkedin.com/in/shinan-liu-6234a2245/',
    review:
      'You always did a great job here in Class A IT. Your contributions and dedication will always be a prime example for others. It has been a pleasure! Thank you for everything and the sweet memories of working together! You were great to work with and you have given us tons of memories to relive with. Wish you all the best for your future! ',
  },
];

export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Reveiw From Colleagues</h5>
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
