const users=[
    {
    name:"Maryam",
    occupation : "Web Developer",
    Streak :"Streak : Yes",
    profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJino-dpXARjwuFri9mE-jwbphf7GPVNkxRA&s"},

    { 
    name:"Ayesha",
    occupation : "Web Developer",
    Streak :"Streak : Yes",
    profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_P3hXiiGbawkI9cW_zmQRVzbiJDfrlSTYvnQVB2Mw74-rK-xPOuRHBeIJ3qyteBSJ1E&usqp=CAU"},
    {name:"Hayat",
     occupation : "Web Developer",
      Streak :"Streak : Yes",
     profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbshuhwNYhyWIRaJLt9i06jVWrDGsc-WTmHPJK69G0yJY-t5gvZDt_sE3W5nTiJg_eRmY&usqp=CAU"},
 ];
 function getUsers(){
    const main = document.getElementById("main");
    setTimeout(() => {
        users.forEach(function(item) {
            const div = document.createElement("div");
            div.classList.add("user")
            main.append(div);
            const img = document.createElement("img");
            img.classList.add("img");
            img.src = item.profile;
            div.append(img);
    
            const div2 = document.createElement("div")
            const p = `<p class="p-1">${item.name}</p>
            <p class="p-2">${item.occupation}</p>
        <p class="p-3">${item.Streak}</p>`
        div2.innerHTML = p
        div.append(div2)
       
    
        });
        document.getElementById("loader").innerHTML="";
     },2000);
 }
 getUsers()
