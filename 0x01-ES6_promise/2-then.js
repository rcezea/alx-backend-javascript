export default function handleResponseFromAPI(promise) {
  return promise
      .then(() => {console.log("Got a response from the API")})
      .catch(Error)
      .then(() => ({status: 200, body: 'Success',}))
}
