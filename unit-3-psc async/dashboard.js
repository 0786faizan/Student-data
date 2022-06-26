
let data = JSON.parse(localStorage.getItem("Students"));
console.log(data)

function append(){


let container = document.getElementById("container");
 


data.map(function(el,index){
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.image;
    let name= document.createElement("p");
     name.innerText = el.name;
    let course = document.createElement("p");
      course.innerText = el.course;
      let unit = document.createElement("p");  
      unit.innerText = el.unit;
      let batch = document.createElement("p");
      batch.innerText = el.batch;
      let btn = document.createElement("button");
      btn.innerText = "Remove"
      btn.addEventListener("click",function(){
        removeData(el,index)
      })
      
      div.append(img,name,course,unit,batch,btn);
      container.append(div);
   


    })

}

append();
   
    function removeData(el,index){
        console.log(el,index)
        data.splice(index,1);
        // let data = JSON.parse(localStorage.getItem("Students"))||[];
      localStorage.setItem("Students",JSON.stringify(data));
      window.location.reload();
    
    }