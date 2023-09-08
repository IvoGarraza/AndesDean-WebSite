import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
 
  return (
    <motion.div
      onClick={onClick}
      className="backdrop bg-[rgba(0,0,0,0.4)] absolute flex items-center justify-center w-full h-[1000vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;