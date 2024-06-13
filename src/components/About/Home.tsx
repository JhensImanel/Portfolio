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
    <section className='mx-16 sm:mx-24'>
      <div className='container sm:px-16 px-6 w-full'>

        <div>
          <img className="h-16 rounded-full border-[1px] border-gray-100" src="/photo.jpg" alt="profile" />
          <h2 className="font-bold text-4xl">Hola, Soy <span className='text-blue-500'>Jhens Imanel</span></h2>
          <h2 className="font-bold text-4xl mt-1 pb-3 gradiant-text flex">
            <span>{text}</span>
            <Cursor cursorColor="black" />
          </h2>
        </div>

        <div className="mb-10 flex gap-4 items-center">
          <a href='/src/assets/pdf/CV_JhensT.pdf' download className='py-1 px-2 m-1 rounded-full bg-transparent border-blue-500 border-2 text-blue-500 hover:bg-blue-500 hover:text-white items-center text-center transition duration-300'>
            Descargar CV
          </a>
          <span className="text-center items-center text-xs font-medium me-2 px-2.5 py-1 rounded-full text-blue-900 bg-blue-300">Disponible para trabajar</span>
        </div>

        <div className="mt-4 text-gray-400 pb-10">
          +1 año de experiencia en desarrollo UI, conociendo personas maravillosas, aprendiendo, alcanzando expectativas y brindando experiencias.
        </div>

        <div className='flex gap-4'>
          {buttonsHome.map(({ src, href }, index) => (
            <a key={index} className='flex gap-1.5 py-2 px-2 w-auto rounded-full bg-transparent transition duration-300 border-blue-200 border-2 text-black hover:bg-blue-100 ' href={href} target="_blank" rel="noreferrer">
              <img className='size-6' src={src} alt="SocialButton" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Home;
