document.addEventListener('DOMContentLoaded', () => {

    // --- 1. NAME SETTING & GREETING ---
    const greetingElement = document.getElementById('greeting');
    
    if (greetingElement) {
        // Check if we already have a name saved
        let userName = localStorage.getItem('flowUserName');

        // If no name is saved, ask for it
        if (!userName) {
            userName = prompt("Welcome! What is your name?");
            if (userName) {
                localStorage.setItem('flowUserName', userName);
            } else {
                userName = "Friend"; // Fallback if they hit cancel
            }
        }

        const hour = new Date().getHours();
        let timeGreeting = "";

        if (hour < 12) timeGreeting = "Good Morning";
        else if (hour < 18) timeGreeting = "Good Afternoon";
        else timeGreeting = "Good Evening";

        // Display the greeting with the name
        greetingElement.innerText = `${timeGreeting}, ${userName}!`;
    }

    // --- 2. CHECKLIST INTERACTIVITY ---
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const parentLabel = this.closest('.task-item');
            if (this.checked) {
                parentLabel.classList.add('completed');
            } else {
                parentLabel.classList.remove('completed');
            }
        });
    });
});

// --- 3. REFLECTION SAVER ---
function saveReflection() {
    const textArea = document.getElementById('daily-win');
    const userName = localStorage.getItem('flowUserName') || "Friend";
    
    if (textArea && textArea.value.trim() !== "") {
        alert(`Great job, ${userName}! Your reflection has been saved. ✨`);
        textArea.value = ""; 
    } else {
        alert("Please write at least one win before completing the day!");
    }
}

// --- OPTIONAL: RESET NAME ---
// If you want to allow them to change their name, you can call this function
function resetName() {
    localStorage.removeItem('flowUserName');
    location.reload(); // Refresh the page to trigger the prompt again
}
