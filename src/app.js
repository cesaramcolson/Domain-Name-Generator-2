/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our"];
  let adjs = ["great", "big", "last"];
  let nouns = ["jogger", "racoon", "Ofus"];
  let extentions = [".com", ".us", ".net", ".io"];

  for (let pronoun in pronouns) {
    for (let adj in adjs) {
      for (let noun in nouns) {
        for (let extention in extentions) {
          console.log(
            pronouns[pronoun] + adjs[adj] + nouns[noun] + extentions[extention]
          );
        }
      }
    }
  }
};
