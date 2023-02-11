const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjhmZTRmMWRlLWQ1OTMtNDZjYy1hZDliLWYxM2UwNzViZTNmYy0xNjc2MTMwNjUxNDExIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMjA0MWQ5YmUtYzkzMC00NjdlLWI1ZjYtODgzYmY0NGIzOTE1IiwidHlwZSI6InQifQ.KA77KW5tf8MhqUWkd9lo0ugvUl8LAsvqr542-2LwIkY'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
