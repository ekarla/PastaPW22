var i = 0; //Var declara variavel
var j = 0;

for(i = 1; i <= 10; i++){
document.write("<table border='1'>");
   document.write("<tr><th colspan = '2'>"+"Produto "+i+"</th></tr>");
   for(j = 1; j <= 10; j++){
        product = i*j;
        var saida = "<tr><td>" + i + " X " + j + "</td>"  + "<td>" + product + "</td></tr>";
        document.write(saida);
    }
   // document.write("<br>");
    document.write("<table/>");
}