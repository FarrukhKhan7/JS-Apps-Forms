
//-----------JS APPS,FORMS,OBJECTS Practice--------------//


// var city=prompt("Enter city name");
// var firstchar = city.slice(0,1);
// var otherschar = city.slice(1);
// city = firstchar.toUpperCase() + otherschar.toLowerCase();
// var arr=["Karachi","Islamabad","Lahore"];
// for(var i=0; i < arr.length; i++){
// if(city===arr[i]){
//     alert("city found");
//     break;
// }
// else{
//     alert("city not found");
//     break;
// }
// }

// ------Replacing word in text --------------------------

//var text="My name is Farrukh lorem epsom asaskask "
// for(var i=0; i<text.length;i++){
//     if(text.slice(i,i+7)==="Farrukh"){
//         text=text.slice(0,i) + "Hayat" + text.slice(i+7);
//         document.write(text);
//     }
// }

// ------Replacing word in text ( another easy way by indexOf("Farrukh")-
// var text="My name is Hayat Farrukh lorermm wewew asaskask "
// var indxNum = text.lastIndexOf("Farrukh");
// var firstText = text.slice(0,indxNum);
// var replce = "Jannat";
// var endText = text.slice(indxNum+7);
// document.write(firstText + replce + endText);

// -Easiest-----Replacing word in text ---------
// var text="My name is Hayat Farrukh lorermm wewew asaskask "
// text = text.replace("Farrukh","Jannat");
// document.write(text);

// -Easiest-----Replacing every same word in text ---------
// var text="Text text Farrukh Jannat Farrukh lorermm wewew asaskask "
// text = text.replace("Farrukh","Hayat");
// document.write(text);

// --------Rounding num ---------
// var num = 1.5;
// var round = Math.round(num);
// document.write(round);

// --------Ceil num -(choose big value)-Alternate is floor-------
// var num = 1.2;
// var ceil = Math.ceil(num);
// document.write(ceil);

// ---TOSS APPLICATION-----Using random num & floor for toss application-------
// var headuser = prompt("Enter headuser name");
// var tailuser = prompt("Enter tailuser name");
// var toss = Math.random() * 2 ;
// var floor = Math.floor(toss);
// if(floor===0){
//     alert(headuser + " win the toss")
// }
// else{
//     alert(tailuser + " win the toss")
// }

//-----Converting string to number----
//var strToNum=Number("10"); // or use parseInt("10")
//document.write(strToNum);

//-----Converting number to string----
//var num=10;
//document.write(num.toString());







//------------------------
//------------------------
//--------------------Calculator App----------------------------
// function getnumber(num){
//     var result=document.getElementById('input-id');
//      result.value+=num;

// }

// function clearbtn(){
//     var result=document.getElementById('input-id');
//     result.value = "";
// }

// function getresult(){
//     var result=document.getElementById('input-id');
//     result.value = eval(result.value);
// }
// function del(){
//   result = document.getElementById('input-id');
//   result.value= result.value.slice(0,-1);
// }

//------------------------
//------------END ---Calculator App--



//---------START--------STOPWATCH--------
//--------------------------------------

// var min = 0;
// var sec = 0;
// var msec = 0;
// var minHead = document.getElementById('min');
// var secHead = document.getElementById('sec');
// var msecHead = document.getElementById('msec');
// var interval;
// function timer(){
//     msec++;
//     msecHead.innerHTML= msec;
//     if (msec>=100){
//         sec++;
//         secHead.innerHTML= sec;
//         msec = 0;
//     }
//     else if(sec>=60){
//        min++
//        minHead.innerHTML= min;
//        sec=0;
//     } 
// }
// function start(){
//     interval = setInterval(timer,10);
//     document.getElementById('btn').disabled= true;
//   }
  
