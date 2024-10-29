import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useState } from 'react';
import { cards } from './data.js';
import Card from './Card.jsx';
import Modal from './Modal.jsx';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CardSlider = () => {
    const [projectCard, setProjectCard] = useState(cards)

    function toggle(id) {
        setProjectCard(prevState => {
            return (
                prevState.map(project => {
                    return (
                        project.id === id ? { ...project, showMoreContent: !project.showMoreContent } : project
                    )
                })
            )
        })
    }

    const projectElement = projectCard.map(project =>
        <SwiperSlide key={project.id}>
            <Card  {...project} handleClick={toggle} />
        </SwiperSlide>
    )

    const modalElement = projectCard.map(project =>
        <Modal key={project.id} {...project} handleClick={toggle} />
    )

    return (
        <>
            {modalElement}
            <div className='w-[90svw] ms-auto me-auto h-[65dvh]'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    className='h-full ~m-5/10'
                    breakpoints={{
                        840: {
                            slidesPerView: 2
                        },
                        1280: {
                            slidesPerView: 3
                        }
                    }}
                >
                    {projectElement}
                </Swiper>
            </div>
        </>
    )
}

export default CardSlider

