import React from 'react';
import { PageHeader } from 'components/atoms/PageHeader';
import { SiteConstructionContent } from
  'components/atoms/SiteConstructionContent';

export const BlogController = () => (
  <div>
    <PageHeader label='Blog' />
    <SiteConstructionContent />
  </div>
);
