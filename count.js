import fetch from "node-fetch";
const script_url = "https://www.fnac.es/static-proxy/kameleoon/script.js";
console.log("dl migration: ");
const getScript = () => {
  return fetch(script_url)
    .then(function (res) {
      if (res.ok) {
        return res.text();
      }
    })
    .then(function (value) {
      return value;
    });
};

const getValues = (text) => {
  let count = text.match(/tc_vars/g).length;
  return count;
};

getScript().then((value) => {
  console.log(getValues(value));
  return getValues(value);
});
