$(document).ready(function () {
    function vegDebug(msg) {
        console.log("[VEG] " + msg);
    }

    vegDebug('Document ready');

    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    function submitLoginForm() {
        if (autoLogin == "yes") {
            vegDebug('Start auto login');
            vegDebug('User: ' + webuxUser);

            $('input[name="inValue"]').focus().val(webuxUser);
            PWC.Core.Interaction.Selection.selectNextItem();

            vegDebug('Password: ******');

            $('input[name="inValue"]').focus().val(webuxPass);
            PWC.Core.Interaction.Selection.selectNextItem();

            vegDebug("Submitting form");

            PWC.Core.Connection.sendSimpleEvent("01_11", PWC.Core.HmiEventID.Clicked)

            vegDebug('Clear browser history')

            var currentState = history.state;
            history.replaceState(currentState, "", "/");
        }
    }

    function checkLoginState() {
        var loginNameField = $(document).find('[data-tif-id="@LoginName"]');

        vegDebug('Check login state for user: ' + webuxUser);

        if (loginNameField.length) {
            setTimeout(function(){ 
                submitLoginForm();
            }, 1000);
        
            clearInterval(checkLoginStateInterval);
            checkLoginStateInterval = setInterval(function () {
                checkLoginState();
            }, 10000);
        }
    }

    var webuxUser = getUrlParameter('webux-user');
    var webuxPass = getUrlParameter('webux-pass');
    var autoLogin = getUrlParameter('auto-login');

    var checkLoginStateInterval = setInterval(function () {
        checkLoginState();
    }, 100);
});
