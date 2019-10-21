import { types } from '../actions/people';
import {
  Map as ImmutableMap,
  fromJS,
} from 'immutable';
  
  export default (state = ImmutableMap(), action) => {
    switch (action.type) {
      case types.RECEIVE_PEOPLE_BY_GENDER:
      return state.set('peopleByGender', ImmutableMap().withMutations((innerMap) => {
        Object.keys(action.payload).forEach((key) => {
          const value = action.payload[key];
          innerMap.set(action.payload[key].login.uuid, fromJS(value));
        });
      }));
      case types.RECEIVE_CHOSEN_PERSON:
      return state.set('person', fromJS(action.payload));
      default:
        return state;
    }
  };