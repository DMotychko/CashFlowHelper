import React, { useCallback, useMemo } from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import StoreIcon from '@mui/icons-material/Store';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import WorkIcon from '@mui/icons-material/Work';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from '../../store/hooks';
import { toggleIsFired } from '../../store/isFiredSlice';
import { mapActionToSpeedDialAction } from '../../helpers/renderers';
import type { Action } from '../../types/components/mainButton';

type Props = {onBusinessDrawerOpen: () => void, onApartmentsDrawerOpen: () => void, onCreditDrawerOpen: () => void}

const MenuButton: React.FunctionComponent<Props> = ({onBusinessDrawerOpen, onApartmentsDrawerOpen, onCreditDrawerOpen}) => {
  const isUserFired = useSelector((store) => store.isFired);
  const dispatch = useDispatch();

  const isTouchDevice = useMediaQuery('(hover: none)');

  const toggleIsFiredCallback = useCallback(() => dispatch(toggleIsFired()), [dispatch]);

  const actions = useMemo<Action[]>(() => {
    const toggleIsFiredAction: Partial<Action> = isUserFired
      ? {
          title: 'Працевлаштуватися',
          icon: <WorkIcon />
        }
      : {
          title: 'Звільнитися',
          icon: <WorkOffIcon />
        };

    return [
      {
        title: 'Бізнеси',
        icon: <StoreIcon />,
        isTooltipOpen: isTouchDevice,
        clickHandler: onBusinessDrawerOpen
      },
      {
        title: 'Квартири',
        icon: <ApartmentIcon />,
        isTooltipOpen: isTouchDevice,
        clickHandler: onApartmentsDrawerOpen
      },
      {
        title: 'Банк',
        icon: <AccountBalanceIcon />,
        isTooltipOpen: isTouchDevice,
        clickHandler: onCreditDrawerOpen
      },
      {
        title: "Поповнення в сім'ї",
        icon: <ChildFriendlyIcon />,
        isTooltipOpen: isTouchDevice
      },
      {
        ...toggleIsFiredAction,
        clickHandler: toggleIsFiredCallback,
        isTooltipOpen: isTouchDevice
      }
    ] as Action[];
  }, [isUserFired]);

  return (
      <SpeedDial className="ch-menu-button" ariaLabel="Меню" icon={<SpeedDialIcon />}>
        {actions.map((action) => mapActionToSpeedDialAction(action, { key: action.title }))}
      </SpeedDial>
  );
};

export default MenuButton;
