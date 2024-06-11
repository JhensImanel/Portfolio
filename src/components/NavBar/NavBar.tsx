import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const sections = [
    { name: 'Inicio', to: '/' },
    { name: 'Habilidades', to: '/skills' },
    { name: 'Experiencia', to: '/experience' },
    { name: 'Proyectos', to: '/projects' },
    { name: 'Contacto', to: '/contact' }
  ]

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`font-dosis box-border  text-center rounded-b-3xl px-16 left-0 py-3 transition duration-300 text-black flex justify-between top-0 items-center shadow-md w-[100%] ${scrolled ? 'backdrop-blur-md' : 'backdrop-blur-sm'
      }`}>

      <span className="text-lg font-bold flex gap-3 items-center">
        <Link to='/'>Jhens</Link>
      </span>

      <ul className="flex items-center">
        {sections.map(({ name, to }, index) => (
          <Link to={to} key={index} className="items-center py-1 px-3 text-center rounded-full hover:bg-gray-300">{name}</Link>
        ))}
        <a href='/public/pdf/CV_Jhens.pdf' download className='py-1 px-5 ml-1 rounded-full bg-transparent border-blue-500 border-2 text-blue-500 hover:bg-blue-500 hover:text-white transition items-center'>
          CV
        </a>
      </ul>

    </nav>
  )
}

export default NavBar