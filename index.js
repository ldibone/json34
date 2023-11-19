function showRemainingTime() {
    let selectedDate = new Date(document.getElementById('dateInput').value)
    const currentDate = new Date()
    if (selectedDate > currentDate) {
        let timeRemaining = selectedDate - currentDate
        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
        let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

        document.getElementById('countdown').innerHTML = "Time left: " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
    } else {
        alert("Please select a date from future")
    }
}

document.getElementById('dateInput').min = new Date().toISOString().split("T")[0]
