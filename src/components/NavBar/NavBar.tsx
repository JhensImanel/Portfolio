import { Link } from 'react-router-dom';

export default function NavBar() {

  const sections = [
    { name: 'Inicio', to: '/' },
    { name: 'Proyectos', to: '/projects' },
    { name: 'Habilidades', to: '/skills' },
    { name: 'Experiencia', to: '/experience' },
    { name: 'Contacto', to: '/contact' }
  ]

  return (
    <nav className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 text-center rounded-full xl:px-16 px-8 py-3 flex justify-between top-0 items-center shadow-md mx-1 mt-2'>

      <span className="text-lg font-bold flex gap-3 items-center">
        <Link to='/'>Portfolio</Link>
      </span>

      <ul className="items-center sm:flex hidden">
        {sections.map(({ name, to }, index) => (
          <Link to={to} key={index} className="items-center py-1 px-3 text-center rounded-full hover:bg-slate-50 hover:text-black">{name}</Link>
        ))}

      </ul>

    </nav>
  )
}
