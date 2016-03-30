var Alarms = function () {
    
    return {

        alarmName : 'changeBackground',
        alarmPeriod : 0.016,
        actualPercentage : 0,
        

        createAlarm: function() {
            chrome.alarms.create(this.alarmName, {periodInMinutes: this.alarmPeriod});
        },

        addListener: function() {
            chrome.alarms.onAlarm.addListener(function(alarm) {
                MainApp.update(alarm);
            });
        },
    };
};