import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const sections = [
    { name: 'Inicio', to: '/' },
    { name: 'Proyectos', to: '/proyectos' },
    { name: 'Experiencia', to: '/experiencia' },
    { name: 'Habilidades', to: '/habilidades' },
    { name: 'Contacto', to: '/contacto' }
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuButtonRef.current &&
      menuRef.current &&
      !menuButtonRef.current.contains(event.target as Node) &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setIsOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className='text-white bg-gradient-to-br from-green-400 to-blue-600 text-center xl:px-16 px-8 py-3.5 flex justify-between top-0 items-center shadow-lg w-full z-50'>

      <span className="text-lg font-bold flex gap-3 items-center">
        <Link to='/'>Portfolio.</Link>
      </span>

      <ul className="items-center sm:flex hidden">
        {sections.map(({ name, to }, index) => (
          <Link to={to} key={index} className="items-center py-0.5 px-3 text-center rounded-xl hover:bg-slate-50 bg-transparent hover:text-black">{name}</Link>
        ))}
      </ul>

      <button ref={menuButtonRef} onClick={() => setIsOpenMenu((prev) => !prev)} className='justify-end sm:hidden flex'>
        <img src="/menu.svg" alt="iconMenu" className='size-7' />
      </button>

      {isOpenMenu && (
        <div ref={menuRef} className='absolute border-green-200 z-50 top-10 flex-col items-start rounded-lg p-2 border bg-gradient-to-br from-green-400 to-blue-600 right-2'>
          {sections.map(({ name, to }, index) => (
            <Link key={index} to={to} >
              <h3 className='text-white'>{name}</h3>
            </Link>
          ))}
        </div>
      )}

    </header>
  )
}

export default Header