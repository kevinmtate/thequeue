const authUrl = "https://accounts.spotify.com/authorize?client_id=c0833919c484477bb8a186c2a03cd461&redirect_uri=http:%2F%2Fhttps://kevinmtate.github.io/thequeue/%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123";

const requestOptions = {
  mode: "no-cors"
};

fetch(authUrl, requestOptions)
  .then(res => res.text())
  .then(data => console.log(data))
  .catch(error => console.error(error));
