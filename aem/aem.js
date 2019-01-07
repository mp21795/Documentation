function getPageUrl() {
    return -1 === location.href.indexOf("/content/project") ? "/content/project" + Granite.HTTP.getPath() + '/' : Granite.HTTP.getPath() + '/';
}

function getBaseUrl() {
    var regex = -1 === document.location.pathname.indexOf('/content') ? new RegExp(/\/([a-z]{2})\/([a-z]{2})/) : new RegExp(/(.*)([a-z]{7})\/([a-z]{5})\/([a-z]+)\/([a-z]{2})/), regexResult = regex.exec(document.location.pathname);
    return regexResult ? regexResult[0] : '';
}