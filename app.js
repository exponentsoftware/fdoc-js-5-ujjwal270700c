async function TotalLanguages (){
    var totalLanguages=[]
    const res=await fetch('https://restcountries.com/v2/all',{mode:'cors'})
    const result=await res.json();
    console.log(result);
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
// TotalLanguages();

async function MostSpokenLanguages (){
    var lang=[]
    const res=await fetch('https://restcountries.com/v2/all',{mode:'cors'})
    const result=await res.json();
    result.forEach(country => {
        country.languages.forEach(item => {
          const find=lang.findIndex(data => data.name ===item.name)
        //   if(lang.length === 0){
        //       lang.push({name:item.name,count:1})
        //   }
          if(find === -1){
            lang.push({name:item.name,count:1})
          }else{
          // console.log(lang[find]);
           lang.splice(find, 1, {name:item.name,count:lang[find].count+1});
          }
        })
    });
   
   data= lang.sort((a, b) => {
        return b.count - a.count;
    });
    console.log(data);
    }
// MostSpokenLanguages();

async function largestArea (){
   let topTen=[]
    const res=await fetch('https://restcountries.com/v2/all',{mode:'cors'})
    const result=await res.json();
   data= result.sort((a,b)=>{
          return b.area - a.area
    })
    data.forEach((item,index)=>{
        if(index < 10){
            topTen.push({country:item.name,Area:item.area})
        }
    })
    console.log(topTen);
    }
largestArea();