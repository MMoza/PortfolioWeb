const section = document.querySelector("#experience");

const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach(mutation => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {

            if (section.classList.contains("highlight")) {
                console.log('Se a�adi� la clase "highlight" a #experience');
                miFuncion();
            }
        }
    });
});

observer.observe(section, { attributes: true });

function miFuncion() {
    console.log("�La clase 'highlight' fue a�adida! Ejecutando l�gica...");
}