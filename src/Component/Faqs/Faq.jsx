import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PyqCard from '../Common/PyqCard';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiCornerRightDown } from 'react-icons/fi';

const Faq = ({ elem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const [pyqData, setPyqData] = useState([]);
  const contentRef = useRef(null);
  
  const toggleOpen = () => {
    setIsOpen(prev => !prev);
    if (!isOpen && id === "pyq") {
      setPyqData(elem.pyqLink);
    }
  };
  
  // Add scroll into view effect when opened
  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [isOpen]);

  return (
    <div className="my-6 mx-auto w-full max-w-3xl perspective-1000">
      <motion.div
        layout
        className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header/Question */}
        <motion.button
          className="w-full p-0 border-none outline-none bg-transparent"
          onClick={toggleOpen}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative p-6 text-left">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute bg-white bg-opacity-10" 
                    style={{
                      height: '1px',
                      width: '100%',
                      top: `${i * 25}%`,
                      transform: `rotate(${i * 5}deg)`
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex justify-between items-center relative z-10">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {elem.subject ? elem.subject : elem.Ques}
                </h2>
                
                <motion.div 
                  initial={false}
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  className="mt-2 text-indigo-200 text-sm flex items-center"
                >
                  <FiCornerRightDown className="mr-2" />
                  <span>Click to expand</span>
                </motion.div>
              </div>
              
              <div className="ml-4 flex-shrink-0">
                <motion.div
                  animate={{ 
                    rotate: isOpen ? 45 : 0,
                    backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)' 
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                >
                  {isOpen ? (
                    <FiMinus className="text-white text-xl" />
                  ) : (
                    <FiPlus className="text-white text-xl" />
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.button>
        
        {/* Answer/Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={contentRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: 'auto', 
                opacity: 1,
                transition: { 
                  height: { duration: 0.4 },
                  opacity: { duration: 0.3, delay: 0.1 }
                }
              }}
              exit={{ 
                height: 0, 
                opacity: 0,
                transition: { 
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 }
                }
              }}
              className="overflow-hidden"
            >
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="p-6 pt-0 bg-white rounded-b-lg"
              >
                <div className="prose max-w-none">
                  {elem.Ans ? (
                    <div className="text-gray-700">
                      {elem.Ans}
                    </div>
                  ) : id === "pyq" ? (
                    <PyqCard pyqData={pyqData} />
                  ) : (
                    <div className="text-gray-500 italic">No content available</div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Faq;
