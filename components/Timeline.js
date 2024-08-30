export default function Timeline() {
    const experiences = [
      {
        role: 'Web Developer',
        company: 'Wyant College of Optical Sciences, University of Arizona',
        duration: 'Sep 2023 - Aug 2024',
        details: [
          'Spearheaded the development of a web portal using Next.js and Firebase for the U.S. National Science Foundation\'s VITAL challenge.',
          'Developed and maintained a user-friendly interface, enhancing the student and teacher experience with interactive and dynamic features.',
          'Collaborated in developing a program showcasing student-accessible comic books and dedicated dashboards, enhancing user experience and collaboration.',
        ],
      },
      {
        role: 'Web Developer Intern',
        company: 'Brainerd Solutions LLC',
        duration: 'Dec 2022 - Jun 2023',
        details: [
          'Developed a SaaS web portal using Next.js, AWS Lambda, and DynamoDB for a multi-tenant solution.',
          'Optimized DynamoDB for improved data processes, efficiency, and scalability.',
          'Successfully managed the front-end team and seamlessly integrated it with the backend for optimal functionality.',
        ],
      },
      {
        role: 'Web Developer Intern',
        company: 'Bosch Global Software Technologies Private Limited',
        duration: 'Apr 2022 - Oct 2022',
        details: [
          'Created a data visualization tool using ReactJS, Material-UI, and neo4j.',
          'Enabled users to efficiently interpret and manipulate large datasets through an intuitive interface.',
          'Integrated neo4j and D3 seamlessly with the front-end UI, enhancing data storage and retrieval capabilities.',
        ],
      },
    ];
  
    return (
      <div className="bg-gray-900 py-20 px-10" id="timeline">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Work Experience</h2>
        <div className="max-w-4xl mx-auto">
          <ul className="relative border-l border-gray-200">
            {experiences.map((experience, index) => (
              <li key={index} className="mb-10 ml-6">
                <span className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white"></span>
                <div className="text-white">
                  <h3 className="text-xl font-semibold">{experience.role}</h3>
                  <p className="text-sm text-gray-400">{experience.company}</p>
                  <p className="text-sm text-gray-400 italic">{experience.duration}</p>
                  <ul className="mt-2 list-disc list-inside">
                    {experience.details.map((detail, i) => (
                      <li key={i} className="text-gray-300">{detail}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  