// function pause(){
//     clearInterval(interval)
//     document.getElementById('btn').disabled= false;
// }
// function reset(){
//      min = 0;
//      sec = 0;
//      msec = 0;
//      secHead.innerHTML= sec;
//      msecHead.innerHTML= msec;
//      minHead.innerHTML= min;
//      pause()
//      document.getElementById('btn').disabled= false;
// }

//---------END--------STOP WATCH--------
//--------------------------------------

//----Start-----Message App-----------------------------
//-----------------------------

// function AddMsg(){
//     var inputBox = document.getElementById('input-msg');
//     var p = document.createElement('p');
//     var text = document.createTextNode(inputBox.value);
//     p.appendChild(text);
//     var msg = document.getElementById('msg');
//     msg.appendChild(p);
//     inputBox.value="";
// }

//----End-----Message App-----------------------------
//-----------------------------





//----Start Todo App-----------------------------
//-----------------------------
// function saveTodo(){
//     var input = document.getElementById('input-todo');
//     var li = document.createElement('li');
//     var liText = document.createTextNode(input.value);
//     li.appendChild(liText);
//     var list = document.getElementById('list');
//     list.appendChild(li);
//     input.value="";
//     li.setAttribute('class','liStyle')

//     // Creating Delete btn
//     var delbtn = document.createElement('button');
//     var delText = document.createTextNode('DELETE');
//     delbtn.appendChild(delText);
//     li.appendChild(delbtn);
//     delbtn.setAttribute('onclick','del(this)')
//     delbtn.setAttribute('class','delBtn')

//      // Creating EDIT btn
//      var editbtn = document.createElement('button');
//      var editText = document.createTextNode('EDIT');
//      editbtn.appendChild(editText);
//      li.appendChild(editbtn);
//      editbtn.setAttribute('onclick','edit(this)')
//      editbtn.setAttribute('class','editBtn')
    
// }


// function del(a){
//       a.parentNode.remove();
// }

// function delAll(){
//     var list = document.getElementById('list');
//     list.innerText="";
// }

// function edit(a){
//     var update = prompt('Enter your update todo',a.parentNode.firstChild.nodeValue);
//     a.parentNode.firstChild.nodeValue = update ; 
    
// }


//----End-----TODO App-----------------------------
//-----------------------------


//----FORM Table Output-----------------------------
//------------
// var arrHead = new Array();
// arrHead = ['', 'Emp. Name', 'Designation', 'Age']; // table headers.

// // first create a TABLE structure by adding few headers.
// function createTable() {
//     var empTable = document.createElement('table');
//     empTable.setAttribute('id', 'empTable');  // table id.

//     var tr = empTable.insertRow(-1);

//     for (var h = 0; h < arrHead.length; h++) {
//         var th = document.createElement('th'); // the header object.
//         th.innerHTML = arrHead[h];
//         tr.appendChild(th);
//     }

//     var div = document.getElementById('cont');
//     div.appendChild(empTable);    // add table to a container.
// }

// // function to add new row.
// function addRow() {
//     var empTab = document.getElementById('empTable');

//     var rowCnt = empTab.rows.length;    // get the number of rows.
//     var tr = empTab.insertRow(rowCnt); // table row.
//        // tr = empTab.insertRow(rowCnt);

//     for (var c = 0; c < arrHead.length; c++) {
//          var td = document.createElement('td');          // TABLE DEFINITION.
//         td = tr.insertCell(c);

//         if (c == 0) {   // if its the first column of the table.
//             // add a button control.
//             var button = document.createElement('input');

//             // set the attributes.
//             button.setAttribute('type', 'button');
//             button.setAttribute('value', 'Remove');

//             // add button's "onclick" event.
//             button.setAttribute('onclick', 'removeRow(this)');

//             td.appendChild(button);
//         }
//         else {
//             // the 2nd, 3rd and 4th column, will have textbox.
//             var ele = document.createElement('input');
//             ele.setAttribute('type', 'text');
//             ele.setAttribute('value', '');

//             td.appendChild(ele);
//         }
//     }
// }

