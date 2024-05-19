$(function() {
    function adjustTimeScheduleDisplay() {
        if ($(window).width() <= 480) {
            $('.timeScheduleItemMoreInfo').parent().find('.timeScheduleItem').filter(function() {
                return parseInt($(this).attr('class').match(/itemIndex-(\d+)/)[1]) >= 3;
            }).hide();

            $('.timeScheduleItemMoreInfo').show();
        } else {
            $('.timeScheduleItemMoreInfo').parent().find('.timeScheduleItem').filter(function() {
                return parseInt($(this).attr('class').match(/itemIndex-(\d+)/)[1]) >= 3;
            }).show();

            $('.timeScheduleItemMoreInfo').hide();
        }
    }

    $(window).resize(adjustTimeScheduleDisplay);
    adjustTimeScheduleDisplay(); // 初回ロード時にも発火

    // READ MORE CLICK EVENT
    $('.timeScheduleItemMoreInfoText').on('click', function() {
        $('.timeScheduleItemMoreInfo').hide();

        $('.timeScheduleItemMoreInfo').parent().find('.timeScheduleItem').filter(function() {
            return parseInt($(this).attr('class').match(/itemIndex-(\d+)/)[1]) >= 3;
        }).show();
    });
});
