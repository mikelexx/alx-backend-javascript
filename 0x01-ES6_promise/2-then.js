export default function handleResponseFromAPI (promise) {
  promise.then((value) => ({
    status: 200,
    body: 'success'
  }))
    .catch(error => new Error('vdvs'))
    .finally(() => {
      console.log('Got a response from the API');
    });
}
