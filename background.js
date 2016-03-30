var globalData = {
    appId: 'pmdrMain'
};

function launch () {
    chrome.app.window.create('index.html', {
        id: globalData.appId,
        bounds: {width: 620, height: 500}
    });
}

function showNotification(storedData) {
}

chrome.app.runtime.onLaunched.addListener(launch);


chrome.notifications.onClicked.addListener(function() {
    launch();
});