import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import type { DrawerItem, Action, Divider as DividerType } from '../../types/components/swipeableDrawer';

type Props = {
  isOpen: boolean, 
  onClose: () => void, 
  onOpen: () => void,
  items: DrawerItem[]
};

type RenderersMap = {
  [key in DrawerItem['type']]: (item: DrawerItem) => React.ReactNode
};

const toggleDrawer =
    (callback: () => void) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      callback();
    };

const renderDivider = (item: DrawerItem) => {
  const { key } = item as DividerType;
  return <Divider key={key} />;
};

const renderAction = (item: DrawerItem) => {
  const { icon, label, clickHandler } = item as Action;
  return (
    <ListItem key={label} disablePadding>
      <ListItemButton onClick={clickHandler}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};

const renderersMap: RenderersMap = {
  action: renderAction,
  divider: renderDivider
};

const CustomSwipeableDrawer: React.FunctionComponent<Props> = ({isOpen, onClose, onOpen, items}) => {


  return (
      <SwipeableDrawer
        anchor={"bottom"}
        open={isOpen}
        onClose={toggleDrawer(onClose)}
        onOpen={toggleDrawer(onOpen)}
      >
        <Box
          sx={{ width:'auto' }}
          role="presentation"
          onClick={toggleDrawer(onClose)}
          onKeyDown={toggleDrawer(onClose)}
        >
          <List>
            {items.map(item => renderersMap[item.type](item))}
          </List>
        </Box>
      </SwipeableDrawer>
  );
}

export default CustomSwipeableDrawer;