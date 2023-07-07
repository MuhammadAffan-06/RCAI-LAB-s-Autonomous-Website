async function fetchAPI(){
    const response =await  fetch("events.json");
    const data = await response.json();
    console.log(data);
    return data;
}
let table = document.getElementById("table_body")
let grid = document.getElementById("grid")
fetchAPI()
// .then((events) => {
//     let tabledata="";
//     for(let event of events){
//         let counter = 0;
//         tabledata= `<tr>
//         <td class="m-auto">
//             <div class="m-auto"><img src="${event.image}" width="500px" height="500px"></div>
//             <div class="m-auto center">${event.name}</div>
//             <div class="m-auto">${event.date}</div>

//         </td>
       
//         `;
//         let row = table.insertRow(counter);
//         row.innerHTML = tabledata;
//         counter++;
//     }
 //-------------------------------------------------------------   
.then((events) => {
    let gridData="";
    for(let event of events){
        let counter = 0;
        gridData= `<tr>
        <div class="text-3xl m-auto text-center border-8">
            <div class="m-auto place-content-center"><img src="${event.image}" ></div>
            <div class="m-auto place-content-center">${event.name}</div>
            <div class="m-auto place-content-center">${event.date}</div>

            </div>
       
        `;
        
        grid.innerHTML += gridData;
        counter++;
    }
    
}).catch((err) => {
    console.log(err);
});