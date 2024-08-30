import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}  // Adds a slight scaling effect on hover
      initial={{ opacity: 1 }}  // Make sure it's fully visible from the start
      animate={{ opacity: 1 }}  // No opacity changes on load
      className="bg-gray-800 rounded-lg shadow-md overflow-hidden text-white"
    >
      <div className="p-5">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <a href={link} className="text-blue-500 mt-3 block">
          View Project
        </a>
      </div>
    </motion.div>
  );
}
