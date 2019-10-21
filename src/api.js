const host = 'https://randomuser.me/api/';


const getHeader = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

module.exports = {
  people: {
    getPeopleByGender(gender) {
      const url = `${host}/?results=20&gender=${gender}`;
      return fetch(url, getHeader);
    },
  },
};
