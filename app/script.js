// $(document).ready(function(){

// })
$("#load").show();
$("#container").hide();
function getAllDogsFromApi() {
  // https://dog.ceo/api/breeds/list/all
  const url = "https://dog.ceo/api/breeds/list/all";
  $.ajax(url, {
    method: "GET",
    start: function () {
      console.log("start");
      $("#load").show();
      $("#container").hide();
    },
    success: function (resp) {
      console.log("Api request success");
      console.log(resp);
      console.log(Object.keys(resp.message));
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
}
function getRandomImageOfDog(dogBreed) {
  // https://dog.ceo/api/breed/affenpinscher/images/random
  const url = `https://dog.ceo/api/breed/affenpinscher/images/random`;
  //   const url = "https://dog.ceo/api/breeds/image/random";
  $.ajax(url, {
    method: "GET",
    success: function (resp) {
      console.log("Api request success");
      console.log(resp);
    },
    error: function () {
      console.log("Api request error");
    },
  });
}

getAllDogsFromApi();
getRandomImageOfDog();
console.log("hiii");

// let kk = $("#").val();

console.log(kk);
$("#getimg").click(function () {
  let kk = $("#selection").val();
  document.location.href = kk;
});
