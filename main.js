$(document).ready(function() {


//1)
$('.btn-info').click(function(){
  var value = $('#textInput').val();
  $( "<h3>" + value + "</h3>" ).insertAfter( ".btn-info" );

  console.log(value)

});


//2)

$('.chex :checkbox').click(function(){
  console.log("click")
  $('h2:nth-of-type(2)').toggleClass('hidden')
}); // not gettting it


//3)
$('.table-striped').append('<tr><td>Terrell</td><td>18</td><td>Content</td></tr>');


//4)
$('.table-striped tbody').children().each(function (){
  var hungerLevel = $(this).children('td:nth-child(3)');

  if (hungerLevel.text() === "Content"){
    $(hungerLevel).css({"color": "green"});
  }else {
    $(hungerLevel).css({"color": "red"});
  }

});



//5)
$('.btn-warning').click(function (){
  $('.table-striped tbody').children().each(function (){
    var catWeight = $(this).children('td:nth-child(2)');
    if($(catWeight).text() < 10){
      $(this).hide(300);
    }
  });
});

//6)

$('.btn-success').click(function (){
  $('tbody').children().each(function(){
  var name = $(this).children('td:nth-child(1)');
  $(name).text($(name).text().toUpperCase() + "!"); // i dont under stand this line -- how does it select and change the cat to upper case??


  });
});

// //Question #6
//     $(".btn-success").click(function () {
//         $("tbody").children().each(function () {
//             var name = $(this).children("td:nth-child(1)");
//             $(name).text($(name).text().toUpperCase() + "!!!");
//         })
//     })
//

//7)
$('.btn-primary').click(function(){
  console.log("click")
  $('.table-striped').toggle(500);
})

//8)
$('.disableUs:disabled').val("this is disabled :P")














});// end of all
