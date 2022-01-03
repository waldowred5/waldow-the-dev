import React from 'react';
import { BlogController } from 'controllers/Blog';

const Blog = () => (
  <>
    <div id='blog' style={{ height: '100vh' }}>
      <BlogController />
    </div>
  </>
);

export default Blog;
