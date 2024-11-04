/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author:
  Date:
  Filename:
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  return {
      getName: function() {
          return name;
      },
      getGender: function() {
          return gender;
      },
      getClass: function() {
          return characterClass;
      }
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  const name = document.getElementById("heroName").value;
  const gender = document.getElementById("heroGender").value;
  const characterClass = document.getElementById("heroClass").value;

  // TODO: Create character
  const newCharacter = createCharacter(name, gender, characterClass);

  document.getElementById("characterOutput").style.display = "inline-block";

  document.getElementById("characterOutput").innerHTML = `
  Name: ${newCharacter.getName()}
  Gender: ${newCharacter.getGender()}
  Class: ${newCharacter.getClass()}
`;
});