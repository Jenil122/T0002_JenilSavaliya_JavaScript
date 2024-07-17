window.onload = () => {
  const body = document.getElementsByTagName("body")
  const showDataTags = document.getElementById("showData");
  const div = document.createElement("div");
  body[0].append(div);
  let x = true;

  async function showData() {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await fetchData.json();
    if (x) {
      jsonData.forEach((element) => {
        const p = document.createElement("p");
        div.append(p);
        p.innerText = element.title;
      });
    } else {
      div.innerHTML = "";
    }
    x = !x;
  }

  showDataTags.addEventListener("click", showData);
};
