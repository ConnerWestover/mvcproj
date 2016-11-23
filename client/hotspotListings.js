$(document).ready(function() {

    const handleError = (message) => {
      window.alert(message);
    }

    const sendAjax = (action, data) => {
        $.ajax({
            cache: false,
            type: "GET",
            url: action,
            data: data,
            dataType: "json",
            success: (result, status, xhr) => {

                window.location = result.redirect;
            },
            error: (xhr, status, error) => {
                handleError(messageObj.error);
                const messageObj = JSON.parse(xhr.responseText);
            }
        });
    }
});
