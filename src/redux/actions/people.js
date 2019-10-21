export const types = {
    REQUEST_CHOSEN_PERSON: 'REQUEST_CHOSEN_PERSON',
    RECEIVE_CHOSEN_PERSON: 'RECEIVE_CHOSEN_PERSON',
    REQUEST_PEOPLE_BY_GENDER: 'REQUEST_PEOPLE_BY_GENDER',
    RECEIVE_PEOPLE_BY_GENDER: 'RECEIVE_PEOPLE_BY_GENDER',
  };
  
  export const requestPeopleByGender = (payload) => ({
    type: types.REQUEST_PEOPLE_BY_GENDER,
    payload,
  });
  
  export const receivePeopleByGender = (payload) => ({
    type: types.RECEIVE_PEOPLE_BY_GENDER,
    payload,
  });

  export const requestChosenPerson = (payload) => ({
    type: types.REQUEST_CHOSEN_PERSON,
    payload,
  });

  export const receiveChosenPerson = (payload) => ({
    type: types.RECEIVE_CHOSEN_PERSON,
    payload,
  });
  
  export default requestPeopleByGender;