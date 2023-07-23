import {Link} from "react-router-dom";
import {Swiper} from "swiper/react";
import {Navigation, Pagination, A11y} from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {SwiperSlide} from "swiper/react";

export default function SliderContent({title, data}) {
   return (
      <>
         <section className="section">
            <div className="container">
               <h1 className="text-3xl text-teal-dark capitalize font-bold">{title}</h1>
               <div className="mt-8">
                  <Swiper
                     odules={[Navigation, Pagination, A11y]}
                     spaceBetween={20}
                     slidesPerView={7}
                     navigation={false}
                     pagination={{clickable: true}}
                     className="h-[270px]"
                     breakpoints={{
                        350: {
                           slidesPerView:2
                        },
                        450: {
                          slidesPerView:3
                        },
                        576: {
                           slidesPerView: 3,
                        },
                        768: {
                           slidesPerView: 4,
                        },
                        990:{
                          slidesPerView:4
                        },
                        1100: {
                           slidesPerView:6
                        }
                     }}
                  >
                     {data?.map((mov) => {
                        return (
                           <SwiperSlide
                              key={mov.id}
                              className="h-full w-full rounded-md overflow-hidden"
                           >
                              <Link
                                 to={`/single/${mov.id}`}
                                 className="h-full w-full"
                              >
                                 <img
                                    className="w-full h-full object-cover object-center"
                                    src={`https://image.tmdb.org/t/p/original/${mov.backdrop_path}`}
                                    alt={mov.original_title}
                                 />
                              </Link>
                           </SwiperSlide>
                        )
                     })}
                  </Swiper>
               </div>
            </div>
         </section>
      </>
   )
}
