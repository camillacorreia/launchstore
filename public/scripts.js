const input = document.querySelector('input[name="price"]');
input.addEventListener("keydown", function(e) {

    setTimeout(function() {
        let { value } = e.target;

        value = value.replace(/\D/g,"");

        e.target.value = value;
    }, 1)
});