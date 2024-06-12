import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Experience = () => {
  return (
    <>
      <section className='container'>
      <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot  sx={{ background: '#192232' }} />
              <TimelineConnector sx={{ background: '#192232' }} />
            </TimelineSeparator>
            <TimelineContent>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                may 2024 - actualidad
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Freelance
              </h3>
              <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                Desarrollo de <strong>landings page, SPAs e ecommerces</strong>.
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ background: '#192232' }} />
              <TimelineConnector sx={{ background: '#192232' }} />
            </TimelineSeparator>
            <TimelineContent>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                feb 2024 - abr 2024
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Practicante Pre - Profesional | CCFFAA
              </h3>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Sistema que normaliza reportes de tickets y filtra por fecha. <br />
                <strong>Login + JWT</strong> para un sistema de mensajería en tiempo real. <span className='mr-[2px]'></span>
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ background: '#192232' }} />
              <TimelineConnector sx={{ background: '#192232' }} />
            </TimelineSeparator>
            <TimelineContent>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                ago 2023 - nov 2023
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Trainee [Angular] | System Sixth
              </h3>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Implementación de componentes, directivas, rutas y eventos.<br />
                <strong>Desarrollo UI</strong> de la maquetación y diseño conceptual de la base de datos.
              </p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
    </>
  );
}

export default Experience;
