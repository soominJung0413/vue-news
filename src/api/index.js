import axios from 'axios';

// HTTP Request, Response 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}


//Promise 로 리턴해 줘야 후속 처리 가능
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}user/${userName}.json`)
}

function fetchAskItem(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchAskItem
}