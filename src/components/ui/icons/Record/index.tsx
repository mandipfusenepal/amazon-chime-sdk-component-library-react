// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

const Record: React.FC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M17.073 7C18.136 7 19 7.864 19 8.926v7.021c0 1.062-.864 1.926-1.927 1.926H6.926C5.864 17.873 5 17.01 5 15.947v-7.02C5 7.863 5.864 7 6.926 7zm0 1H6.926C6.415 8 6 8.415 6 8.926v7.021c0 .511.415.926.926.926h10.147c.511 0 .927-.415.927-.926v-7.02c0-.512-.416-.927-.927-.927zm-2.533 2.367c1.142 0 2.07.929 2.07 2.07 0 1.14-.928 2.069-2.07 2.069H9.459c-1.141 0-2.069-.93-2.069-2.07 0-1.14.928-2.07 2.069-2.07 1.142 0 2.07.93 2.07 2.07 0 .393-.116.757-.306 1.07h1.554c-.19-.313-.306-.677-.306-1.07 0-1.14.928-2.07 2.069-2.07zm0 1c-.59 0-1.069.48-1.069 1.07 0 .59.479 1.069 1.069 1.069s1.07-.48 1.07-1.07c0-.59-.48-1.07-1.07-1.07zm-5.081 0c-.59 0-1.069.48-1.069 1.07 0 .59.479 1.069 1.069 1.069s1.07-.48 1.07-1.07c0-.59-.48-1.07-1.07-1.07z" />
  </Svg>
);

Record.displayName = 'Record';

export default Record;
