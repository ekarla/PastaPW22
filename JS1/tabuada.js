for(var i=1; i <= 10; i++){
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    let coluna = document.createElement('tr');
    let titulo = document.createElement('th');
    titulo.colSpan = 2;
    titulo.innerHTML = "Produtos de " + i;
    coluna.appendChild(titulo);
    thead.appendChild(coluna);
    table.appendChild(thead);

    for(var j = 0; j <= 10; j++){
        let cl = document.createElement('td');
        let valor = document.createElement('td');
        let li = document.createElement('tr');

        cl.innerHTML = i + " X " + j;
        valor.innerHTML = i * j;


        li.appendChild(cl); 
        li.appendChild(valor); 
        tbody.appendChild(li); 
  
    }
  

    table.appendChild(tbody);
    document.getElementById('body').appendChild(table);

}



  