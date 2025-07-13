import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Palette, MessageSquare, Lightbulb, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: Code,
      skills: ['C/C++', 'Python', 'HTML/CSS', 'JavaScript', 'React', 'SQL'],
      color: 'from-pink-400 to-rose-400'
    },
    {
      title: 'Tools & Technologies',
      icon: Database,
      skills: ['Git/GitHub', 'VS Code', 'Google Colab', 'TensorFlow', 'Scikit-learn', 'Pandas'],
      color: 'from-peach-400 to-orange-400'
    },
    {
      title: 'Technical Skills',
      icon: Lightbulb,
      skills: ['Web Development', 'Machine Learning', 'Deep Learning', 'Data Analysis', 'Feature Engineering', 'Model Evaluation'],
      color: 'from-pink-400 to-purple-400'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Leadership', 'Effective Communication', 'Decision Making', 'Consultation', 'Team Collaboration', 'Problem Solving'],
      color: 'from-rose-400 to-pink-400'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold mb-6 font-playfair gradient-text"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            A comprehensive toolkit for building innovative solutions across multiple domains
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: categoryIndex * 0.2 }}
              className="glass p-8 rounded-2xl hover-lift transition-all-300 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="group/skill"
                  >
                    <motion.div
                      className="px-4 py-3 bg-white/50 rounded-lg border border-pink-200/50 text-center hover:border-pink-300 hover:bg-white/70 transition-all-300 cursor-pointer"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(244, 114, 182, 0.15)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-sm font-medium text-gray-700 group-hover/skill:text-pink-600 transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Proficiency Levels</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { level: 'Advanced', skills: ['Python', 'Machine Learning', 'React'], percentage: 90 },
              { level: 'Intermediate', skills: ['C/C++', 'Deep Learning', 'SQL'], percentage: 75 },
              { level: 'Proficient', skills: ['TensorFlow', 'Git/GitHub', 'Data Analysis'], percentage: 85 }
            ].map((item, index) => (
              <motion.div
                key={item.level}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="rgba(244, 114, 182, 0.2)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                      animate={inView ? { 
                        strokeDashoffset: 2 * Math.PI * 40 * (1 - item.percentage / 100)
                      } : {}}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-700">{item.percentage}%</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.level}</h4>
                <p className="text-sm text-gray-600">{item.skills.join(', ')}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;