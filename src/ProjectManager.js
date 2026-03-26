import React, { useState } from 'react';
import Project from './Project';

const projects = [
  {
    name: 'Project A',
    description: 'Build the landing page for the client.',
    status: 'In Progress',
  },
  {
    name: 'Project B',
    description: 'Create the backend API for task tracking.',
    status: 'Completed',
  },
  {
    name: 'Project C',
    description: 'Test and deploy the final application.',
    status: 'Not Started',
  },
];

function ProjectManager() {
  const [visibleProject, setVisibleProject] = useState(null);

  const toggleProject = (index) => {
    if (visibleProject === index) {
      setVisibleProject(null);
    } else {
      setVisibleProject(index);
    }
  };

  return (
    <div>
      <h1>Projects Managed by Your Team</h1>

      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          status={project.status}
          isVisible={visibleProject === index}
          onToggle={() => toggleProject(index)}
        />
      ))}
    </div>
  );
}

export default ProjectManager;