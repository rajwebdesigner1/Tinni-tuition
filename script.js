document.addEventListener('DOMContentLoaded', () => {
    const callIcon = document.getElementById('call-icon');
    const modal = document.getElementById('contactModal');
    const closeModal = document.querySelector('.close');
    const contactForm = document.getElementById('contactForm');
    const classSelect = document.querySelector('select[name="class"]');
    const subjectSelect = document.getElementById('subjectSelect');

    // Open modal
    callIcon.onclick = function() {
        modal.style.display = 'block';
    }

    // Close modal
    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    // Populate subject dropdown based on class selection
    classSelect.onchange = function() {
        const selectedClass = classSelect.value;
        subjectSelect.innerHTML = ''; // Clear previous options

        if (selectedClass === '3-10') {
            subjectSelect.innerHTML = `
                <option value="" disabled selected>Select Subject</option>
                <option value="science">Science</option>
                <option value="bio">Biology</option>
                <option value="phy">Physics</option>
                <option value="chem">Chemistry</option>
                <option value="math">Mathematics</option>
            `;
        } else if (selectedClass === '11-12') {
            subjectSelect.innerHTML = `
                <option value="" disabled selected>Select Subject</option>
                <option value="it">IT</option>
            `;
        }
    }
});
