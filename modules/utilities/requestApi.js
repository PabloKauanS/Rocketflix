import * as API from "../../api/APIconfig.js";

export default async function requestApi() {
  try {
    const str_api = `${API.API_URL}${randomNumber()}${API.API_LANGUAGE}`;
    const request = await fetch(str_api, API.API_OPTIONS);
    const request_json = await request.json();
    return request_json;
  } catch (err) {
    console.log(err);
  }
}
function randomNumber() {
  return Math.floor(Math.random() * (5189 - 0 + 1)) + 0;
}
