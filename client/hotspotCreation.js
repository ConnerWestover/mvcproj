$(document).ready(function() {

    const handleError = (message) => {
      window.alert(message);
    }

    const sendAjax = (action, data) => {
        $.ajax({
            cache: false,
            type: "POST",
            url: action,
            data: data,
            dataType: "json",
            success: (result, status, xhr) => {
                window.location = result.redirect;
            },
            error: (xhr, status, error) => {
                const messageObj = JSON.parse(xhr.responseText);
                handleError(messageObj.error);
            }
        });
    }

    $("#makeHotspotSubmit").on("click", (e) => {
        e.preventDefault();
      
        if($("#hotspotName").val() == '' || $("#hotspotDate").val() == '' || $("#hotspotDescription").val() == '' || $("#hotspotCategory").val() == '') {
            handleError("Burned! All fields are required");
            return false;
        }

        sendAjax($("#hotspotForm").attr("action"), $("#hotspotForm").serialize());

        return false;
    });

});
