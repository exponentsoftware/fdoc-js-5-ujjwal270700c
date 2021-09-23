async function TotalLanguages (){
    let totalLanguages=[]
    const res=await fetch('https://restcountries.com/v2/all',{mode:'cors'})
    const result=await res.json();
    result.forEach(country => {
        country.languages.forEach(item => {
          const find=totalLanguages.filter(data => data ===item.name)
          if(find.length === 0){
              totalLanguages.push(item.name)
          }
        })
    });
    console.log(`${totalLanguages.length} languages are there in the countries API`); 
    }
TotalLanguages();

async function MostSpokenLanguages (){
    let lang=[]
    const res=await fetch('https://restcountries.com/v2/all',{mode:'cors'})
    const result=await res.json();
    result.forEach(country => {
        country.languages.forEach(item => {
          const find=lang.findIndex(data => data.name ===item.name)
          if(find === -1){
            lang.push({name:item.name,count:1})
          }else{

           lang.splice(find, 1, {name:item.name,count:lang[find].count+1});
          }
        })
    });
   
   data= lang.sort((a, b) => {
        return b.count - a.count;
    });
    let data1=data.slice(0,15);
    console.log(data1);
    }
MostSpokenLanguages();

async function largestArea (){
   let topTen=[]
    const res=await fetch('https://restcountries.com/v2/all',{mode:'cors'})
    const result=await res.json();
    console.log(result);
   data= result.sort((a,b)=>{
          return b.area - a.area;
    })
  let data1=data.slice(0,10);
  console.log(data1);
    }
largestArea();

