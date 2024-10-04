document.addEventListener("DOMContentLoaded", function() {
    const nextButtons = document.querySelectorAll(".next");
    const fieldsets = document.querySelectorAll(".msform fieldset");
    const progressItems = document.querySelectorAll("#progressbar li");
    let currentFieldset = 0;

    // Función para actualizar la barra de progreso
    function updateProgress() {
        progressItems.forEach((item, index) => {
            item.classList.remove("active");
            if (index < currentFieldset) {
                item.classList.add("active");
            }
        });
        progressItems[currentFieldset].classList.add("active");
    }

    nextButtons.forEach(button => {
        button.addEventListener("click", function() {
            const inputs = fieldsets[currentFieldset].querySelectorAll("input[required]");
            let allFilled = true;

            inputs.forEach(input => {
                if (!input.value) {
                    allFilled = false;
                    input.classList.add("error");
                } else {
                    input.classList.remove("error");
                }
            });

            if (allFilled) {
                fieldsets[currentFieldset].style.display = "none";
                currentFieldset++;
                fieldsets[currentFieldset].style.display = "block";
                updateProgress();
            }
        });
    });
});