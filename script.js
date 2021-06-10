let number= 0;
$("img").hide();
$("button").click(function() {
let input= $(".age").val();
    let inputs= $(".personality").val();
    number = number + 1;
       $(".counter").text("This quiz has been taken " + number + " times ");
    $("body").append("<p>You are " + input + " and " + inputs + " person" +"</p>");
});