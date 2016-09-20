number_pattern = /^\d{10}$/;
url_pattern = /^http:\/\/(?:\w+\.){1,2}\w+$/;
email_pattern = /^\w{3}@\w{3}\.\w{3}$/;

function validate() {
    var text = $('#pattern').val();
    var help = $('#help');
    var form = $('#form')
    if (text.length == 0) {
        form.removeClass('has-error');
        form.removeClass('has-success');
        help.text('');
    } else if (number_pattern.test(text) || url_pattern.test(text) || email_pattern.test(text)) {
        help.text('Correct Pattern!');
        form.removeClass('has-error');
        form.addClass('has-success');
    } else {
        help.text('Wrong Pattern! Try again...');
        form.removeClass('has-success');
        form.addClass('has-error');
    }
}