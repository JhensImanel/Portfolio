export interface Skill {
  icon: string;
  label: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

// Manually parsing the updated skills.json data
const skillsData = {
  "Frontend": [
    { "icon": "/public/frontend/html.svg", "label": "HTML" },
    { "icon": "/public/frontend/css.svg", "label": "CSS" },
    { "icon": "/public/frontend/js.svg", "label": "JavaScript" },
    { "icon": "/public/frontend/react.svg", "label": "React" },
    { "icon": "/public/frontend/angular.svg", "label": "Angular" },
    { "icon": "/public/frontend/figma.svg", "label": "Figma" },
    { "icon": "/public/frontend/bootstrap.svg", "label": "Bootstrap" },
    { "icon": "/public/frontend/sass.svg", "label": "Sass" },
    { "icon": "/public/frontend/tailwindcss.svg", "label": "TailwindCSS" },
    { "icon": "/public/frontend/wordpress.svg", "label": "WordPress" }
  ],
  "Backend": [
    { "icon": "/public/backend/expressjs_dark.svg", "label": "Express" },
    { "icon": "/public/backend/firebase.svg", "label": "Firebase" },
    { "icon": "/public/backend/mysql.svg", "label": "MySQL" },
    { "icon": "/public/backend/postgresql.svg", "label": "PostgreSQL" },
    { "icon": "/public/backend/sqlserver.svg", "label": "SQL Server" },
    { "icon": "/public/backend/mongodb.svg", "label": "MongoDB" },
    { "icon": "/public/backend/node.svg", "label": "Node.js" },
  ],
  "Otros": [
    { "icon": "/public/others/vscode.svg", "label": "VSCode" },
    { "icon": "/public/others/git.svg", "label": "Git" },
    { "icon": "/public/others/github.svg", "label": "GitHub" },
    { "icon": "/public/backend/postman.svg", "label": "Postman" }
  ]
};

// Transforming the skillsData into an array of SkillCategory objects
export const allSkillCategories: SkillCategory[] = Object.entries(skillsData).map(([category, skills]) => ({
  category,
  skills
}));

// Initial category to show
export const initialCategory = allSkillCategories[0];

export function getNextSkill(
  skills: Skill[]
): Skill | undefined {
  const existing = new Set(skills.map(skill => skill.label));
  return allSkillCategories.flatMap(category => category.skills).find((skill) => !existing.has(skill.label));
}
