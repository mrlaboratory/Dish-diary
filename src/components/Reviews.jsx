import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


const reviewData = [{ "name": "Samantha", "review": "I tried the pasta recipe and it was absolutely delicious! The sauce was perfectly seasoned and the pasta was cooked just right.", "image_url": "https://mrlaboratory.github.io/img/customer/girl1.jpg" }, { "name": "John", "review": "The chicken recipe was a huge hit in my household. My whole family loved it and we'll definitely be making it again!", "image_url": "https://mrlaboratory.github.io/img/customer/man1.png" }, { "name": "Emily", "review": "I've been looking for a good vegetarian recipe and this one did not disappoint. The flavors were amazing and it was easy to make.", "image_url": "https://mrlaboratory.github.io/img/customer/girl2.jpg" }, { "name": "Michael", "review": "I made the steak recipe for a special occasion and it turned out perfectly. The instructions were clear and easy to follow.", "image_url": "https://mrlaboratory.github.io/img/customer/man2.png" }, { "name": "Sarah", "review": "I tried the dessert recipe and it was amazing! It was the perfect way to end a meal.", "image_url": "https://mrlaboratory.github.io/img/customer/girl3.png" }, { "name": "David", "review": "The seafood recipe was so delicious. I loved how the different flavors and textures came together.", "image_url": "https://mrlaboratory.github.io/img/customer/man3.jpg" }, { "name": "Jennifer", "review": "I'm not usually a fan of spicy food but I decided to try the recipe anyway. I was pleasantly surprised at how well-balanced the flavors were.", "image_url": "https://mrlaboratory.github.io/img/customer/girl4.png" }]

const Reviews = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        function handleResize() {
          setIsMobile(window.innerWidth <= 600);
        }
        window.addEventListener('resize', handleResize);
    
        handleResize();
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div className='w-full my-10'>
              <h2 className='text-center text-gray-600 mt-3 text-4xl font-bold uppercase'>Whats client says</h2>
            <div className='p-5 mt-5'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={isMobile? 2 : 3}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >

                    {
                        reviewData.map((item, i) => <SwiperSlide key={i}>
                            <div data-aos="flip-up" className='text-center border-2 border-gray-200 bg-white rounded-lg p-5'>
                                <div className='w-full flex justify-center items-center'>
                                    <div className='w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-[#D54215]'>
                                        <img className='w-full h-full' src={item.image_url} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='mt-2'>{item.review}</h4>
                                    <h3 className='font-bold mt-5 italic text-[#D54215]'>{item.name}</h3>
                                </div>   </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;