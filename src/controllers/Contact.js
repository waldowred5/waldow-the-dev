import React from 'react';
import { PageHeader } from 'components/atoms/PageHeader';
import { SiteConstructionContent } from
  'components/atoms/SiteConstructionContent';

export const ContactController = () => (
  <div>
    <PageHeader label='Contact' />
    {/* TO:DO Set label based on route*/}
    <SiteConstructionContent />
  </div>
);
