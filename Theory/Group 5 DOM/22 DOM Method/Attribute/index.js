const aTags = document.getElementById("aTags");

const create = document.createAttribute("href")
create.value = "https://www.google.com/";

aTags.setAttributeNode(create);


console.log(aTags.getAttribute("href"));

// aTags.removeAttribute()