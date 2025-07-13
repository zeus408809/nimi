import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: 'BTech Computer Science and Engineering',
      institution: 'Maharaja Agrasen Institute Of Technology',
      duration: 'November 2022 - Present',
      grade: 'Current GPA: 9.1/10',
      location: 'Delhi, India',
      description: 'Specializing in Machine Learning, Data Structures, and Web Development',
      status: 'current'
    },
    {
      degree: '12th Grade (Science)',
      institution: 'N.K. Bagrodia Public School',
      duration: 'March 2022',
      grade: 'Percentage: 95.2%',
      location: 'Delhi, India',
      description: 'Physics, Chemistry, Mathematics with Computer Science',
      status: 'completed'
    },
    {
      degree: '10th Grade',
      institution: 'N.K. Bagrodia Public School',
      duration: 'March 2020',
      grade: 'Percentage: 95.2%',
      location: 'Delhi, India',
      description: 'All subjects with distinction',
      status: 'completed'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-pink-50/50 to-peach-50/50 relative overflow-hidden">
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
            Education
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            My academic journey has been marked by consistent excellence and a passion for learning
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 to-peach-400 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-r from-pink-400 to-peach-400 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                <motion.div
                  className="md:ml-20 glass p-8 rounded-2xl hover-lift transition-all-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <div className={`p-3 rounded-full mr-4 ${
                        edu.status === 'current' 
                          ? 'bg-gradient-to-r from-pink-400 to-peach-400' 
                          : 'bg-gradient-to-r from-gray-400 to-gray-500'
                      }`}>
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-gray-600 font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                      edu.status === 'current' 
                        ? 'bg-pink-100 text-pink-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {edu.status === 'current' ? 'In Progress' : 'Completed'}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-pink-500" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="w-4 h-4 mr-2 text-pink-500" />
                      <span className="text-sm font-semibold">{edu.grade}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-pink-500" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {edu.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;