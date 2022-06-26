
 function students(n,c,u,i,b){
  
     this.name = n;
     this.course = c;
     this.unit = u;
     this.image = i;
     this.batch = `FT-WEB ${b}`;

 }

  let studentsArr = JSON.parse(localStorage.getItem("Students")) || [];

function storeData(e){
    e.preventDefault();
 let form = document.getElementById("students_data");
 let name = form.name.value;
 let course = form.course.value;
 let unit = form.unit.value;
 let image = form.image.value;
 let batch = form.batch.value;
let masai = new students(name,course,unit,image,batch);
   studentsArr.push(masai)
   localStorage.setItem("Students",JSON.stringify(studentsArr))

    form.name.value = "";
    form.course.value = "";
    form.unit.value = "";
    form.image.value = "";
    form.batch.value = "";
}
 let arr = [];
function calculate(){
    let studentsArr = JSON.parse(localStorage.getItem("Students")) || [];

   let obj = {};

    for(let i=0; i<studentsArr.length; i++){
            if(!obj[studentsArr[i].batch]){
                obj[studentsArr[i].batch] = 1;
            }
    }
    for(let i=0; i<studentsArr.length; i++){
        obj[studentsArr[i].batch]++;
    }

   arr.push(obj);
   console.log(arr)
}

calculate()



