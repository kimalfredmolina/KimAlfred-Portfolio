

const ProjectCard = ({ image, title, description, icons, link }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2">{description}</p>
        <div className="flex mt-4 space-x-2">
          {icons.map((icon, index) => (
            <img key={index} src={icon} alt={`icon-${index}`} className="w-6 h-6" />
          ))}
        </div>
        <a href={link} className="mt-4 inline-block px-4 py-2 bg-black rounded text-white hover:bg-gray-700">
          View Project
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      image: 'path/to/image1.jpg',
      title: 'Travel Blog Website',
      description: 'lorem ipsum dolor sit amet, consectetur',
      icons: ['path/to/icon1.png', 'path/to/icon2.png'],
      link: '#',
    },
    {
        image: 'path/to/image1.jpg',
        title: 'Travel Blog Website',
        description: 'lorem ipsum dolor sit amet, consectetur',
        icons: ['path/to/icon1.png', 'path/to/icon2.png'],
        link: '#',
    },
    {
        image: 'path/to/image1.jpg',
        title: 'Travel Blog Website',
        description: 'lorem ipsum dolor sit amet, consectetur',
        icons: ['path/to/icon1.png', 'path/to/icon2.png'],
        link: '#',
    },
    {
        image: 'path/to/image1.jpg',
        title: 'Travel Blog Website',
        description: 'lorem ipsum dolor sit amet, consectetur',
        icons: ['path/to/icon1.png', 'path/to/icon2.png'],
        link: '#',
    },
  ];

  return (
    <div className="mt-16">
      <div className="container mx-auto">
        <h2 className="my-20 text-center text-6xl font-bold text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              icons={project.icons}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
