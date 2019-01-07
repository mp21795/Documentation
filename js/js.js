function getMetadata() {
    return $("meta[name='metaname']").attr('content');
}

function getRandomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) {
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    }
    return result;
}

function getParameterByName(name, url) {
    var thisUrl = url || window.location.href;
    name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(thisUrl);
    return results ? results[2] ? decodeURIComponent(results[2].replace(/\+/g, " ")) : '' : null;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayDate(value, locale) {
    return new Date(value).toLocaleDateString(locale || (navigator.language || navigator.userLanguage));
}

function displayDateText(value, locale) {
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(value).toLocaleDateString(locale || (navigator.language || navigator.userLanguage), options);
}

function objectSort(object, key, type, order) {
    function sortByKey(a, b) {
      var x = "string" == type ? a[key] : parseFloat(a[key].replace(',', '.'));
      var y = "string" == type ? b[key] : parseFloat(b[key].replace(',', '.'));
      return "ASC" == order ? x < y ? -1 : x > y ? 1 : 0 : x > y ? -1 : x < y ? 1 : 0;
    }
    object.sort(sortByKey);
}

//COOKIE
function createCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + 24 * days * 60 * 60 * 1e3);
      expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      for (;' ' == c.charAt(0); ) {
        c = c.substring(1, c.length);
      }
      if (0 == c.indexOf(nameEQ)) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}