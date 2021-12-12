function initListeners() {
    $("#submit").click(function(e) {
        e.preventDefault();
        let firstName = $("#fName").val();
        let lastName = $("#lName").val();
        let email = $("#email").val();
        let password = $("#pw").val();
        console.log("firstName " + firstName);
        console.log("lastName " + lastName);
        console.log("email " + email);
        console.log("password " + password);
    });

    $("#log-submit").click(function(e) {
        e.preventDefault();
        let logEmail = $("#log-email").val();
        let logPassword = $("#log-pw").val();
        console.log("log-in email " + logEmail);
        console.log("log-in password " + logPassword);
    });

    $("#createSubmit").click(function(e) {
        e.preventDefault();
        let favColor = $("#favColor").val();
        let favBook = $("#favBook").val();
        let favMovie = $("#favMovie").val();
        let favSong = $("#favSong").val();
        let favArtist = $("#favArtist").val();
        let favSport = $("#favSport").val();
        let favGame = $("#favGame").val();
        let favWord = $("#favColor").val();
        let favAnimal = $("#favColor").val();
        let favHobby = $("#favColor").val();
        console.log("Favorites: " + favColor + ", " + favBook + ", " + favMovie + ", " + favSong + ", " + favArtist + ", " + favSport + ", " + favGame + ", " + favWord + ", " + favAnimal + ", " + favHobby);
    });

    $("#edit").click(function(e) {
        e.preventDefault();

        let userObj = {
            fName: "MacKenzie",
            lName: "Millard",
            email: "m@m.com",
            password: "password"
        };

        console.log(userObj);
        $("#fName").val(userObj.fName);
        $("#lName").val(userObj.lName);
        $("#email").val(userObj.email);
        $("#pw").val(userObj.password);
    });
}

$(document).ready(function() {
    initListeners();
})