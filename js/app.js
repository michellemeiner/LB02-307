function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var bzz = document.Form.bzz.value;
    var review = document.Form.review.value;
    var GitHub = document.Form.GitHub.value;


    var nameErr = bzzErr = GitHubErr = emailErr =  mobileErr =  reviewErr = true;

// Name
    if(name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }

// URL
    if(GitHub == "") {
        printError("GitHubErr", "Please enter your GitHub URL");
        var elem = document.getElementById("GitHub");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if(regex.test(GitHub) === false) {
            printError("GitHubErr", "Please enter a valid GitHub URL");
            var elem = document.getElementById("GitHub");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("GitHubErr", "");
            GitHubtErr = false;
            var elem = document.getElementById("GitHub");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }


    if(email == "") {
        printError("emailErr", "Please enter your email address");
        var elem = document.getElementById("email");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {

        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
            var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }


    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        var elem = document.getElementById("mobile");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[1-10]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }


    if(bzz == "Select") {
        printError("bzzErr", "Please select your Class");
        var elem = document.getElementById("bzz");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("bzzErr", "");
        bzzErr = false;
        var elem = document.getElementById("bzz");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }


    if(review == "") {
        printError("reviewErr", "Please select your review");
        var elem = document.getElementById("review");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("reviewErr", "");
        reviewErr = false;
        var elem = document.getElementById("review");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }


    if((nameErr ||  bzzErr || GitHubErr|| emailErr || mobileErr || reviewErr) == true) {
        return false;
    }
};