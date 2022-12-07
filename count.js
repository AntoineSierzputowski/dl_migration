import fetch from "node-fetch"; // install & import fetch
import { websites } from "./datas.js";

// ---------- URL script.js Kameleoon ----------
const website = "fnac_com";
const url_website = websites.fnac_com.url;
const dl_array_website = Object.keys(websites.fnac_com.data_obj);

console.log("dataLayer length: ", dl_array_website.length);
// ---------- get the script kam in text from the url ----------
const getScript = async () => {
  return fetch(url_website)
    .then(function (res) {
      if (res.ok) {
        return res.text();
      }
    })
    .then(function (value) {
      return value;
    });
};

// ---------- return the number of time a string is another string ----------
const getValues = (text) => {
  // dl_array_website.forEach((keys) => );

  let count = text.match(/tc_vars\./g).length;
  // let count = text.match(/wsshc/g)?.length;
  if (count == undefined) {
    return (count = 0);
  }
  return count;
};

// ---------- variable equal to the number of matchs ----------
const numberReturn = await getScript().then((value) => {
  return getValues(value);
});
console.log("number: ", numberReturn);
