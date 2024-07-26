import React from 'react';

const experiences = [
  {
    date: "January 2027",
    title: "Senior Full Stack Developer",
    company: "Company Name.",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies diam vitae ipsum aliquet,
      vitae convallis sem imperdiet. Ut at massa nec nisi feugiat iaculis. Vivamus consectetur metus augue, feugiat lacinia
      nisl consectetur a. Aenean vestibulum ligula et eros sollicitudin, id pharetra sem malesuada. Phasellus feugiat faucibus
      velit, nec tincidunt ex sollicitudin sed. In hac habitasse platea dictumst. Nulla vulputate eleifend purus, fermentum
      dignissim nisi tincidunt non. Mauris semper maximus ornare. Aliquam sodales ultrices mi sit amet tristique. Integer sit
      amet bibendum lorem, ac lobortis felis. Donec euismod, orci id faucibus iaculis, mi libero molestie enim, sit amet
      efficitur velit erat ut magna.`,
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <div className="p-10 text-white bg-neutral-700">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <div className="space-y-8 relative">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row relative">
            <div className="flex-shrink-0 bg-yellow-400 rounded-full w-8 h-8 absolute -left-4 top-0 md:top-2.5"></div>
            <div className="flex-shrink-0 w-32 md:w-40 text-center font-bold bg-gray-800 text-gray-300 p-2 rounded ml-4">
              {exp.date}
            </div>
            <div className="flex-grow pl-12 md:pl-20 border-l border-gray-400">
              <h2 className="text-2xl font-bold">{exp.title}</h2>
              <h3 className="text-xl italic text-gray-300">{exp.company}</h3>
              <p className="mt-4 text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
        <div className="absolute left-0 top-0 h-full w-px bg-gray-400"></div>
      </div>
    </div>
  );
}

export default Experience;