// // function to delete a row.
// function removeRow(oButton) {
//     var empTab = document.getElementById('empTable');
//     empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
// }
//   // function to extract and submit table data.
//   function submit() {
//     var myTab = document.getElementById('empTable');
//     var arrValues = [];

//     // loop through each row of the table.
//     for (row = 1; row < myTab.rows.length ; row++) {
//       // loop through each cell in a row.
//         for (c = 0; c < myTab.rows[row].cells.length; c++) {  
//             var element = myTab.rows.item(row).cells[c];
//             if (element.childNodes[0].getAttribute('type') == 'text') {
//                 arrValues.push("'" + element.childNodes[0].value + "'");
               
//             }
//         }
//     }
//     // The final output.
//     document.getElementById('output').innerHTML = arrValues;
//     //console.log (arrValues);   // you can see the array values in your browsers console window. Thanks :-) 
// }

//--END --FORM Table Output--------------------





// //--Start--QUIZ APP--------------------


// function submit(){
//   document.getElementById('quiz-text').style.display = "none"
//   document.getElementById('resHead').innerHTML = "Result"

//   var count = 0
//   var arr = ["Mango","ball","Karachi"]
//   for(var i=0 ; i<arr.length; i++){
//     var x= document.getElementById(arr[i]);
//     if(x.checked){
//       count++
//     }
 
//   }
//   if(count<3){
//     var x = document.getElementById('result');
//     x.innerHTML = "You Failed!! <br>You scores "+count+" out of 3" 
   
//   }
//   else{
//     var x = document.getElementById('result');
//     x.innerHTML = "You Passed!! <br>You scores "+count+" out of 3 " 
   
//   }
// }
// function startTime(){
//   setTimeout(function(){
   
//     submit(); 
//     alert("Time up") }, 90000);
// }

// function start(){
  
//     document.getElementById('quiz-div').style.display = "block";
//     document.getElementById('quizStart').style.display = "none"

    
// }

// var min = 1;
// var sec = 30;

// var minHead = document.getElementById('min');
// var secHead = document.getElementById('sec');

// var interval;
// function timer(){
 
//     sec--
//     secHead.innerHTML= sec;
//     minHead.innerHTML= min;
//      if(sec==0){
//        min--
//        minHead.innerHTML= min;
//        sec=60;
//     } 
// }
// function start1(){
//     interval = setInterval(timer,1000);
    
//   }

// //--END --QUIZ APP-------------------






















// ------practice OF OBJECT

// // Making Object
// var car = {
//   name : "civic",
//   model : "2020",
//   color : "white",
// }
// // calling object
// //console.log(car)

// // calling any property of obj
// //console.log(car.name)

// // updating any property of obj
// // console.log(car.name="V8")

// // adding any property 
//  //console.log(car.price="60 lakh")

// // deleting any property 
// // delete car.model
// // console.log(car)

// // Object me property hai ke nhi (true/False me bata dega ). 
// // var check  = "name" in car ; 
// // console.log(check)






// Array and function in Object 
// var student = {
//   name : "Humty",
//   rollno : "0001",
//   subjects : ["English","Maths","urdu"],
//   getResult : function(){
//     return Pass ; 
//   }
// }
// console.log(student.subjects[0])


// function in Object 
// var student = {
//   name : "Humty",
//   rollno : "0001",
//   marks1 : 50,
//   marks2 : 70,
//   Result : function(){
//     return student.marks1 + student.marks2
//   }
// }
// console.log(student.Result())



// ----Multiple students objects

// var students = [{name:"Humty"},{name:"Dumty"}];
// for(var i=0; i<students.length ; i++){
//   console.log(students[i].name)
// }

// Constructor Function Objects (pechaan 1st letter capital of function name)
// function Student(name,className,roll){
//   this.studentName = name,
//   this.className = className,
//   this.roll = roll
// }

