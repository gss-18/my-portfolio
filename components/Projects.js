import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Telco Customer Churn Prediction',
      description: 'Developed a machine learning model to predict customer churn with 82% accuracy using Python.',
      link: 'https://github.com/gss-18/Telco_Project'
    },
    {
      title: 'DataCo Supply Chain Analysis',
      description: 'Optimized inventory management and reduced stockouts with advanced data visualization techniques.',
      link: 'https://github.com/gss-18/Business-Intelligence-Project'
    },
    {
      title: 'Disease Prediction',
      description: 'Achieved 97% accuracy in disease prediction through rigorous model training and cross-validation techniques.',
      link: 'https://github.com/gss-18/Final_Project'
    }
  ];

  return (
    <div className=" py-20 px-10" id="projects">
      <h2 className="text-4xl font-bold text-black text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} link={project.link} />
        ))}
      </div>
    </div>
  );
}
