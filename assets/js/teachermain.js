function inputInsideOtpInput(el) {
    if (el.value.length > 1){
        el.value = el.value[el.value.length - 1];
    }
    try {
        if(el.value == null || el.value == ""){
            this.foucusOnInput(el.previousElementSibling);
        }else {
            this.foucusOnInput(el.nextElementSibling);
        }
    }catch (e) {
        console.log(e);
    }
}

function foucusOnInput(ele){
   ele.focus();
   let val = ele.value;
   ele.value = "";
   // ele.value = val;
   setTimeout(()=>{
       ele.value = val;
   })
}

var mini = true;

function toggleSidebar() {
    if (mini) {
        console.log("opening sidebar");
        document.getElementById("mySidebar").style.width = "200px";
        this.mini = false;
    } else {
        console.log("closing sidebar");
        document.getElementById("mySidebar").style.width = "42px";
        this.mini = true;
    }
}


$(function() {
    $('#date-carousel').carousel({
        interval: false
    });

    $("#date-carousel").swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll: "vertical" 
    });

    $(document).on('click', '#addSubjectDone', function() {
        const subject = $('#addSubjectInput').val();
        console.log('yes', subject);
        if (subject && subject.length) {
            $('.subject-group > div').append(`
                <label class="divselect">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                    <span class="alphabet">${subject}</span>
                </label>
            `);   
        }
        $('#addSubjectInput').val('');
    });

    $(document).on('click', '#button-addon2', function() {
        $('#addSubjectInput').val('');
    });

    $( "#date" ).datepicker({changeMonth: true, changeYear: true, dateFormat: 'mm/dd/yy', maxDate: '+1Y', yearRange: "-100:+0",});
    $('#starttime').timepicker({});
    $('#endtime').timepicker({});

    function moveSlider(selected) {
        const offsetleft = selected.parent().offset().left;
        const width = selected.parent().width();
        console.log(offsetleft, width, selected);
        selected.closest('.nav-tabs').find('.slider .bar').width(width);
        selected.closest('.nav-tabs').find('.slider .bar').offset({left: offsetleft});
    }

    $('.tab a.nav-link.active').each(function() {
        moveSlider($(this));
    });

    $('.tab a.nav-link').click(function() {
        moveSlider($(this));
    });

    $("#menu-close").click(function(e) {
        e.preventDefault();
        $('#overlay').fadeOut('slow');
        $("#sidebar-wrapper").toggleClass("active");
    });
    $(".menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        $('#overlay').fadeToggle( "slow", "swing" );
    });
    $(".subject-toggle").click(function(e) {
        e.preventDefault();
        $("#subject-wrapper").toggleClass("active");
    });
    $('#overlay').click(function() {
        $('#overlay').fadeOut('slow');
        $("#sidebar-wrapper").toggleClass("active");
    });
});

// Tooltip

$('button').tooltip({
    trigger: 'click',
    placement: 'bottom'
});

function setTooltip(btn, message) {
    $(btn).tooltip('hide')
        .attr('data-original-title', message)
        .tooltip('show');
}

function hideTooltip(btn) {
    setTimeout(function() {
        $(btn).tooltip('hide');
    }, 1000);
}

// Clipboard

var clipboard = new Clipboard('button.js-copy-trigger');

clipboard.on('success', function(e) {
    setTooltip(e.trigger, 'Copied!');
    hideTooltip(e.trigger);
});

clipboard.on('error', function(e) {
    setTooltip(e.trigger, 'Failed!');
    hideTooltip(e.trigger);
});