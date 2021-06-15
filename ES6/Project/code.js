// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ['Indigo','Orange','Red', 'Blue', 'Green', 'Yellow', 'Purple']


// // Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
class Person{
    constructor(fName,lName){
        this.fName=fName;
        this.lName=lName;
    }
}
const names = [
    new Person("Vaishnavi","Bandaru"),
    new Person("Karthik", "Marg"),
    new Person( "Maria","Pasala"),
    new Person("Chitra","Talari"),
    new Person("Shiva","Bandaru")
]


//random generator function.
const randomGenerator = (min=0, max=100) => Math.floor( parseInt(min) + parseInt(Math.random() * (max - min + 1)))

//random number between 1-100
const functn1 = (() => { document.getElementById("p1").innerHTML =  randomGenerator() })

//random number between "Start" and "End"
const functn2 = (()=> {
    const minN = document.getElementById("min").value
    const maxN = document.getElementById("max").value    
    document.getElementById("p2").innerHTML = randomGenerator(minN, maxN)
    if (minN=="" || maxN==""){document.getElementById("p2").innerHTML="Please fill the textboxes." }})

//long Lorem Ipsum String
const functn3 =(()=> { document.getElementById("p3").innerHTML = lorem })

//Lorem Ipsum String based on the number or sentences specified
const functn4=(()=>{
    const number = document.getElementById("num1").value
    const newLorem = lorem.split(".");
    var a = ""
    for (let i = 0; i < number; i++) {
        a = a + newLorem[i] + " | \n";
    }
    document.getElementById("p4").innerHTML = a;
    if (number == "") 
        document.getElementById("p4").innerHTML = "Enter a number in the textbox.";
})

//Lorem Ipsum String based on the number or character specified
const functn5=(()=> {
    const number = document.getElementById("num2").value
    const newLorem = lorem.split("");
    var a = ""
    for (let i = 0; i < number; i++) {
        a = a + newLorem[i] + " - \n";
    }
    document.getElementById("p5").innerHTML = a;
    if (number == "") document.getElementById("p5").innerHTML = "Enter a number in the textbox.";
})

//formatted current date
const functn6= (()=>{
    const dat = new Date();
    document.getElementById("p6").innerHTML = dat + "\n --- And the normal date is :" + dat.getDate() + "-" + dat.getMonth() + "-" + dat.getFullYear();
    
})

//formatted current time
const functn7=(()=> {
    const dat = new Date()
    let hr = dat.getHours()
    let min = dat.getMinutes()
    let ampm
    if (hr < 12){
        ampm = "AM"
        if (hr < 10) 
            hr = "0" + hr
    } 
    else if (hr > 12)
    {
        ampm = "PM"
        hr = hr - 12
    }    
    if (min < 10) min = "0" + min
    let a = hr + ":" + min + " " + ampm;
    document.getElementById("p7").innerHTML = a;
})

// Converts Inches to Feet
const InchToFeets=(()=> {
    const inn = document.getElementById("i2f").value
    document.getElementById("p8").innerHTML =  inn * 0.08334
})

//Converts Feet to Inches
const FeetsToInch=(() =>{
    let feet = document.getElementById("f2i").value
    document.getElementById("p9").innerHTML = feet * 12})

//Compares if two words are of same length
const sameLengthComparison=(() => {
    let comp1 = document.getElementById("comp1").value
    let comp2 = document.getElementById("comp2").value
    comp1 = parseInt(comp1.length)
    comp2 = parseInt(comp2.length)

    console.log(comp1 + " " + comp2)
    if (comp1 > comp2) {
        document.getElementById("p10").innerHTML = "String 1 is greater in length."
    }
    else if (comp1 < comp2) {
        document.getElementById("p10").innerHTML = "String 2 is greater in length."
    }
    else if (comp1 == comp2) {
        document.getElementById("p10").innerHTML = "String 1 and String 2 are equal in length."
    }
})

//returns a random password
const randomPassword=(()=> {
    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ '
    chars = chars.split("")
    console.log(chars)
    //lenght 8
    var a = ""
    for (let i = 0; i < 8; i++) {
        var m = randomGenerator(1, 63)
        console.log(chars[m])
        if (chars[m] == undefined) {
            a = a + "L"
            continue
        }
        a = a + chars[m];
    }
    document.getElementById("p11").innerHTML = a + " --- Size of password using 8 lenght "
})

//checks if the number is even or odd

const evenOdd=(()=> {
    let check = document.getElementById("evenodd").value
    if ((check == NaN) || (check == "") || (check == " ")) {
        a = "Enter an integer value not a character or string."
    }
    if ((check % 2) == 1) a = "It is an Odd Number"
    if ((check % 2) == 0) a = "It is an Even Number"
    document.getElementById("p12").innerHTML = a
})

//returns random color
const randomColorGen=(() => {
    const ran = randomGenerator(0, 6)
    document.getElementById("p13").innerHTML = colors[ran]
})

//returns a random first name and last name
const randomNames=(() =>{  
    const name = names[randomGenerator(undefined,names.length-1)]
    document.getElementById("p14").innerHTML = " First Name: " + name.fName + " Last Name: " + name.lName
})



