import { Map as ImmutableMap } from 'immutable';

export const getPeopleByGender = (state) => state.people.get('peopleByGender', ImmutableMap());
export const selectSpecificPerson = (state) => state.people.get('person', ImmutableMap());
export default getPeopleByGender;
