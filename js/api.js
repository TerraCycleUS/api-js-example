// Account: http://developers.terracycle.com/devportal/docs/account#account
//
// GET /account
//
$('#fetch-profile').click(function() {
  $.get(API_ROOT + '/account')

    .success(function(response) {
      var account = response.account,
          stats = account.stats,
          message = '';

      message += '<ul>',
      message += '<li>Email: ' + account.email + '</li>';
      message += '<li>Available Points: ' + stats.available_points + '</li>';
      message += '<li>Units Collected: ' + stats.units_collected + '</li>';
      message += '<li>Points Earned: ' + stats.points_earned + '</li>';
      message += '</ul>';

      displayMessage(message, 'success', 'Success');
    })

    .fail(function(jqXHR, type, typeText) {
      displayMessage('Failed to fetch profile: ' + jqXHR.status + ' ' + typeText, 'important', 'Error');
    });
});


// Brigades: http://developers.terracycle.com/devportal/docs/brigades#brigades
//
// GET /brigades
//
$('#fetch-brigades').on('click', function() {
  $.get(API_ROOT + '/brigades')

    .success(function(response) {
      var output = '<ul>',
          brigades = response.brigades,
          len, i, brigade;

      for (i=0, len=brigades.length; i<len; i++) {
        brigade = brigades[i];

        output += '<li>';
        output += 'Brigade #' + brigade.id + ', joined: ' + brigade.joined;
        output += ' <button data-brigade-id="' + brigade.id + '" data-action="join-brigade" class="btn btn-mini btn-success">Join</button>';
        output += ' <button data-brigade-id="' + brigade.id + '" data-action="leave-brigade" class="btn btn-mini btn-danger">Leave</button>';
        output += '</li>';
      }

      output += '</ul>';

      displayMessage(output, 'success', 'Success');
    })

    .fail(function(jqXHR, type, typeText) {
      displayMessage('Failed to fetch Brigades: ' + jqXHR.status + ' ' + typeText, 'important', 'Error');
    });
});


// Join Brigade: http://developers.terracycle.com/devportal/docs/brigades#join-brigade
//
// POST /brigades/:id/join
//
$('body').on('click', '[data-action="join-brigade"]', function() {
  var brigadeId = $(this).attr('data-brigade-id'),
      url = API_ROOT + '/brigades/' + brigadeId + '/join';

  $.post(url)

    .success(function(response) {
      displayMessage('Successfully joined Brigade: ' + JSON.stringify(response), 'success', 'Success');
    })

    .fail(function(jqXHR, type, typeText) {
      console.log(jqXHR);
      displayMessage('Failed to join Brigade: ' + jqXHR.status + ' ' + typeText + ' ' + jqXHR.responseText, 'important', 'Error');
    });
});


// Leave Brigade: http://developers.terracycle.com/devportal/docs/brigades#leave-brigade
//
// DELETE /brigades/:id/leave
//
$('body').on('click', '[data-action="leave-brigade"]', function() {
  var brigadeId = $(this).attr('data-brigade-id'),
      url = API_ROOT + '/brigades/' + brigadeId + '/leave';

  $.ajax({
    url: url,
    type: 'DELETE'
  })

    .success(function(response) {
      displayMessage('Successfully left Brigade', 'success', 'Success');
    })

    .fail(function(jqXHR, type, typeText) {
      displayMessage('Failed to leave Brigade: ' + jqXHR.status + ' ' + typeText, 'important', 'Error');
    });
});
