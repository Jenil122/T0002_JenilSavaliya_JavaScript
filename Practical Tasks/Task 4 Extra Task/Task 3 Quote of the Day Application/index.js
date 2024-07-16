const btn = document.getElementById("btn");
const showQuote = document.getElementById("showQuote");
const showAuthor = document.getElementById("showAuthor");

const fetchData = async () => {
  try {
    const data = await fetch("https://type.fit/api/quotes");
    const dataFetch = await data.json();
    for (let i = 0; i < dataFetch.length; i++) {
      const randomIndex = Math.floor(Math.random() * dataFetch.length);
      const splitData = dataFetch[randomIndex].author;
      const author = splitData.toString().split(",")[0];
      showAuthor.innerHTML = `Author: ${author}`;
      showQuote.innerHTML = `Quotes: ${dataFetch[randomIndex].text}`;
    }
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", fetchData);
