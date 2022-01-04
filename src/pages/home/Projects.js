import React from 'react';
import { ProjectsController } from 'controllers/Projects';

const Projects = () => (
  <>
    <div id='projects' style={{ height: '100vh' }}>
      <ProjectsController />
    </div>
  </>
);

export default Projects;
