import { useState } from "react";
import { initialCategory, allSkillCategories, SkillCategory } from "./skills";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>(initialCategory);

  const iconCategory: { [key: string]: string } = {
    Frontend: '/iconBack.png',
    Backend: '/iconOthers.png',
    Otros: '/icon.png'
  };

  return (
    <section>
      <div className="container">
        <div className="w-[800px] h-[430px] rounded-[10px] bg-white overflow-hidden flex flex-col shadow-md">
          <nav className="bg-white pt-1 px-1 rounded-t-lg border-b-2 border-gray-200">
            <ul className="flex">
              {allSkillCategories.map((category) => (
                <li
                  key={category.category}
                  className={`flex items-center justify-center w-full p-2 cursor-pointer bg-white border-b-4 ${category === selectedCategory ? "bg-gray-200 border-indigo-500" : "border-transparent"} rounded-t-lg`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <img src={iconCategory[category.category]} className="size-6 mr-2" alt={category.category} />
                  {category.category}
                  {category === selectedCategory && (
                    <motion.div
                      layoutId="underline"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <main className="flex flex-col justify-center items-center text-5xl grow select-none">
            <div className="flex flex-wrap justify-center items-center">
              <AnimatePresence mode="wait">
                {selectedCategory.skills.map((skill) => (
                  <motion.div
                    key={skill.label}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="m-2 p-2 flex flex-col items-center"
                  >
                    <img src={skill.icon} alt={skill.label} className="size-16" />
                    <span className="text-xs">{skill.label}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
