import React from 'react';
import { ContactController } from 'controllers/Contact';

const Contact = () => (
  <>
    <div id='contact' style={{ height: '100vh' }}>
      <ContactController />
    </div>
  </>
);

export default Contact;
