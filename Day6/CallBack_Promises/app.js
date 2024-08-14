// const fetchdata=(callback)=>{
//     setTimeout(() => {
//         console.log('data featched');
//         callback('here is your data')
//     }, 1000);
// }
// const displayD=(data)=>{
//     console.log(data);
// }

// fetchdata(displayD)

// const myPromise=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let success = true;
//         if (success) {
//             resolve('data fetched')
//         }
//         else{
//             reject('error fetching data')
//         }
//     }, 1000);
// })

// myPromise.then(data=>{console.log(data , 'thank you')
// })
// .catch(error=>{
//     console.log(error)
// })

const fetchdata = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data fetched");
    }, 1000);
  });
};

const processD = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("${data} process");
    }, 1000);
  });
};

const displayD = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("${data} display");
    }, 1000);
  });
}

fetchdata()
  .then(data => 
    processD(data)
  )
  .then(processD => 
    displayD(processD)
  )
  .then(result => 
    console.log(result)
  )
  .catch(error => 
    console.error(error)
  )
