$(document).ready(function() {
    $('.showmenu').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
        $('.menu').toggleClass('show');
    });

    $('#trigger1').on('click', function() {
        toggleDropdown('dropdown1', 'trigger1');
    });
    $('#trigger2').on('click', function() {
        toggleDropdown('dropdown2', 'trigger2');
    });
});

function toggleDropdown(dropdownId, triggerId) {
    var dropdown = $('#' + dropdownId);
    var trigger = $('#' + triggerId);
    var arrow = trigger.find(".arrow");

    if (dropdown.is(":visible")) {
        dropdown.hide();
        arrow.text("\u25B6\uFE0F");
    } else {
        dropdown.show();
        arrow.text("\uD83D\uDD3D");
    }
}