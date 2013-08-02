function openLoginWindow(windowUrl) {
  var width = 620;
  var height = 400;
  var left = screen.width/2 - width/2;
  var top = screen.height/2 - height/2;
  var params = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top + ',menubar=0,resizable=0,scrollbars=0,status=0,toolbar=0';

  return window.open(windowUrl, 'loginWindow', params);
}

function openEditProfileWindow(windowUrl) {
  var width = 620;
  var height = 400;
  var left = screen.width/2 - width/2;
  var top = screen.height/2 - height/2;
  var params = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top + ',menubar=0,resizable=1,scrollbars=1,status=0,toolbar=0';

  return window.open(windowUrl, 'loginWindow', params);
}

function serialize(obj) {
  var str = [];
  for (var p in obj) {
   str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
 }
 return str.join('&');
}


function deserialize(queryString) {
  var obj = {};

  queryString.replace(/\b([^&=]*)=([^&=]*)\b/g, function (m, a, d) {
    if (typeof obj[a] != 'undefined') {
      obj[a] += ',' + d;
    } else {
      obj[a] = d;
    }
  });

  return obj;
}


function displayMessage(message, type, typeText) {
  var output = '<li><span class="label label-' + type + '">' + typeText + '</span> ' + message + '</li>';
  $('#result').prepend(output);
}
