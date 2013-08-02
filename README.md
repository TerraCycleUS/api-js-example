# TerraCycle API JavaScript Example

This application shows how to use the TerraCycle API using only JavaScript
in a browser.


### Configuration

Edit js/config.js to match your environment.


### Running

The easiest way to run the app is by putting it into a webserver's public folder.  
For example, if you have Python installed on your computer, running
`python -m SimpleHTTPServer` from the app's folder will make it available on
[http://localhost:8000/](http://localhost:8000/)


### Files

#### `index.html`

Main page.

#### `callback.html`

Our OAuth server redirects to this page after user authentication. It's sole
purpose is to send the query string parameter it received from the OAuth page
to our app using the `postMessage()` browser function.

#### `js/config.js`

This file holds the config variables.

#### `js/auth.js`

This file contains all you need to authenticate the user using the
[OAuth2 Implicit Grant Flow](http://tools.ietf.org/html/draft-ietf-oauth-v2-22#section-4.2).

#### `js/api.js`

Contains basic API calls to demonstrate successful or failed responses.
Examples are:

* Getting the user profile
* Getting the list of brigades
* Joining a brigade
* Leaving a brigade


### Running in production

Using the API in production may require additional tweeks regarding to
cross-domain communication in older browsers. One of the easiest solutions is
to set up an API gateway on your server.

*It's also worth noting that the concepts used in this example does not reflect
the author's point of view about JavaScript development in general, therefore
it is strongly advised to choose a modern framework like [Ember.js](http://emberjs.com/)
or [Angular.js](http://angularjs.org/) to avoid a visit to a loony bin...*
