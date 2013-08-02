// When the document is loaded...
$(function() {
  // ...check if we stored the Acces Token in a cookie previously.
  var accessToken = $.cookie('_tc_access_token');

  // If so, do a global jQuery.ajaxSetup() to ensure we send the Access Token
  // along with every request.
  if (accessToken) {
    $.ajaxSetup({
      data: {
        access_token: accessToken
      }
    });
  }
});


// Opens a login window with the passed scope. If no scope passed, it'll default
// to `public`.
$('#login').click(function() {
  // Set up an `onmessage` event handler to listen to messages from the login
  // window.
  $(window).on('message', receivedAuthResult);

  // Open the auth window with the provided params.
  openLoginWindow(OAUTH_AUTH_URI);
});


$('#edit-profile').click(function() {
  // Set up an `onmessage` event handler to listen to messages from the login
  // window.
  // $(window).on('message', receivedAuthResult);

  // Open the auth window with the provided params.
  openEditProfileWindow(EDIT_PROFILE_URI);
});


function receivedAuthResult(event) {
  if (event.originalEvent.origin !== APP_URI) {
    return;
  }

  // Tear down the event listener
  $(window).off('message', receivedAuthResult);

  // Parse data from the calback window's query string
  var data = deserialize(event.originalEvent.data);

  // If it didn't succeed...
  if (data.error) {
    // ...clear the cookie.
    clearCredentials();

    // For the sake of this demo, we also show a message.
    var message = 'Access Denied: ' + data.error_description.replace(/\+/g, ' ');
    displayMessage(message, 'important', 'Error');

  } else {
    // If succeeded, store the credentials for the subsequent requests
    setCredentials(data.access_token);

    // Display a message, because we still that chatty.
    displayMessage('Got Access Token: ' + data.access_token, 'success', 'Success');
  }
}


function setCredentials(token) {
  // We store the Access Token in a cookie...
  $.cookie('_tc_access_token', token);

  // ...and do a `jQuery.ajaxSetup()` as well. This ensures every request sent
  // out will contain the `access_token` parameter.
  $.ajaxSetup({
    data: {
      access_token: token
    }
  });
}


// The way logout is done is simply deleting the cookie and removing the
// `access_token` param from the global AJAX handler.
$('#logout').click(function() {
  clearCredentials();
  displayMessage('Logged out', 'info', 'Info');
});


function clearCredentials() {
  // Remove the credentials stored in the browser
  $.removeCookie('_tc_access_token');
  $.ajaxSetup({
    data: {
      access_token: null
    }
  });
}
