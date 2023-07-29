const tbody = document.getElementById("tbod");


async function loading() {
   
    try{
        const api_endpoint = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    const response = await fetch(api_endpoint, { mode: 'cors' });
    const data = await response.json();
    // console.log(data);

     gdisplay(data);
    //  ldisplay(data);

    }catch(error){
        const errs = document.getElementById('err');
    // console.error("failed to load");
   
        errs.style.display = 'block';
    
    // error.style.display='none';
        // 
        // console.log(error);
    
        
       
}
    
}

// function display(data){
//     console.log(data);
// }
loading();

const gdisplay = (data) => {
    console.log(data);
    if (data.length > 0) {


        const tbod = data.map(values =>
            ` <div class="horizontal">
         <ul>
             <div class="title">
                 <img src="${values.image}" alt="logo">
                 <div class="horn">${values.id.charAt(0).toUpperCase()}${values.id.slice(1)}
                     <li class="stext">${values.symbol.toUpperCase()}</li>
                 </div>
                 
             </div>
             <li class="horn1">${values.price_change_percentage_24h}%</li>
             <li class="horn2">$${values.current_price.toLocaleString()}</li>
             <br>
             <li class="stext">Total Volume:${values.total_volume.toLocaleString()}</li>
             <li class="stext">Market Cap:${values.market_cap.toLocaleString()}</li>
     </ul>
 </div>  
            
            `
        ).join('');


        tbody.innerHTML = tbod;
    }

}

const ldisplay = (data) => {
    console.log(data);
    if (data.length > 0) {


        const tbod = data.map(values =>
            ` <tr>
        
        <td class="icon"> <div><img src="${values.image}" alt="icon"> </div> <div> ${values.id.charAt(0).toUpperCase()}${values.id.slice(1)} </div></td>
            <td></td>
            <td>${values.symbol.toUpperCase()}</td>
            <td>$${values.current_price.toLocaleString()}</td>
            <td> v ${values.total_volume.toLocaleString()}</td>
            <td>${values.price_change_percentage_24h}%</td>
            <td>Mkt Cap: $${values.market_cap.toLocaleString()}</td>

        </tr>
            
            `
        ).join('');


        tbody.innerHTML = tbod;
    }

}










