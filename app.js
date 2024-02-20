// Define a function named 'compile'
function compile() {
    // Retrieve references to HTML, CSS, JS, and code iframe elements
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;

    // Attach an event handler to the body element for keyup events
    document.body.onkeyup = function() {
        // Open the document of the code iframe
        code.open();
        // Write the concatenated HTML, CSS, and JS code into the code iframe document
        code.writeln(html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>");
        // Close the document of the code iframe
        code.close();
    };
};

// Call the compile function to execute it
compile();



document.addEventListener('DOMContentLoaded', function () {
    // Get all buttons and textareas
    const buttons = document.querySelectorAll('.button');
    const textareas = document.querySelectorAll('.sections textarea');

    // Add click event listener to each button
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Remove 'active' class from all buttons
            buttons.forEach(function (btn) {
                btn.classList.remove('active');
            });

            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Get the target textarea id from data-target attribute
            const targetId = button.getAttribute('data-target');
            console.log(targetId);

            // Hide all textareas
            textareas.forEach(function (textarea) {
                if(textarea.getAttribute("id") == targetId){
                    textarea.classList.add('textarea-active');
                }else{
                    textarea.classList.remove('textarea-active');
                }
            });

        });
    });
});