const btn = document.getElementById("btn");
const search = document.getElementById("search");
const show = document.getElementById("show");
const word_frequency = document.getElementById("word_frequency");

btn.addEventListener("click", () => {
  show.innerHTML = "";
  word_frequency.innerHTML = "";
  const searchValue = search.value;
  if (searchValue !== "") {
    const frequency = searchValue.length;
    const stringSearch = searchValue.toString().split(" ");

    let commonWord = [];
    let maximum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < stringSearch.length; i++) {
      let count = 1;
      for (let j = i + 1; j < stringSearch.length; j++) {
        if (stringSearch[i] === stringSearch[j]) {
          count++;
        }
      }

      if (maximum < count) {
        maximum = count;
        commonWord.push(stringSearch[i]);
      }
    }

    let mostCommonWord = commonWord.sort();
    word_frequency.innerHTML = `<b>word frequency:</b> <br>`;
    stringSearch.forEach((e) => {
      let counter = 0;
      Array.from(e).forEach(() => {
        counter++;
      });

      word_frequency.innerHTML += `${e}: ${counter}<br>`;
    });

    show.innerHTML = `<b>Length of Search:</b> ${frequency}<br>
       <b>Average word length:</b> ${stringSearch.length / 2}<br>
       <b>Most Common Word:</b> ${mostCommonWord[0]}`;
  }
});
