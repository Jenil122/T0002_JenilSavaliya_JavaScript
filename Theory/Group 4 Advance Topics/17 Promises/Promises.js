let promise = new Promise((resolve,reject)=>{
    resolve()
}).then(()=>{
    console.log("I am new Promise");
}).catch((e)=>{
    console.log("Error");
})



const pr = async () => {
    return new Promise((resolve,reject)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("hiiii, I am Inner Promise");
            },[1000])
        })
    })
};


pr()