import * as API from "./APIconfig.js";
export default async function requestApi() {
  try {
    let request;
    request = await fetch(
      `${API.API_URL}${randomNumber()}${API.API_LANGUAGE}`,
      API.API_OPTIONS
    );
    return await request.json();
  } catch (err) {
    console.log(`Ocorreu um erro ${err}`);
  }
}
function randomNumber() {
  return Math.floor(Math.random() * (5189 - 0 + 1)) + 0;
}
