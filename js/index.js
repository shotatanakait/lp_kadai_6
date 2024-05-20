$(function() {
    function adjustTimeScheduleDisplay() {
        if ($(window).width() <= 480) {
            $('.timeScheduleItemMoreInfo').parent().find('.timeScheduleItem').filter(function() {
                return parseInt($(this).attr('class').match(/itemIndex-(\d+)/)[1]) >= 3;
            }).hide();

            $('.timeScheduleItemMoreInfo').show();
            $('.itemIndex-2').addClass('active');
        } else {
            $('.timeScheduleItemMoreInfo').parent().find('.timeScheduleItem').filter(function() {
                return parseInt($(this).attr('class').match(/itemIndex-(\d+)/)[1]) >= 3;
            }).show();

            $('.timeScheduleItemMoreInfo').hide();
            $('.itemIndex-2').removeClass('active');
        }
    }

    $(window).resize(adjustTimeScheduleDisplay);
    adjustTimeScheduleDisplay(); // 初回ロード時にも発火

    // READ MORE CLICK EVENT
    $('.timeScheduleItemMoreInfoText').on('click', function() {
        $('.timeScheduleItemMoreInfo').hide();
        $('.itemIndex-2').removeClass('active');

        $('.timeScheduleItemMoreInfo').parent().find('.timeScheduleItem').filter(function() {
            return parseInt($(this).attr('class').match(/itemIndex-(\d+)/)[1]) >= 3;
        }).show();
    });
});
