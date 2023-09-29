$.ajax({
  url: "https://dog.ceo/api/breeds/list/all",
  type: "GET",
  success: function (response) {
    if (response.status == "success") {
      let jsonResponse = response.message;
      for (let key in jsonResponse) {
        let breedName = key;
        if (jsonResponse[key].length > 0) {
          for (let i = 0; i < jsonResponse[key].length; i++) {
            let dogName = jsonResponse[key][i];
            $("#dog-select").append(
              `<option value="${breedName + "/" + dogName}">${
                dogName + " " + breedName
              }</option>`
            );
            console.log("Api request success");
          }
        } else {
          $("#dog-select").append(
            `<option value="${breedName}">${breedName}</option>`
          );
        }
      }
    }
  },
  error: function () {
    console.log("Api request error");
  },
  complete: function () {
    console.log("API request completed");
    $("#load").hide();
    $("#container").show();
  },
});
$("#fetchImage").click(getDogImage);
function getDogImage() {
  let dogName = $("#dog-select").val();
  $("#load").show();
  $("#container").hide();
  $.ajax({
    url: "https://dog.ceo/api/breed/" + dogName + "/images/random",
    type: "GET",
    success: function (response) {
      $("#load").hide();

      if (response.status == "success") {
        $("#dog-image").attr("src", response.message);
        $("#dog-image").css({ height: "200px", width: "200px" });
        console.log("Api request success");
      }
    },
    error: function () {
      console.log("Api request error");
    },
    complete: function () {
      console.log("API request completed img");
      $("#load").hide();
      $("#container").show();
    },
  });
}
