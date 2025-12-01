document.addEventListener('DOMContentLoaded', () => {
    const moreInfo = document.getElementById('more-info');

    if (moreInfo) {
        moreInfo.addEventListener('click', () => {
            window.location.href = 'request-info.html';
        });
    }
});