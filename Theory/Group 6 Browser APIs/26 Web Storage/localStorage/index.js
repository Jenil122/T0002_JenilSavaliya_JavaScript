const getData = document.getElementById("get");

const setData = () => {
  localStorage.setItem("name", "Jenil");
  localStorage.setItem("name1", "nil");
  localStorage.setItem("name2", "Jil");
  localStorage.setItem("name3", "Jen");
};

const getItem = () => {
  getData.innerHTML = localStorage.getItem("name");
};

console.log("key: " + localStorage.key(0));

localStorage.removeItem("name1");

// localStorage.clear()
