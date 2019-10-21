import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { receivePeopleByGender, receiveChosenPerson, types } from '../actions/people';
import { fetchPeopleByGender } from '../../data/people';


function * handleRequestPeopleByName(action) {
  const gender = action.payload
  const { response, error } = yield call(fetchPeopleByGender, gender);
  if (response && !error) {
    return yield put(receivePeopleByGender(response.results));
  } else {
    console.log('sagas', error)
  }
  return undefined;
}

function * handleRequestPerson(action) {
  const person = action.payload;
  return yield put(receiveChosenPerson(person));
}


function * watchPeopleActions() {
  yield takeEvery(
    types.REQUEST_PEOPLE_BY_GENDER,
    handleRequestPeopleByName,
  );
  yield takeEvery(
    types.REQUEST_CHOSEN_PERSON,
    handleRequestPerson,
  );
}

export default [
  fork(watchPeopleActions),
];
