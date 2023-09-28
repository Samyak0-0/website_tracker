let myLeads = []
let oldLeads = []

const inputBtn = document.querySelector("#input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")
const welcumEl = document.querySelector("#welcum-el")
const tabBtn = document.querySelector("#tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)


if (leadsFromLocalStorage) {
   myLeads = leadsFromLocalStorage
   render(myLeads)
}




deleteBtn.addEventListener("click", function() {
   localStorage.clear()
   myLeads = []
   render(myLeads)
})

inputBtn.addEventListener("click", function() {
   myLeads.push(inputEl.value)
   // console.log(myLeads)
   inputEl.value = ""

   localStorage.setItem("myLeads", JSON.stringify(myLeads))

   render(myLeads)
   
   
})

tabBtn.addEventListener("click", function() {
   chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
      myLeads.push(tabs[0].url)
   
      localStorage.setItem("myLeads", JSON.stringify(myLeads))
      render(myLeads)

   })

   // myLeads.push(tabs[0].url)
   
   // localStorage.setItem("myLeads", JSON.stringify(myLeads))
   // render(myLeads)
})


function render(leads) {
   let listItems = ""
   for(let i=0; i<leads.length; i++) {
      // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

      listItems += `
      <li>
         <a target='_blank' href='${leads[i]}'>${leads[i]}
         </a>
      </li>`
      
      // console.log(listItems)
   }
   ulEl.innerHTML = listItems
}
 
// also .createElement() and .append() but they are way harder so no thnx :)

console.log(myLeads)

// let a = document.querySelector("#a")
// function b() {
//    a.innerHTML += "Thanks for buying!!"
// }
// let myLeads = []
// const inputEl = document.getElementById("input-btn")
// a.innerHTML = '<button onclick="b()">Buy!</button>'

// template strings / literals
/* const recipitent = "James"
const sender = "Samyak Maharjan"
console.log(`
Hey ${recipitent}!!

How is it going? 

Cheers,
${sender}`) */

/*
truth/truthy val: any string, no, array except

flase/falsy val: "", 0, false, null, undefined, NaN(not a number)
*/

/* 
null --> how u as a developer signalizes emptyness
undefined --> how js signalizes emptiness
*/

/*
Checking if smth is truthy is falsy:

let trueOrFlase = Boolean("")
console.log(trueOrFalse)

*/

// function greetUser(username, necx, emoji) {
//    welcumEl.textContent = `Welcome back, ${username} 🙌 also ${necx} and ${emoji}`
// }

// greetUser("bruhjhhh", "nyo", "👀")
//              parameters
// function add(forst, secund) {
//    return forst + secund
// }
//             arguments
// console.log(add(34,587))
// console.log(add(4.9, 7))
const ths_an_arrey = ["yo", true]
function getfirst(arrey) {
   return arrey[0]
}

console.log(getfirst(ths_an_arrey))
