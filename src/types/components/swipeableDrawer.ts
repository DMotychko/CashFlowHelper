import type { ReactNode } from 'react';

export type Action = {
    icon?: ReactNode;
    label: string;
    clickHandler?: () => void;
    type: 'action';
};

export type Divider = { 
    key: React.Key;
    type: 'divider';
};

export type DrawerItem = Action | Divider;