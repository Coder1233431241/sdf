name_of_the_student=[];
function submit(){
    var name_1=document.getElementById("number 1").value;
    var name_2=document.getElementById("number 2").value;
    var name_3=document.getElementById("number 3").value;
    var name_4=document.getElementById("number 4").value;
    
    name_of_the_student.push(name_1);
    name_of_the_student.push(name_2);
    name_of_the_student.push(name_3);
    name_of_the_student.push(name_4);

    document.getElementById("display_name").innerHTML=name_of_the_student;
    document.getElementById("buttonsubmit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function sort(){
    name_of_the_student.sort();
    document.getElementById("display_name").innerHTML=name_of_the_student;
}