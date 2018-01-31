const COPYRIGHT = {
    siteName: 'Bootstrap 4 Extended',
    author: 'Davina Leong',
    pageLink: '<a href="copyright.html">Copyright</a>'
}

$copyright = null;

$(document).ready(() => {
    $copyright = $('#b4e-copyright');

    setInterval(() => {
        let now = new Date();
        updateCopyright(now.getFullYear());
    });
});

function updateCopyright(year='2018') {
    $copyright.html(
        COPYRIGHT.siteName + ' &copy; ' + COPYRIGHT.author + ' ' + year + '. ' + COPYRIGHT.pageLink
    );
}