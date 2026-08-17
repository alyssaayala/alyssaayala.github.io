$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: false,
        filter: function() {
            return $(this).is(":visible");
        }
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });

});
