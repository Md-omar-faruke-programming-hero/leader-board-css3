// change h2 text color
var tops= document.getElementsByClassName('top');
for (const top of tops) {
    top.addEventListener('click',function(event){
        
        event.target.style.color= 'red';

    });
}




document.getElementById('btn').addEventListener('click',function(){

    var input= document.getElementById('input');
    var course= input.value;
    var add= document.createElement('li');
    add.innerText= course;
    document.getElementById('ul').appendChild(add);
    input.value="";


    var newCourse= document.getElementById('newcourse');
    var countCourse= parseInt(newCourse.value);
    var addedCourse= countCourse+1;
    newCourse.value=addedCourse;
    if(newCourse.value==5){
        document.getElementById('btn').setAttribute('disabled',true);
    }

    
});


