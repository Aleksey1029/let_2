// let days = document.querySelectorAll(".timer_value")[0]
// let hours = document.querySelectorAll(".timer_value")[1]
// let minuts = document.querySelectorAll(".timer_value")[2]
// let seconds = document.querySelectorAll('.timer_value')[3]

// deadlineDate = new Date(2024,1,2,23,59,59)

// function countDown() {
//     let newDate= new Date()
//     let resultDate = deadlineDate - newDate
//         if (resultDate <= 0) {

//         }
//         else {
//             let daysValue = Math.floor(resultDate/(24*60*60*1000))
//             let hoursValue = Math.floor((resultDate % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
//             let minutsValue = Math.floor((resultDate%(60*60*1000))/(60*1000))
//             let secondsValue = Math.floor((resultDate%(60*1000))/1000)
//             days.innerHTML = daysValue
//             hours.innerHTML = hoursValue
//             minuts.innerHTML = minutsValue
//             seconds.innerHTML = secondsValue
//         }
// }

// let timer = setInterval(countDown, 1000)