// var student1 = new Student("humty", 2 , 123);
// var student2 = new Student("dumty", 2 , 345);
// console.log(student2)


//==============FORMS PRACTICE 
// Form validation: text fields
// function checkLastName(){
//     var lastnamefield = document.getElementById('lastnamefield');
//     if(lastnamefield.value.length===0){
//       alert("Please enter your lastname");
//       lastnamefield.focus();
//       lastnamefield.style.background = "yellow";
//       return false;
//     }
//     lastnamefield.style.background = "white";
// }

//=================Form validation: drop down
// function checkForSelection(selectID) {
//      if (document.getElementById(selectID).selectedIndex === 0) {
//      alert("Please select a state.");
//      return false;
//     }
//      }

//==============Form validation: radio btns
//  function validateRadios(e) {
//      var radios = document.getElementsByName(e);
//      for (var i = 0; i < radios.length; i++) {
//      if (radios[i].checked) {
//      return true;
//      }
//      }
//      alert("Please check one.");
//      return false;
//     }
//-----------------------
    //  var ans1 = "cat";
    //  var ans2 = "humty"
    //  var result = 0;
    //  var rs1 = 0;
    //  var rs2 = 0;
    // function validateRadios() {
        
    //     var radios = document.getElementsByName('r1');
    //     for (var i = 0; i < radios.length; i++) {
    //     if (radios[i].checked) {
    //     // alert(radios[i].value)
    //     if(ans1===radios[i].value){
          
    //         // rs1 = 1;
    //         // result = rs1 + rs2
    //         result+= 1;
    //     }
        
        
    //     }
    //     }
    //     // alert("Please check one.");
    //     // return false;

    //     var radios2 = document.getElementsByName('r2');
    //     for (var i = 0; i < radios2.length; i++) {
    //     if (radios2[i].checked) {
    //     // alert(radios[i].value)
    //     if(ans2===radios2[i].value){
           
    //         // rs2 = 1;
    //         // result = rs1 + rs2
    //         result+= 1;
    //     }
    //     alert(result)
    //     return true;
    //     }
    //     }
    //     alert("Please fill whole one.");
    //     return false;

    //    }


    // ==============Form validation: ZIP codes
//     function validateZIP() {
//          var valueEntered = document.getElementById("zip").value;
//          var numChars = valueEntered.length;
//          if (numChars < 5) {
//          alert("Please enter a 5-digit code.");
//          return false;
//          }
//          for (var i = 0; i <= 4; i++) {
//          var thisChar = parseInt(valueEntered[i]);
//          if (isNaN(thisChar)) {
//          alert("Please enter only numbers.");
//          return false;
//          }
//      }
//  }

//================ FORMS QS.1 CHP 49-52

// function validateForm() {
	
// 	var fname = document.registration.fname;
// 	var uid = document.registration.userid;
// 	var phone = document.registration.phone;
// 	var email = document.registration.email;
// 	var lname = document.registration.lname;
//     var pass = document.registration.password;
    
    
//     var passlength = pass.value.length;
//     var phlength = phone.value.length;
// 	var uid_len = uid.value.length;
// 	var letter_regex = /^[A-Za-z]+$/;
// 	// var numbers = /^[0-9]+$/;
// 	var email_regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// 	if (uid_len == 0 || uid_len < 5)
// 	{
// 		alert("Enter user id with least length be between 5 to 12 ");
// 		uid.focus();
// 		return false
//     }
//      else if(!(fname.value.match(letter_regex))) {
//     	alert('first name must have alphabet characters only and it should not be empty.');
//     	fname.focus();
//         return false
//     } 
  
