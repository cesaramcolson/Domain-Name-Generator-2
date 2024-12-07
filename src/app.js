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
  let extensions = ["com", "us", "net", "io"];

  let names = [];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          let domainName = pronoun + adj + noun;

          if (domainName.toLowerCase().endsWith(extension)) {
            domainName = domainName.slice(
              0,
              domainName.length - extension.length
            );
          }
          names.push(`${domainName}.${extension}`);
        }
      }
    }
  }

  console.log("Generated Domain Names: ");
  names.forEach(name => console.log(name));
};
