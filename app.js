//==================== product item selected ====================
const mainProductImage = document.getElementById("main-product-image");
const productImages = document.querySelectorAll(".product-images");

//==================== product item loop and click event add ====================
for (let image of productImages) {
   image.addEventListener("click", function (product) {
      let productImageSrc = product.target.src;
      mainProductImage.src = productImageSrc;
      console.log(productImageSrc)
   });
}