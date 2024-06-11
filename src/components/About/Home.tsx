import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer Jr.', 'Freelance Web Designer ', 'Code Lover <3'],
    loop: 3,
  });

  return (
    <section>
      <div className="container m-auto px-8 py-3 flex gap-8 mt-16">
        <div>
          <h2 className="font-bold text-4xl">Hola, Soy Jhens Imanel</h2>
          <h2 className="font-bold text-4xl mt-1 pb-3 gradiant-text">
            <span>{text}</span>
            <Cursor cursorColor="white" />
          </h2>
          <div className="mt-4 text-gray-400">
            Joven con habilidad para desarrollar interfaces UI, manejo
            del DOM, conexión a APIs. Me destaco por mi habilidad para adaptarme al cambio,
            atención al detalle y creatividad. Actualmente, me encuentro
            llevando cursos que me complementan como desarrollador y realizando
            proyectos personales y elaborando mi tesis para optar la titulación.
          </div>
        </div>
        <div className="rounded-2xl ">

        </div>
      </div>
    </section>
  )
}

export default Home