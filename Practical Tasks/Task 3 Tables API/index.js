const btn = document.getElementById("btn");
const thead = document.getElementById("thead");
const tbody = document.getElementById("tbody");
const search = document.getElementById("search");

const fetchData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const fetchAsData = await data.json();
  return fetchAsData;
};

async function createHead(fetchAsData) {
  const usersData = Object.values(fetchAsData).map((data) => Object.keys(data));
  const userDataHead = usersData[0];
  let th;
  userDataHead.forEach((data) => {
    th = document.createElement("th");
    th.innerHTML = data.toUpperCase();
    thead.appendChild(th);
  });
  return thead;
}

const createBody = async (fetchAsData) => {
  const userData = Object.values(fetchAsData).map((data) =>
    Object.values(data)
  );
  for (let i = 0; i < userData.length; i++) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    let td;
    userData[i].forEach((data, idx) => {
      td = document.createElement("td");
      td.innerHTML = data;
      if (idx === 4) {
        td.innerHTML = data.city;
      }
      if (idx === 7) {
        td.innerHTML = data.name;
      }
      tr.appendChild(td);
    });
  }
  return tbody;
};

async function fetchTableData() {
  const data = await fetchData();
  await createHead(data);
  const fetchBodyData = await createBody(data);

  if (fetchBodyData.childElementCount !== 0) {
    search.style.display = "inline-block";
    btn.innerHTML = "Search";
  }
}

btn.addEventListener("click", async () => {
  if (btn.innerHTML === "Search") {
    const searchInputData = searchInput();
    tbody.innerHTML = "";
    const data = await fetchData();
    const filteredData = data.filter((datas) => {
      return datas.name.toLowerCase().includes(searchInputData);
    });
    await createBody(filteredData);
  } else {
    fetchTableData();
  }
});

function searchInput() {
  const searchValue = search.value.toLowerCase().trim();
  return searchValue;
}
