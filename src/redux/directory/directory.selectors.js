import { createSelector } from 'reselect';

const selectDirectory = state => state.directories;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directories => directories.sections
)