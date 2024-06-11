import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-white border-blur-600 shadow-md rounded-xl border-[1px] border-[#1922324d] w-[780px]">
      <div className="py-8 lg:py-4 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#192232]">Contactame</h2>
        <form action="#" className="space-y-3">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black-900">Correo</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black-900">Asunto</label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-black-900 bg-black-50 rounded-lg border border-black-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Entrevista laboral, reunión, ..."
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-black-900">Mensaje</label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-black-900 bg-black-50 rounded-lg shadow-sm border border-black-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Deja un comentario..."
            ></textarea>
          </div>
          <div className='flex justify-center'>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center border-[#192232] border-2 hover:bg-[#192232] hover:text-white text-[#192232] rounded-lg">
            Enviar mensaje
          </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
