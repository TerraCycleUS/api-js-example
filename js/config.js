// The Client ID you received from us when you registered your application.
var CLIENT_ID = 'c7a7922a41b6a17d1d15ef326219b08e06593847dff9d0daa2e82a3a894ecaa7';

// The URI of this application
var APP_URI = 'http://api-js-example.terracycle.com';

// The exact same redirect URI as you specified when you registered your application.
var REDIRECT_URI = APP_URI + '/callback.html';

// Authorization server's root URL
var OAUTH_ROOT = 'http://api.terracycle.com/oauth';

// API server's root URL
var API_ROOT = 'http://api.terracycle.com/v2';

// Space separated list of scopes. From the API reference
// collect all scopes for all endpoints that your application
// is going to use, and list them separated with spaces.
var OAUTH_SCOPES = 'public account_read join_brigade leave_brigade';

// The params we need to serialize into a query string
var OAUTH_AUTH_URI = OAUTH_ROOT + '/authorize?' + serialize({
  response_type: 'token',
  scope: OAUTH_SCOPES,
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI
});

// The edit profile URL to send users to edit their profile information
var EDIT_PROFILE_URI = OAUTH_ROOT + '/' + CLIENT_ID + '/account';
