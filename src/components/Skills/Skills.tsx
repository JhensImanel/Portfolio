interface Skill {
  id: number;
  svg: string;
}

interface SkillsProps {
  icons: {
    frontend: Skill[];
    databases: Skill[];
    otros: Skill[];
  };
}

const Skills: React.FC<SkillsProps> = ({ icons }) => {
  return (
    <>

      <table>
        <tr>
          <td>Frontend</td>
          <td>Databases</td>
          <td>Others Skills</td>
        </tr>
        <tr>
          <td>
            <ul className="flex gap-4">
              {icons.frontend.map(({ id, svg }) => (
                <img key={id} src={svg} alt="iconSkill" className="size-8" />
              ))}
            </ul>
          </td>
          <td>
            <ul className="flex gap-4">
              {icons.databases.map(({ id, svg }) => (
                <img key={id} src={svg} alt="iconSkill" className="size-8" />
              ))}
            </ul>
          </td>
          <td>
            <ul className="flex gap-4">
              {icons.otros.map(({ id, svg }) => (
                <img key={id} src={svg} alt="iconSkill" className="size-8" />
              ))}
            </ul>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Skills;