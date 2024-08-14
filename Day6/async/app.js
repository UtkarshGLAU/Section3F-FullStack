console.log('hi');
async function fetchdata() {
    try {
        let data=await new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve('data')
            }, 1000)
        })
        console.log(data);
        
    } catch (error) {
        console.error(error);
        
    }
}

fetchdata()


const fd=async () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('data')
        }, 1000);
    })
}
fd()

const df=async (data) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('${data} proced')
        }, 1000);
    })
}
df()

const dd=async (data) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('${data} displayed')
        }, 1000);
    })
}
dd()


const hd=async (data) => {
    try {
        const data=await fd()
        const prod=await df(data)
        const result=await dd(df)
        console.log(result);
        
    } catch (error) {
        console.error(error);
        
    }
}
hd()