//     else if(!(email.value.match(email_regex))) {
// 		alert('Please enter a valid email');
// 		email.focus();
// 		return false;
//     } 
//       else if(passlength===0 || passlength <= 5){
//         alert("Please enter password with atleast length of 5");
//         return false;
//     }
//     else if(phlength===0 || phlength <= 6){
//         alert("Please enter correct phone number of length greater than 6");
//         return false;
//     }
//     else {
//         alert('Successfully! Your form has been submitted successfully.');
//         document.write("<h1>FORM DATA</h1><br>")
//         document.write("<b>User id: </b> "+uid.value+"<br>")
//         document.write("<b>First Name: </b> "+fname.value+"<br>")
//         document.write("<b>Last Name: </b> "+lname.value+"<br>")
//         document.write("<b>Phone: </b> "+phone.value+"<br>")
//         document.write("<b>Email: </b> "+email.value+"<br>")
//         document.write("<b>Password: </b> "+pass.value+"<br>")
// 	}
// }
// function submitForm() {
// 	console.log('Successfully! form has been submitted.');
// }


//==================== FORMS QS.2 CHP 49-52
// function myFunction() {

//     document.getElementById("demo").innerHTML = "Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.";
   
//    }


//-------------
// var formDiv;
// var h1Fname;
// var textFname;
// var inputFname;
// var h1Roll;
// var textRoll;
// var inputRoll;



// function studentForm(){
//     // document.write("<h1>Fullname: </h1>")
   
//     formDiv = document.getElementById('form-div');
//      h1Fname = document.createElement('h1');
//      textFname = document.createTextNode("Fullname: ")
//      inputFname = document.createElement('input');
     
   
//     h1Fname.appendChild(textFname)
//     h1Fname.appendChild(inputFname)
//     formDiv.appendChild(h1Fname)

//      h1Roll = document.createElement('h1');
//      textRoll = document.createTextNode("Roll#: ")
//      inputRoll = document.createElement('input');
   
//     h1Roll.appendChild(textRoll)
//     h1Roll.appendChild(inputRoll)
//     formDiv.appendChild(h1Roll)
  
// }

// function submitForm(){
//     document.write("<b>"+h1Fname.innerText+"</b>"+inputFname.value+"<br>")
//     document.write("<b>"+h1Roll.innerText+"</b>"+inputRoll.value)
// }


// // ARRAY MAP
// function abc(){
// // var arr = [{name: "abc"} , {name: "cde"}]
// var arr = ["khan","frk"]
// arr.map((item,index)=>{
//     document.write(index+" "+item+"<br>")
// })
// }
//  abc()



// function abc(){
//      var arr = [{name: "abc"} , {name: "cde"}]
    
//     arr.map((item,index)=>{
//         document.write(index+" "+item.name+"<br>")
//     })
//     }
//      abc()
//====================== 
//======================================


//==========Task 

//   // MARKSHEET TABLE

//   function tab(){
//   var x = prompt("Enter 1st subject name ");
//   var s1 = document.getElementById('s1');
//   s1.innerHTML = x;
//   var y = prompt("Enter 2nd subject name ");
//   var s2 = document.getElementById('s2');
//   s2.innerHTML = y;
//   var z = prompt("Enter 3rd subject name ");
//   var s3 = document.getElementById('s3');
//   s3.innerHTML = z;
  
//   var tmarks1 = +prompt("Enter total marks of 1st sub :");
//   var t1 = document.getElementById('t1');
//   t1.innerHTML = tmarks1 ; 
//   var tmarks2 = +prompt("Enter total marks of 2nd sub :");
//   var t2 = document.getElementById('t2');
//   t2.innerHTML = tmarks2 ; 
//   var tmarks3 = +prompt("Enter total marks of 3rd sub :");
//   var t3 = document.getElementById('t3');
//   t3.innerHTML = tmarks3 ; 

//   var obmarks1 = +prompt("Enter obtain marks of 1st sub :");
//   var ob1 = document.getElementById('ob1');
//   ob1.innerHTML = obmarks1 ; 
//   var obmarks2 = +prompt("Enter obtain marks of 2nd sub :");
//   var ob2 = document.getElementById('ob2');
//   ob2.innerHTML = obmarks2 ; 
//   var obmarks3 = +prompt("Enter obtain marks of 3rd sub :");
//   var ob3 = document.getElementById('ob3');
//   ob3.innerHTML = obmarks3 ; 
  
