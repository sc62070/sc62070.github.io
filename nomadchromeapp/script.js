document.addEventListener("DOMContentLoaded", function () {
    // Real-time clock
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock();

    // Local storage for To-Do list
    const todoList = document.getElementById("todoList");
    const newTodoInput = document.getElementById("newTodo");

    function addTodo() {
        const newTodoText = newTodoInput.value.trim();
        if (newTodoText !== "") {
            const li = document.createElement("li");
            li.textContent = newTodoText;
            todoList.appendChild(li);
            newTodoInput.value = "";
        }
    }

    // Geolocation and Weather (You'll need a weather API for accurate information)
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // Use a weather API to get the weather information based on latitude and longitude
        // For example, you can use OpenWeatherMap API or any other weather API of your choice
        // Update the #location and #weather elements accordingly
    }

    getLocation();
});
