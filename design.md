# SDK Structure

### `TheOneSDK` class

* `constructor`: Initializes the SDK
    * params:
        * `apiKey {string}`: Authorization token to make calls
* `getMovies`
    * params:
        * `options {MovieOptions}`
            * `limit {number}`: maximum amount of movie the server will
              respond with
            * `page {number}`: current page number within the pagination.
            * `offset {number}`: current offset within the pagination.
            * `sort {string}`: item key that the list will be sort for
            * `sortBy {asc | desc}`: sort by ascending or descending order
    * errors:
        * `UnauthorizedError`: throws when the API key is invalid/expired
* `getMovie`
    * params:
        * `id {string}`
    * errors:
        * `NotFoundError`: throws no movie is found with `id`
        * `UnauthorizedError`: throws when the API key is invalid/expired
* `getMovieQuotes`
    * params:
        * `id {string}`
        * `options {MovieOptions}`
            * `limit {number}`: maximum amount of movie quote the server
              will respond with
            * `page {number}`: current page number within the pagination.
            * `offset {number}`: current offset within the pagination.
            * `sort {string}`: item key that the list will be sort for
            * `sortBy {asc | desc}`: sort by ascending or descending order
    * errors:
        * `UnauthorizedError`: throws when the API key is invalid/expired
