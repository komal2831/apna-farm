import { createSelector } from 'reselect';

const selectRaw = (state) => state.pesticide.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

export default {
  selectLoading,
};
