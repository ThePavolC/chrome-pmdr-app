var MainApp = function () {

    var actualPercentage = 0,
        taskSize = 25*60,
        timerHolder = $('#timerHolder'),
        timer = $('#timer'),
        timerHolderStyle = {
            gradient: '-webkit-linear-gradient',
            topColor: 'rgb(255, 255, 255)',
            bottomColor: 'rgb(247, 36, 0)',
        },
        duration = moment.duration(taskSize, 'seconds'),
        breakSize = 5,
        longBreakSize = 15;

    function updatePercentage() {
        var step = 100 / taskSize;
        
        actualPercentage += step;
        if (actualPercentage >= 100) {
            actualPercentage = 0;
        }
    }

    function updateBackground(){
        timerHolder.css('background-image',
            timerHolderStyle.gradient + '(' +
            timerHolderStyle.topColor + ' ' +
            actualPercentage + '%,' +
            timerHolderStyle.bottomColor + ' ' +
            actualPercentage + '%' + ')');
    }

    function updateTimer(){
        var minutes = duration.minutes() > 9 ? duration.minutes() : "0" + duration.minutes();
        var seconds = duration.seconds() > 9 ? duration.seconds() : "0" + duration.seconds();
        timer.text(minutes + ':' + seconds);
        duration.subtract(1, 'seconds');
    }

    var myAlarms = Alarms();
    myAlarms.addListener();
    myAlarms.createAlarm();

    return {
        update: function(alarm) {
            updateTimer();
            updatePercentage();
            updateBackground();
        },
    };
}();