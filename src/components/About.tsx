import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Trophy,
      title: 'Badminton Champion',
      description: 'Silver Medal at University Level (GGSIPU) 2023 & 2024'
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Maintaining 9.1/10 CGPA in Computer Science Engineering'
    },
    {
      icon: Users,
      title: 'Leadership Role',
      description: 'Social Media Head in College Cultural Society'
    },
    {
      icon: Heart,
      title: 'AI/ML Passion',
      description: 'Specialized in Machine Learning and Deep Learning projects'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            I am a passionate Computer Science student pursuing my BTech from Maharaja Agrasen Institute of Technology (MAIT). 
            Currently in my 3rd year, I'm dedicated to mastering machine learning and building innovative web solutions. 
            Beyond academics, I'm an accomplished badminton player who has competed at district and state levels, 
            and I actively contribute to my college community as a Social Media Head.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-400 to-peach-400 flex items-center justify-center glass hover-lift transition-all-300"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <achievement.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{achievement.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Personal Quote */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto gradient-border">
            <motion.blockquote
              className="text-2xl font-medium text-gray-700 mb-4 font-playfair italic"
              whileHover={{ scale: 1.02 }}
            >
              "Combining technical expertise with creative problem-solving, 
              I strive to build solutions that make a meaningful impact in the world of technology."
            </motion.blockquote>
            <p className="text-pink-600 font-semibold">- Nimisha Bhateja</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;