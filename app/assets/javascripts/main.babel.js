"use strict";

window.onload = function () {
  getData();
};

try {
  var _getData = function _getData() {
    fetch("./baby-steps.json").then(function (res) {
      return res.json();
    }).then(function (obj) {

      var friendArray = [];
      for (var friend in obj.friends) {
        friendArray.push(obj.friends[friend]);
      }

      function compare(a, b) {
        var lNameA = a.lastName;
        var lnameB = b.lastName;

        var comparison = 0;
        if (lNameA > lnameB) {
          comparison = 1;
        } else if (lNameA < lnameB) {
          comparison = -1;
        }
        return comparison;
      }
      friendArray.sort(compare);

      var friendCountEl = document.getElementsByClassName('friend-counter');

      for (var i in friendCountEl) {
        var sameStepFriends = [];
        var step = Number(i) + 1;
        for (var j in friendArray) {
          if (friendArray[j].babyStep == step) {
            sameStepFriends.push(friendArray[j]);
            console.log(friendArray[j]);
          } else {};
        }
        console.log(sameStepFriends);
        var output = findNumOfFriends(sameStepFriends, step);
        friendCountEl[i].innerHTML = output;
      }
    });
  };
} catch (err) {
  console.log(err);
}

function findNumOfFriends(a,b) {

  let friends = a;
  let step = b;
  let friendsL = friends.length;
  var res = "";

  if (friendsL >= 4) {
    res = '<a href="#">' + friends[0].firstName + " " + friends[0].lastName + "</a>" + ", " + '<a href="#">' + friends[1].firstName + " " + friends[1].lastName + "</a>"  + ", and " + (friendsL-2) + " other friends are also in Baby Step " + step;
  } else {
  switch(friendsL)
  {
    case friendsL = 0: 
      res = "";
      break;
    case friendsL = 1:
      res = '<a href="#">' + friends[0].firstName + " " + friends[0].lastName + "</a>" + " is also in Baby Step " + step;
      break;
    case friendsL = 2:
      res = '<a href="#">' + friends[0].firstName + " " + friends[0].lastName + "</a>" + " and " + '<a href="#">' + friends[1].firstName + " " + friends[1].lastName + "</a>" + " are also in Baby Step " + step;
      break;
    case friendsL = 3: 
      res = '<a href="#">' + friends[0].firstName + " " + friends[0].lastName + "</a>" + ", " + '<a href="#">' + friends[1].firstName + " " + friends[1].lastName + "</a>"  + ", and 1 other friend are also in Baby Step " + step;
      break;
      default: "";
  }}
  return res;
}