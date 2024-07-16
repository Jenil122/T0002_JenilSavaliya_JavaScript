try {
  const s = async () => {
    const fetchData = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const data = await fetchData.json();
    console.log(data);
    console.log(data[0].title);

    s();
  };
} catch (error) {
  console.log(error);
}
