const getData = document.getElementById("get");

const setData = () => {
  sessionStorage.setItem("name", "Jenil");
  sessionStorage.setItem("name1", "nil");
  sessionStorage.setItem("name2", "Jil");
  sessionStorage.setItem("name3", "Jen");
};

const getItem = () => {
  getData.innerHTML = sessionStorage.getItem("name");
};

console.log("key: " + sessionStorage.key(0));

sessionStorage.removeItem("IsThisFirstTime_Log_From_LiveServer");
// sessionStorage.clear()
