import React from 'react';
import StyledTwoColumns, {
  ColumnDivider,
  ColumnWrapper,
  PrimaryColumn,
  SecondaryColumn,
} from './styles';
import PropTypes from 'prop-types';

// export const TwoColumns = () => {
export const TwoColumns = ({ children }) => {
  return (
    <StyledTwoColumns>
      <ColumnWrapper>
        {/* eslint-disable-next-line max-len */}
        {/* <PrimaryColumn><div style={{ background: 'blue', height: '380px', width: '285px' }} /></PrimaryColumn>*/}
        <PrimaryColumn>{children[0]}</PrimaryColumn>
        <ColumnDivider />
        {/* eslint-disable-next-line max-len */}
        {/* <SecondaryColumn><div style={{ background: 'red', height: '380px', width: '285px' }} /></SecondaryColumn>*/}
        <SecondaryColumn>{children[1]}</SecondaryColumn>
      </ColumnWrapper>
    </StyledTwoColumns>
  );
};

TwoColumns.propTypes = {
  children: PropTypes.array,
};
