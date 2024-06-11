import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer Jr.', 'Web Designer', 'Code Lover <3'],
    loop: 0
  });

  const buttonsHome = [
    { src: '/public/others/github.svg', href: 'https://github.com/JhensImanel', name: 'GitHub' },
    { src: '/public/others/linkedin.svg', href: 'https://www.linkedin.com/in/jamesimanel/', name: 'LinkedIn' },
    { src: '/public/others/gmail.svg', href: 'mailto:u18310128@gmail.com?subject=Entrevista%20laboral&body=Hola,%20estimado', name: 'Gmail' },
    { src: '/public/others/outlook.svg', href: 'mailto:jamesimanel@hotmail.com?subject=Entrevista%20laboral&body=Hola,%20estimado', name: 'Outlook' },
    { src: '/public/others/whatsapp.svg', href: 'whatsapp://send?phone=936615284&text=Hola,%20estimado', name: 'WhatsApp' },
  ];

  return (
    <section>
      <div className='container'>
        <div>
          <img className="h-16 w-auto rounded-full border-[1px] border-gray-100" src="/image/photo.jpg" alt="profile" />
          <h2 className="font-bold text-4xl">Hola, Soy <span className='text-blue-500'>Jhens Imanel</span></h2>
          <h2 className="font-bold text-4xl mt-1 pb-3 gradiant-text flex">
            <span>{text}</span>
            <Cursor cursorColor="black" />
          </h2>
        </div>

        <article className="mb-10">
          <span className="bg-green-100 text-center items-center text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Disponible para trabajar</span>
        </article>

        <div className="mt-4 text-gray-400 pb-10">
          +1 año de experiencia en desarrollo UI, conociendo personas maravillosas, aprendiendo, alcanzando expectativas y brindando experiencias.
        </div>

        <div className='flex gap-4'>
          {buttonsHome.map(({ src, href, name }, index) => (
            <a key={index} className='flex gap-1.5 py-2 px-2 w-auto rounded-full bg-transparent border-blue-200 border-2 text-black hover:bg-blue-100 ' href={href} target="_blank" rel="noreferrer">
              <img className='size-6' src={src} alt="" />
              <p>{name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
