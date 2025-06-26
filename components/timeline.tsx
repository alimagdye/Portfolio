"use client";

import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

const experiences = [
  {
    title: "AI Trainer",
    company: "Outlier AI",
    period: "DEC 2024 - Present",
    description: [
      "Contributed to the development and improvement of generative AI models by providing coding expertise, crafting complex computer science problems, and training AI systems to understand and generate high- quality code in Java, JavaScript, and C++ and frameworks like Express.js.",
      "Evaluated, ranked, and provided feedback on AI-generated code, ensuring adherence to strict coding standards, style, and grammar, while collaborating on tasks that required strong problem-solving skills.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Zahret Misr Company",
    period: "OCT 2024 - OCT 2024",
    description: [
      "Increased product visibility by developing a website to showcase the company's agricultural products, allowing customers to explore Fresh Fruits and Vegetables online, and make orders using an Integrated functional contact form with Web3Forms API.",
      "Enhanced website performance by 40% by implementing dynamic product cards with lazy loading, interactive modals for product details, and smooth scrolling navigation, leading to a faster and more engaging user experience.",
    ],
  },
];

export function Timeline() {
  const isMobile = useMobile();

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${
              index % 2 === 0 ? "md:pl-10" : "md:pr-10"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <ul className="list-disc pl-5 mt-2 text-zinc-300">
                  {experience.description.map((desc, descIndex) => (
                    <li key={descIndex} className="mb-2">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
