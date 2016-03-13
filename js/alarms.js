(function () {
    'use strict';
    var alarmName = 'changeBackground',
        timerHolder = $('#timerHolder'),
        actualPercentage = 0,
        alarmPeriod = 0.016,
        timerHolderStyle = {
            gradient: '-webkit-linear-gradient',
            topColor: 'rgb(255, 255, 255)',
            bottomColor: 'rgb(247, 36, 0)',
        };

    function createAlarm() {
        chrome.alarms.create(alarmName, {
            periodInMinutes: alarmPeriod});
    }

    chrome.alarms.onAlarm.addListener(function( alarm ) {
        chrome.runtime.getBackgroundPage(function(backgroundPage) {
            backgroundPage.updatePercentage();
            actualPercentage = backgroundPage.globalData.actualPercentage || 0;
        });

        timerHolder.css('background-image',
            timerHolderStyle.gradient + '(' +
            timerHolderStyle.topColor + ' ' +
            actualPercentage + '%,' +
            timerHolderStyle.bottomColor + ' ' +
            actualPercentage + '%' + ')');
    });

})();