import random from 'lodash/random';
import uniqueId from 'lodash/uniqueId';
import { selectUserIncome } from './selectors';
import { setupStore } from './store';
import type { StoreState } from './store';
import type { PreloadedState } from '@reduxjs/toolkit';

test('User income should be 0 when initial store state passed', () => {
  const store = setupStore();

  expect(selectUserIncome(store.getState())).toBe(0);
});

test('User income should be calculated correctly', () => {
  const state: PreloadedState<StoreState> = {
    job: { title: 'Job', income: 100 },
    expenses: {
      ids: [1, 2],
      entities: {
        1: {
          id: uniqueId(),
          title: random().toString(),
          outcome: 120
        },
        2: {
          id: uniqueId(),
          title: random().toString(),
          outcome: 120
        }
      }
    },
    children: {
      childrenCount: 2,
      expenseOnChild: 200
    },
    smallBusinesses: {
      ids: [1, 2],
      entities: {
        1: {
          id: uniqueId(),
          income: 200
        },
        2: {
          id: uniqueId(),
          income: 400
        }
      }
    },
    bigBusinesses: {
      ids: [1, 2],
      entities: {
        1: {
          id: uniqueId(),
          income: 2500
        },
        2: {
          id: uniqueId(),
          income: 5000
        }
      }
    },
    apartments: {
      ids: [1, 2],
      entities: {
        1: {
          id: uniqueId(),
          income: 750,
          type: 'K1'
        },
        2: {
          id: uniqueId(),
          income: 1200,
          type: 'K2'
        }
      }
    }
  };
  const store = setupStore(state);
  const expectedIncome = 9510;

  expect(selectUserIncome(store.getState())).toBe(expectedIncome);
});

test('User income should be calculated correctly (user is fired)', () => {
  const state: PreloadedState<StoreState> = {
    job: { title: 'Job', income: 100 },
    expenses: {
      ids: [1, 2],
      entities: {
        1: {
          id: uniqueId(),
          title: random().toString(),
          outcome: 120
        },
        2: {
          id: uniqueId(),
          title: random().toString(),
          outcome: 120
        }
      }
    },
    children: {
      childrenCount: 2,
      expenseOnChild: 200
    },
    smallBusinesses: {
      ids: [1, 2],
      entities: {
        1: {
          id: uniqueId(),
          income: 200
        },
        2: {
          id: uniqueId(),
          income: 400
        }
      }
    },
    bigBusinesses: {
      ids: [1, 2],
      entities: {
        1: {
          id: uniqueId(),
          income: 2500
        },
        2: {
          id: uniqueId(),
          income: 5000
        }
      }
    },
    apartments: {
      ids: [1, 2],
      entities: {
        1: {
          id: uniqueId(),
          income: 750,
          type: 'K1'
        },
        2: {
          id: uniqueId(),
          income: 1200,
          type: 'K2'
        }
      }
    },
    isFired: true
  };
  const store = setupStore(state);
  const expectedIncome = 9410;

  expect(selectUserIncome(store.getState())).toBe(expectedIncome);
});
