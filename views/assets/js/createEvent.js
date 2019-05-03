$("#createEvent").on("click", function(event) {
  // Don't refresh the page!
  // alert("clicked");
  event.preventDefault();
  // console.log("clicked");

  var userName = $("#userName").val();

  var name = $("#name").val();
  var location = $("#location").val();
  var date = $("#date").val();
  var startTime = $("#startTime").val();
  var endTime = $("#endTime").val();
  var author = $("#author").val();
  var payRate = $("#payRate").val();

  console.log(
    userName,
    name,
    date,
    location,
    startTime,
    endTime,
    author,
    payRate
  );
});

$.ajax({
  url: "/api/events",
  method: "POST",
  data: {
    name,
    location,
    startTime,
    date,
    endTime,
    payRate
  },

  success: function(data) {
    console.log("Submission was successful.");
    console.log(data);
  },
  error: function(data) {
    console.log("An error occurred.");
    console.log("Debug>>" + data);
  }
});
