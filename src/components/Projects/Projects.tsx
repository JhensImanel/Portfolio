import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Projects = () => {

  const cardProjects = [
    { name: 'Dashboard', img: 'https://i2.wp.com/colorlib.com/wp/wp-content/uploads/sites/2/veltrix-react-dashboard-template.jpg', description: 'Descripción del proyecto 1', repository: '' },
    { name: 'Ecommerce', img: 'https://cdn.dribbble.com/userupload/11426138/file/original-2dea564e577d7b7b6e3ae054bf4e5cfa.png?resize=752x', description: 'Descripción del proyecto 2', repository: '' },
    { name: 'Login + JWT', img: 'https://images.ctfassets.net/23aumh6u8s0i/2By8WJO48rNGEMM73U8nqd/0a96261215a52b7140983461fa88f784/new-auth0-universal-login-experience-form-angular', description: 'Descripción del proyecto 3', repository: '' },
    { name: 'Landing Page', img: 'https://s3-alpha.figma.com/hub/file/3445859838/b926bf61-f8c8-4c37-be44-5a0c8b895dab-cover.png', description: 'Descripción del proyecto 4', repository: '' },
    { name: 'Stack Mern', img: 'https://miro.medium.com/v2/resize:fit:1358/1*1UCjq-QVYluMIY11b1mF3w.png', description: 'Descripción del proyecto 5', repository: '' },
  ];

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
         <section>
        {cardProjects.map(({ name, img, description, repository }, index) => (
          <SwiperSlide key={index} className="bg-gray-300 text-black rounded-xl">

            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font-semibold">{name}</p>

              <div className="h-56 rounded-t-xl bg-transparent flex justify-center items-center">
                <img src={img} alt={name} className="h-60 w-auto" />
              </div>

              <div className='flex flex-col items-center gap-2'>
                <p className="text-center">{description}</p>
                <a href={repository} target="_blank" rel="noopener noreferrer" className='p-1.5 hover:bg-white rounded-full transition duration-300'>
                  <img src="/code.svg" alt="Code Link" className="size-6" />
                </a>
              </div>

            </div>
          </SwiperSlide>
        ))}
       </section>
      </Swiper>
    </>
  );
};

export default Projects;
