import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Front-end Developer Jr.', 'Freelance Web Designer', 'Code Lover <3'],
    loop: 0
  });

  const buttonsHome = [
    { src: '/github.svg', href: 'https://github.com/JhensImanel' },
    { src: '/linkedin.svg', href: 'https://www.linkedin.com/in/jamesimanel/' },
    { src: '/gmail.svg', href: 'mailto:u18310128@gmail.com?subject=Entrevista%20laboral&body=Hola,%20estimado' },
    { src: '/outlook.svg', href: 'mailto:jamesimanel@hotmail.com?subject=Entrevista%20laboral&body=Hola,%20estimado' },
    { src: '/whatsapp.svg', href: 'whatsapp://send?phone=936615284&text=Hola,%20estimado' },
  ];

  return (
    <section className='px-4 sm:px-8 lg:px-16 xl:px-24'>
      <div className='container w-full'>

        <div className='text-center sm:text-left select-none'>
          <img className="mx-auto sm:mx-0 sm:h-16 h-20 rounded-full border-[1px] border-gray-100" src="/photo.jpg" alt="profile" />
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mt-4">Hola, Soy <span className='text-blue-500'>Jhens Imanel</span></h2>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mt-1 pb-3 flex justify-center sm:justify-start">
            <span>{text}</span>
            <Cursor cursorColor="black" />
          </h2>
        </div>

        <div className="mb-10 flex flex-col sm:flex-row gap-4 items-center justify-center pt-4 sm:justify-start">
          <a href='/src/assets/pdf/CV_JhensT.pdf' download className='py-1 px-4 m-1 rounded-full bg-transparent border-blue-500 border-2 text-blue-500 hover:bg-blue-500 hover:text-white items-center text-center transition duration-500'>
            Descargar CV
          </a>
          <span className="text-center items-center text-xs font-medium px-2 pt-1.5 pb-2 rounded-full text-green-900 bg-green-300 select-none">Disponible para trabajar</span>
        </div>

        <div className="mt-4 text-gray-400 pb-10 text-pretty px-8 sm:px-0 select-none">
          +1 año de experiencia en desarrollo UI, conociendo personas maravillosas, aprendiendo, alcanzando expectativas y brindando experiencias.
        </div>

        <div className='flex gap-4 justify-center sm:justify-start'>
          {buttonsHome.map(({ src, href }, index) => (
            <a key={index} className='flex gap-1.5 py-2 px-2 w-auto rounded-full bg-transparent transition duration-300 border-blue-200 border-2 text-black hover:bg-blue-100 ' href={href} target="_blank" rel="noreferrer">
              <img className='h-6 w-6' src={src} alt="SocialButton" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Home;
