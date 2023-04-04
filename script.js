fetch('https://fakestoreapi.com/users')
.then((data)=>{
  return data.json();
})



.then((objectdata)=>{
    console.log([objectdata[0]])
    let textdata="";
    objectdata.map((values)=>{
      textdata+=`<h1>${values.id}</h1>`;
        textdata+=
        `<tr>
          <td>${values.id}</td>
          <td>${values.email}</td>
          <td>${values.username}</td>
          <td>${values.password}</td>
          <td>${values.phone}</td>

        </tr>`;

    })
    document.getElementById("textbody").innerHTML=textdata;
})