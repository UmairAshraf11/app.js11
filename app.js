// chapter 21--25  Q no 1
//var a = prompt("enter your first name")
//var b = prompt("enter your last name")
//var c ="welcom dear"+" "+ a+ " " + b
//alert(c)
// chapter 21--25  Q no 2
//var a = "My Favorite Mobile Phone Is :"
 //var b =  prompt("Enter your favorite moble phone model")
 //var n =a+""+b+"" +""+"<br>"+ "The length of string is :"+" "+ b.length

 //document.write(n)
 // chapter 21--25  Q no 3
 //var a = "pakistani" 
 ////var b = a.indexOf("n" )
 
 //document.write("The String Is :"+a+"<br>"+""+"The Index Of n Is :"+b)
 // chapter 21--25  Q no 4
 //var a= "Hello World"
 //var b = a.lastIndexOf("l")
 //document.write("String Is :"+""+a+"<br>"+""+"Last index of L is "+""+b)
 // chapter 21--25  Q no 5
 //var a = "pakistani"
 //var b = a.charAt("3")
 //document.write("String  Is :"+"  "  +a+"<br>"+""+"Chracter at index 3 is "+" "+b)
 // chapter 21--25  Q no 7
 //var a= "hayderabad"
 //document.write(" The String is "+"  "+a+" "+"<br>")
 //var b = a.replace("hayder","Islam")
 //document.write("After Replacement"  +" " +b)
 // chapter 21--25  Q no 8
 //var a = "Ali & Sami are best friends They play cricket and football together."
 //var b= a.replace("&","and")
 
 //document.write(b)
 // chapter 21--25  Q no 9//
 //var a = 5;
//var b = parseInt("a", 10);
//document.write(b)
 // chapter 21--25  Q no 10//
 //var a = "35.36"
 //var b = num.toString()
 //document.write(b)





 /// ch 26-30 Q no 1

//var a = prompt("Enter the number in possitive")
//var b = Math.round(a)
//var c = Math.floor(a)
//var d = Math.ceil(a)
//document.write("Number Is :"+" "+a+" <br>"+"Round Off Value"+" "+b+"<br>"+"Floor Value Is :" + " "+c+"<br>"+"Ceil Value Is :"+ " "+ d+"<br>")

/// ch 26-30 Q no 2
//var a = prompt("Enter the  number i negative")
//var b = Math.round(a)
//var c = Math.floor(a)
//var d = Math.ceil(a)
//document.write("Number Is :"+" "+a+" <br>"+"Round Off Value"+" "+b+"<br>"+"Floor Value Is :" + " "+c+"<br>"+"Ceil Value Is :"+ " "+ d)

/// ch 26-30 Q no 3
//var a = -4
//var b = 5
//var d =Math.abs(b)
//document.write("The Absolute Value Of 5 Is "+  "  " +b+"<br>")
//var c = Math.abs(a)
//document.write("The Absolute Value Of -4 Is "+  "  " +c)

/// ch 26-30 Q no 4

// var a = Math.floor( Math.random() + 3 ) +1;
// document.write('Random Dice Value ' + a+"<br>");
// var b = Math.floor( Math.random() + 5 ) +1;
// document.write('Random Dice Value ' + b);


/// ch 26-30 Q no 6

//var a = 100
//var c = Math.floor(Math.random() * 100) + 1;
//document.write("The Random Number Between 1 and 100 is "+ " "+c)
 

/// ch 26-30 Q no 7
//var a = prompt("Enter your weight in kgs")
//var b = "The Weight Of User Is "
//var c = b+""+a
//document.write(c)



/// ch 26-30 Q no 8//

//var secretNumber = prompt("enter secrate number")
 //if (guess == secretNumber)

                 // System.out.println("Your guess is correct. Congratulations!");

           // else if (guess < secretNumber)

                 // System.out

                       //      .println("Your guess is smaller than the secret number.");

            // else if (guess > secretNumber)

            //       System.out

            //                  .println("Your guess is greater than the secret number."); 





            /// ch 31-34 Q no 1//
            //var a = new Date ();
            //document.write(a)




              /// ch 31-34 Q no 2//+
              
