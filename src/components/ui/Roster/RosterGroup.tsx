// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Badge from '../Badge';
import { BaseProps, FocusableProps } from '../Base';
import Flex from '../Flex';
import { StyledGroup, StyledGroupWrapper, StyledTitle } from './Styled';

export interface RosterGroupProps extends BaseProps, FocusableProps {
  /** The title of the roster group. */
  title?: string;
  /** The number of attendees within one roster group. */
  badge?: number;
  children?: React.ReactNode;
}

export const RosterGroup: React.FC<RosterGroupProps> = ({
  tag,
  title,
  badge,
  className,
  children,
  ...rest
}) => {
  return (
    <StyledGroupWrapper as={tag} className={className || ''} {...rest}>
      {title && (
        <Flex alignItems="center" pl=".5rem" mb=".5rem">
          <StyledTitle>{title}</StyledTitle>
          {typeof badge === 'number' && badge > -1 && <Badge value={badge} />}
        </Flex>
      )}
      <StyledGroup>{children}</StyledGroup>
    </StyledGroupWrapper>
  );
};

export default RosterGroup;
