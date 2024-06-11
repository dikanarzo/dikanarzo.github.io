function sendtowa(event) {
    event.preventDefault(); // This line prevents the default form submission behavior
    let number = "+6287884069386";
    let name = $("#form_name").val();
    let email = $("#form_email").val();
    let subject = $("#form_sub").val();
    let text = $("#form_message").val();
    var url = "https://wa.me/" + number + "?text=" +
        "Name: " + name + "%0a" +
        "Email: " + email + "%0a" +
        subject + "%0a%0a" +
        text;

    window.open(url, "_blank").focus();
}