import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const sections = [
    { name: 'Sobre mí ', to: '/' },
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
    <nav className={`fixed sm:px-16 left-0 py-3 px-5 transition duration-300 text-black flex justify-between top-0 items-center z-50 shadow-md w-full ${scrolled ? 'backdrop-blur-md' : 'backdrop-blur-sm'
      }`}>

      <span className="flex gap-3 items-center">
        <Link to='/'>Jhens</Link>
        <div className='relative'><img className="h-10 w-auto rounded-full" src="/image/photo.jpg" alt="profile" /> <span className='top-0 left-7 absolute size-[10px] bg-green-400 border-[1px] border-white dark:border-black rounded-full'></span></div>
      </span>

      <ul className="flex gap-1">
        {sections.map(({ name, to }, index) => (
          <Link to={to} key={index} className="py-2 px-3 rounded-full hover:bg-gray-300">{name}</Link>
        ))}
      </ul>

    </nav>
  )
}

export default NavBar