import { createSelector } from 'reselect';

const usersItems = state => state.shop.items;


export const hasMoreUserSelectors = createSelector(
    usersItems,
    items => items.reduce((acc, item) => acc + item.value, 0)
  )




