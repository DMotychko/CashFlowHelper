import React from 'react';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import type { Action } from '../types/components/mainButton';
import type { SpeedDialActionProps } from '@mui/material';

export const mapActionToSpeedDialAction = (action: Action, additionalProps: Partial<SpeedDialActionProps & React.Attributes> = {}) => (
  <SpeedDialAction
    {...additionalProps}
    tooltipOpen={action.isTooltipOpen}
    tooltipTitle={action.title}
    icon={action.icon}
    onClick={action.clickHandler}
  />
);
