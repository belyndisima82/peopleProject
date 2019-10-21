import api from '../api';

export const fetchPeopleByGender = (gender) => (
    api.people.getPeopleByGender(gender)
      .then((response) => response.json())
      .then((rjson) => ({ response: rjson }))
      .catch((error) => ({ error }))
  );

export default fetchPeopleByGender;