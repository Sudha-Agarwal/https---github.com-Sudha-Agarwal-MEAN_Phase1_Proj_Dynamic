class BlogData{
    constructor(fname,lname,title,description,thumbnail){
        this.fname = fname;
        this.lname = lname;
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
    }
}
All_Data = new Array();    
function submitData(){

     alert("Thank you for submitting a blog. We will review it and upload it")
    
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let title = document.forms["myForm"]["title"].value;
    let description = document.forms["myForm"]["description"].value;
    
    //let thumbnail = document.forms["myForm"]["thumbnail"].value;
    
    //let thumbnail = document.forms["myForm"]["thumbnail"].value;

    let thumbnail = document.getElementById("thumbnail").files[0].name; 
 
    thumbnail = "images/" + thumbnail;

alert(thumbnail);
    const obj = new BlogData(fname,lname,title,description,thumbnail);
    
    //All_Data.push(obj);

    

    var All_Data = JSON.parse(sessionStorage.getItem("apiResult") || "[]");
    console.log(All_Data);
    //All_Data.forEach(item => console.log(item));

    All_Data.push(obj);
console.log(All_Data);
    sessionStorage.setItem("apiResult",JSON.stringify(All_Data));

   
   document.forms["myForm"]["fname"].value='';
  document.forms["myForm"]["lname"].value='';
     document.forms["myForm"]["title"].value='';
    document.forms["myForm"]["description"].value='';
    document.forms["myForm"]["thumbnail"].value='';
    

    return true;

}