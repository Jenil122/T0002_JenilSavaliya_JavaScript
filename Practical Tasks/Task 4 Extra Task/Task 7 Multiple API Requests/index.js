const show = document.getElementById("show");

const fetchData = () => {
  const api1 = fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
  const api2 = fetch("https://jsonplaceholder.typicode.com/albums").then(
    (res) => res.json()
  );
  const api3 = fetch("https://jsonplaceholder.typicode.com/comments").then(
    (res) => res.json()
  );

  Promise.all([api1, api2, api3])
    .then((values) => {
      let api1Data = Object.values(values[0]);
      for (let i = 0; i < 10; i++) {
        show.innerHTML += `
                    <div id="api1Data">
                    <p>${api1Data[i].body}</p>
                    </div>
                    `;
      }
      let api2Data = Object.values(values[1]);
      for (let i = 0; i < 10; i++) {
        show.innerHTML += `
                    <div id="api2Data">
                    <p>${api2Data[i].title}</p>
                    </div>
                    `;
      }
      let api3Data = Object.values(values[2]);
      for (let i = 0; i < 10; i++) {
        show.innerHTML += `
                    <div id="api3Data">
                    <p>${api3Data[i].name}</p>
                    <p>${api3Data[i].email}</p>
                    </div>
                    `;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchData();
