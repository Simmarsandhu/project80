var names_list=[];
function submit(){
    var name=document.getElementById("Enter").value;
    names_list.push(name);
    document.getElementById("names").innerHTML=names_list;

    

}
function show(){
    var names=[];
    
    for (i=0;i<names_list.length;i++){
        
        names.push("<h4>"+names_list[i] )+"</h4>";
        
        console.log(names);
    }
    names_2=names.join(" ");
    document.getElementById("show_names").innerHTML=names_2;
}


function sorting(){
    names_list.sort();
    console.log(names_list);
    var Name_3=[];
    var name_length=  names_list.length;
        console.log(name_length);
        for(g=0;g<name_length;g++){
            Name_3.push("<h4>"+names_list[g]+"</h4>");
            console.log(Name_3);
    
        }
        var without_commas= Name_3.join("");
        console.log(without_commas);
        document.getElementById("sorted_names").innerHTML=without_commas;
    
    }

function searching(){
    var search=document.getElementById("search").value;
    var found=0;
    var j;
    for(j=0;j<names_list.length; j++){
        if(search==names_list[j]){
            found=found+1;
        }
    }
    document.getElementById("search_name").innerHTML="name found"+found+ "time/s";
    console.log("found name"+found+"time/s")
}