/// DONE IN INDEX.HTML//////////////////////////////

              /// ch 31-34 Q no 5//
            //   var lastday = function(y,m){
            //       return  new Date(y, m +1, 0).getDate();
            //       }
            //       document.write(lastday(2020,6));
                  
                  /// ch 31-34 Q no 6//
                  //var a = new Date();
                 // document.write("Current date"+""+a+"<br>")
                 // var b = a.getMilliseconds(new Date)
                 // document.write("Elapsed milliSeconds since 1 feb 1970"  +"  "+b+"<br>")
  //var c = a.getMinutes(new Date)
 // document.write("Elapsed minutes since 1 feb 1970"  +"  "+c)
   /// ch 31-34 Q no 7//
//   function formatDate(date) {
//       var d = new Date(date);
//       var hh = d.getHours();
//       var m = d.getMinutes();
//       var s = d.getSeconds();
//       var dd = "AM";
//       var h = hh;
//       if (h >= 12) {
//       h = hh - 12;
//       dd = "PM";
//       }
//       if (h == 0) {
//       h = 12;
//       }
//       m = m < 10 ? "0" + m : m;
//       s = s < 10 ? "0" + s : s;
//       /* if you want 2 digit hours:
//       h = h<10?"0"+h:h; */
//       var pattern = new RegExp("0?" + hh + ":" + m + ":" + s);
//       var replacement = h + ":" + m;
//       /* if you want to add seconds
//       replacement += ":"+s; */
//       replacement += " " + dd;
//       return date.replace(pattern, replacement);
//       }
//       alert(formatDate("February 04, 2011 20:00:00"));




 /// ch 31-34 Q no 8//
 




 //var a = new  Date(" Jun 23 2020 07:00:07 GMT-0700 (Pacific Daylight Time)")
   //a.setDate(6)
   
 //alert(a)



 /// ch 31-34 Q no 12//
//  var a = new Date
//  alert("Current Date :"+" "+a)
//  var  a=  new Date
//  a.setFullYear(-100)
//  alert("100 years back ,it was"+"  "+a)

/// ch 31-34 Q no 13//
// var a = prompt("date of birth   year")
// var b = 2020
// var c = b - a
// document.write("your age is  "+c+"<br>")
// document.write("Birth Year is "+ " "+a)


/// ch 31-34 Q no 14//
//var a = "umair"

// document.write("Customer Name"+ " "+ a +"<br>")
// var b = "june"
// document.write("Current Month"+ " "+ b +"<br>")
// var c = 356
// document.write("Number of consumed units"+ " "+ c +"<br>")
// var d = 17
// document.write("charges per units"+ " "+ d +"<br>")
// var e = c *d
// document.write("PayAble Within Due Date "+ " "+ e +"<br>")
// var f = 500
// document.write("Late Pay Surcharge "+ " "+ f +"<br>")
// var g = e + f
// document.write("PayAble After  Due Date "+ " "+ g +"<br>")
 

/// ch 35-38 Q no 1//

//function current(){
 // document.write(new Date)

//}
//current()

/// ch 35-38 Q no 2//
// function first(Umair,Ashraf){
//   var a = prompt("enter your first name")
//   document.write("Welcome MR/MRS"+" "+a)
//   var b = prompt("enter your Last name")
//   document.write(b)
// }
// first()
/// ch 35-38 Q no 3//
// function add (a,b){
  
//  document.write( a+b)
  
// }
// add(+prompt("enter value"),+prompt("enter value"))
/// ch 35-38 Q no 4//
//function  operater (num1,num2){
  //document.write( num1 * num2)


//}
//operater(10,10)



/// ch 35-38 Q no 6//
function fac (){
  document.write(fact*5)
}
fac()