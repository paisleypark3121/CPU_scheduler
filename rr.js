function avgWaitTime(processes,time_slice)
{
  for (var i=1;i<processes.length;i++) {
    processes[i][1]-=processes[0][1];
  }
  processes[0][1]=0;

  var wait=[];
  var step=0;
  wait[0]=0;

  for (var i=1;i<processes.length;i++) {
    //console.log("step: "+step+" - p: "+processes[i-1][0]+" - time_slice: "+time_slice);
    step+=Math.min(processes[i-1][0],time_slice)
    if (step<processes[i][1])
      step=processes[i][1];
    //console.log(i +" - step: "+step);
    wait[i]=step-processes[i][1];
    if (wait[i]==0)
      wait[i]=0;
  }

  for (var i=0;i<wait.length;i++) {
    console.log("wait "+i+": "+wait[i]);
  }

  var totalWait=0;
  for (var i=0;i<wait.length;i++) {
    totalWait+=wait[i];
  }
  var avg_wait=totalWait/wait.length;
  return avg_wait;
}


function avgCompletionTime(processes,time_slice)
{
  for (var i=1;i<processes.length;i++) {
    processes[i][1]-=processes[0][1];
  }
  processes[0][1]=0;

  var remaining=[];
  for (var i=0;i<processes.length;i++) {
    remaining[i]=processes[i][0];
  }
  
  var completion=[];
  var step=0;
  var secure=100;
  //while (true)
  while (secure>=0)
  {
    var count=0;
    for (var i=0;i<processes.length;i++) {

      //console.log("DEBUG: "+i);
      if (remaining[i]==0)
      {
        count++;
        continue;
      }

      if (step<processes[i][1])
        step=processes[i][1];
      
      var delta=Math.min(remaining[i],time_slice);
      //console.log("DEBUG: "+i+" - "+delta);
      remaining[i]-=delta;
      step+=delta;
      if (remaining[i]==0)
        completion[i]=step-processes[i][1];
    }

    if (count==processes.length)
      break;

    secure--;
  }

  for (var i=0;i<completion.length;i++) {
    console.log("completion "+i+": "+completion[i]);
  }

  var totalCompletion=0;
  for (var i=0;i<completion.length;i++) {
    totalCompletion+=completion[i];
  }
  var avg_completion=totalCompletion/completion.length;
  return avg_completion;
}


function rr()
{
  var processes=[];

  var time_slice = parseInt(document.getElementById("time_slice").value);
  
  var table = document.getElementById("processes");
  for (var i = 1, row; row = table.rows[i]; i++) {
    
    var id=row.cells[0].childNodes[0].value;
    // processesDuration[i-1]=row.cells[1].childNodes[0].value;
    // processesArrival[i-1]=row.cells[2].childNodes[0].value;
    durationElement=document.getElementById("duration_"+id);
    arrivalElement=document.getElementById("arrival_"+id);

    duration=parseInt(durationElement.value);
    duration=Number.isNaN(duration)?0:duration;
    arrival=parseInt(arrivalElement.value);
    arrival=Number.isNaN(arrival)?0:arrival;

    processes[i-1]=[duration, arrival];
  }

  // for (var i=0;i<processes.length; i++) {
  //   console.log(processes[i][0]+" - "+processes[i][1]);
  // }

  processes.sort(function(a,b) {
    if (a[1]>b[1]) return 1;
    if (a[1]<b[1]) return -1;
    if (a[1]==b[1]) return 0;
  });

  // var _avgWaitTime=avgWaitTime(processes,time_slice);
  // console.log("avgWaitTime: "+_avgWaitTime);
  var _avgCompletionTime=avgCompletionTime(processes,time_slice);
  console.log("avgCompletionTime: "+_avgCompletionTime);

  // document.getElementById("result_avgWaitTime").innerHTML="Tempo Medio di Attesa: "+_avgWaitTime;
  document.getElementById("result_avgCompletionTime").innerHTML="Tempo Medio di Completamento: "+_avgCompletionTime;
}
