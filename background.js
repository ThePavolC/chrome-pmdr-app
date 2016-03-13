var globalData = {
    appId: 'pmdrMain',
    taskSize: 25,
    breakSize: 5,
    longBreakSize: 15,
    actualPercentage: 0,

    getTaskSize: function(units){
        return units === 'seconds' ? (this.taskSize * 60) : this.taskSize;
    },

    getBreakkSize: function(units){
        return units === 'seconds' ? (this.breakSize * 60) : this.breakSize;
    },

    getLongBreakSize: function(units){
        return units === 'seconds' ? (this.longBreakSize * 60) : this.longBreakSize;
    },
};

function updatePercentage() {
    var step = 100 / globalData.getTaskSize('seconds');
    
    globalData.actualPercentage += step;
    
    if (globalData.actualPercentage >= 100) {
        globalData.actualPercentage = 0;
    }
}

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