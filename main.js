// Wait for the browser to finish loading the HTML
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DYNAMIC GREETING (For index.html) ---
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        const hour = new Date().getHours();
        if (hour < 12) {
            greetingElement.innerText = "Good Morning!";
        } else if (hour < 18) {
            greetingElement.innerText = "Good Afternoon!";
        } else {
            greetingElement.innerText = "Good Evening!";
        }
    }

    // --- 2. CHECKLIST INTERACTIVITY ---
    // This finds every checkbox on the page
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Find the parent label (the .task-item)
            const parentLabel = this.closest('.task-item');
            
            if (this.checked) {
                // Add the 'completed' class from our CSS
                parentLabel.classList.add('completed');
            } else {
                // Remove it if unchecked
                parentLabel.classList.remove('completed');
            }
        });
    });
});

// --- 3. REFLECTION SAVER (For reflection.html) ---
// This function is called by the 'onclick' attribute in your HTML button
function saveReflection() {
    const textArea = document.getElementById('daily-win');
    
    if (textArea && textArea.value.trim() !== "") {
        alert("Great job! Your reflection has been saved. ✨");
        textArea.value = ""; // Clear the box after saving
    } else {
        alert("Please write at least one win before completing the day!");
    }
}
