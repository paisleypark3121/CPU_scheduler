function test()
{
  var durata_p1=parseInt(document.getElementById("durata_p1").value);
  var durata_p2=parseInt(document.getElementById("durata_p2").value);
  var durata_p3=parseInt(document.getElementById("durata_p3").value);
  var durata_p4=parseInt(document.getElementById("durata_p4").value);
  var durata_p5=parseInt(document.getElementById("durata_p5").value);

  console.log("durata_p1: "+durata_p1);
  console.log("durata_p2: "+durata_p2);
  console.log("durata_p3: "+durata_p3);
  console.log("durata_p4: "+durata_p4);
  console.log("durata_p5: "+durata_p5);

  var attesa_p1=0;
  var attesa_p2=attesa_p1+durata_p1;
  var attesa_p3=attesa_p2+durata_p2;
  var attesa_p4=attesa_p3+durata_p3;
  var attesa_p5=attesa_p4+durata_p4;
  var attesa_totale=attesa_p1+attesa_p2+attesa_p3+attesa_p4+attesa_p5;

  console.log("tempo medio di risposta: "+attesa_totale/5);
  //alert("qui");
  //console.log("Hello world");

  document.getElementById("risultato").innerHTML="Il tempo di attesa medio è: "+attesa_totale/5;
}
























function FCFS() 
{
  var nome_p1=document.getElementById("nome_p1").value;
  var nome_p2=document.getElementById("nome_p2").value;
  var nome_p3=document.getElementById("nome_p3").value;
  var nome_p4=document.getElementById("nome_p4").value;
  var nome_p5=document.getElementById("nome_p5").value;

  var durata_p1=getField("durata_p1");
  var durata_p2=getField("durata_p2");
  var durata_p3=getField("durata_p3");
  var durata_p4=getField("durata_p4");
  var durata_p5=getField("durata_p5");
  if ((durata_p1==-1) || (durata_p2==-1) || (durata_p3==-1) || (durata_p4==-1) || (durata_p5==-1))
  {
    alert("inserire una durata valida per i processi")
    return;
  }

  var tempo_attesa_medio=calculateTempoAttesaMedio(durata_p1,durata_p2,durata_p3,durata_p4,durata_p5);
  console.log("Tempo di attesa medio: "+tempo_attesa_medio);

  var tempo_completamento_medio=calculateTempoCompletamentoMedio(durata_p1,durata_p2,durata_p3,durata_p4,durata_p5);
  console.log("Tempo di completamento medio: "+tempo_completamento_medio);
}

function getField(fieldName)
{
  var durata=parseInt(document.getElementById(fieldName).value);
  if (Number.isNaN(durata))
    return -1;
  return durata;
}

function calculateTempoAttesaMedio(durata_p1,durata_p2,durata_p3,durata_p4,durata_p5)
{
  var attesa_p1=0;
  var attesa_p2=durata_p1;
  var attesa_p3=attesa_p2+durata_p2;
  var attesa_p4=attesa_p3+durata_p3;
  var attesa_p5=attesa_p4+durata_p4;
  var attesa=attesa_p1+attesa_p2+attesa_p3+attesa_p4+attesa_p5;
  var tempo_attesa_medio=attesa/5;
  // var durata=(parseInt(durata_p1)+parseInt(durata_p2)+parseInt(durata_p3)+parseInt(durata_p4)+parseInt(durata_p5))/5;
  //console.log(tempo_attesa_medio);
  return tempo_attesa_medio;
}

function calculateTempoCompletamentoMedio(durata_p1,durata_p2,durata_p3,durata_p4,durata_p5)
{
  var completamento_p1=durata_p1;
  var completamento_p2=completamento_p1+durata_p2;
  var completamento_p3=completamento_p2+durata_p3;
  var completamento_p4=completamento_p3+durata_p4;
  var completamento_p5=completamento_p4+durata_p5;
  var completamento=completamento_p1+completamento_p2+completamento_p3+completamento_p4+completamento_p5;
  var tempo_completamento_medio=completamento/5;
  // var durata=(parseInt(durata_p1)+parseInt(durata_p2)+parseInt(durata_p3)+parseInt(durata_p4)+parseInt(durata_p5))/5;
  //console.log(tempo_attesa_medio);
  return tempo_completamento_medio;
}