//   var psub1 = (obmarks1/tmarks1)*100 +"%";
//   var p1 = document.getElementById('p1');
//   p1.innerHTML =psub1 ; 

//   var psub2 = (obmarks2/tmarks2)*100 +"%";
//   var p2 = document.getElementById('p2');
//   p2.innerHTML =psub2 ; 

//   var psub3 = (obmarks3/tmarks3)*100 +"%";
//   var p3 = document.getElementById('p3');
//   p3.innerHTML =psub3 ; 


//   var total = document.getElementById('total');
//   var obtain = document.getElementById('obtain');
//   var per = document.getElementById('per');
//   var tmarks = tmarks1 + tmarks2 + tmarks3;
//   var obmarks = obmarks1 + obmarks2 + obmarks3;
//   total.innerHTML = tmarks;
//   obtain.innerHTML = obmarks;
//   per.innerHTML = (obmarks/tmarks)*100+"%"

//   }
// ========================================
//============== Js Marksheet table END =============




//----FORM Table Output-----------------------------
//------------
// var arrHead = new Array();
// arrHead = ['', 'Emp. Name', 'Designation', 'Age']; // table headers.

// // first create a TABLE structure by adding few headers.
// function createTable() {
//     var empTable = document.createElement('table');
//     empTable.setAttribute('id', 'empTable');  // table id.

//     var tr = empTable.insertRow(-1);

//     for (var h = 0; h < arrHead.length; h++) {
//         var th = document.createElement('th'); // the header object.
//         th.innerHTML = arrHead[h];
//         tr.appendChild(th);
//     }

//     var div = document.getElementById('cont');
//     div.appendChild(empTable);    // add table to a container.
// }

// // function to add new row.
// function addRow() {
//     var empTab = document.getElementById('empTable');

//     var rowCnt = empTab.rows.length;    // get the number of rows.
//     var tr = empTab.insertRow(rowCnt); // table row.
//        // tr = empTab.insertRow(rowCnt);

//     for (var c = 0; c < arrHead.length; c++) {
//          var td = document.createElement('td');          // TABLE DEFINITION.
//         td = tr.insertCell(c);

//         if (c == 0) {   // if its the first column of the table.
//             // add a button control.
//             var button = document.createElement('input');

//             // set the attributes.
//             button.setAttribute('type', 'button');
//             button.setAttribute('value', 'Remove');

//             // add button's "onclick" event.
//             button.setAttribute('onclick', 'removeRow(this)');

//             td.appendChild(button);
//         }
//         else {
//             // the 2nd, 3rd and 4th column, will have textbox.
//             var ele = document.createElement('input');
//             ele.setAttribute('type', 'text');
//             ele.setAttribute('value', '');

//             td.appendChild(ele);
//         }
//     }
// }

// // function to delete a row.
// function removeRow(oButton) {
//     var empTab = document.getElementById('empTable');
//     empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
// }
//   // function to extract and submit table data.
//   function submit() {
//     var myTab = document.getElementById('empTable');
//     var arrValues = [];

//     // loop through each row of the table.
//     for (row = 1; row < myTab.rows.length ; row++) {
//       // loop through each cell in a row.
//         for (c = 0; c < myTab.rows[row].cells.length; c++) {  
//             var element = myTab.rows.item(row).cells[c];
//             if (element.childNodes[0].getAttribute('type') == 'text') {
//                 arrValues.push("'" + element.childNodes[0].value + "'");
               
//             }
//         }
//     }
//     // The final output.
//     document.getElementById('output').innerHTML = arrValues;
//     //console.log (arrValues);   // you can see the array values in your browsers console window. Thanks :-) 
// }

//--END --FORM Table Output--------------------


