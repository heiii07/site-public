function changeFav() {
    const noFill = document.getElementById("heart");
    const fill = document.getElementById("heart-fill");

    if (noFill.style.display === "none") {
        noFill.style.display = "block";
        fill.style.display = "none";
    } else {
        noFill.style.display = "none";
        fill.style.display = "block";
    }
}
function decrementProductPage() {
    if (document.getElementsByName("quantity")[0].value > 0) {
        document.getElementsByName("quantity")[0].value -= 1;
    }
    const input = document.getElementById("counterValue");
    if (input.value !== "" && (input.value <= "0")) {
        input.value = 1;
    }
}
function incrementProductPage() {
    document.getElementsByName("quantity")[0].value = parseInt(document.getElementsByName("quantity")[0].value) + 1;
}
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("product-image");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className += " active";
}

function redirect() {
    window.location.href = "../login/login.php";
}

function inputChange() {
    const input = document.getElementById("counterValue");
    if (input.value !== "" && (input.value <= "0")) {
        input.value = 1;
    }
}

function addToCart(product_number) {
    const quantity = parseInt(document.getElementById("counterValue").value, 10);
    cart.push({ product_number: product_number, quantity: quantity });
    uploadCart();
    cart = [];
    var button = document.getElementById("addToCart");
    var originalContent = button.innerHTML;
    button.innerHTML = "Added to cart";
    button.style.backgroundColor = "#D3D3D3";
    button.style.cursor = "default";
    document.getElementById("addToCart").disabled = true;
    setTimeout(function () {
        button.innerHTML = originalContent;
        button.style.backgroundColor = "#000";
        document.getElementById("addToCart").disabled = false
        button.style.cursor = "pointer"
    }, 3000
    )
}