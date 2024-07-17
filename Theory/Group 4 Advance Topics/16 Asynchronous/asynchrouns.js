console.log("Here I come in 2 Second");

setTimeout(() => {
  console.log("Hiii May I Coming ?");
}, [2000]);

setInterval(() => {
  console.log("I will come again and again");
}, [3000]);


setTimeout(()=>{
  console.log("I will come in 4 Second");
  setInterval(()=>{
    console.log("Hiiiii");
  },[4000])
},[2000])
