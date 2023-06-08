window.onload = function() {
    const openBtn = document.getElementById("open-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const toggleSizeBtn = document.getElementById("toggle-size-btn");
    const fileInput = document.getElementById("file-input");
    const imageContainer = document.getElementById("image-container");

    let images = [];
    let currentImageIndex = -1;
    let isLargeSize = false;

    openBtn.addEventListener("click", function() {
        fileInput.click();
    });

    fileInput.addEventListener("change", function() {
        const fileList = fileInput.files;
        images = Array.from(fileList).map(file => URL.createObjectURL(file));
        currentImageIndex = 0;
        showCurrentImage();
    });

    prevBtn.addEventListener("click", function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            showCurrentImage();
        }
    });

    nextBtn.addEventListener("click", function() {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
            showCurrentImage();
        }
    });

    toggleSizeBtn.addEventListener("click", function() {
        isLargeSize = !isLargeSize;
        showCurrentImage();
    });

    function showCurrentImage() {
        if (images.length > 0) {
            const imageURL = images[currentImageIndex];
            const imageSize = isLargeSize ? "1920x1080" : "600x600";
            imageContainer.innerHTML = `<img src="${imageURL}" alt="Image" width="${imageSize}" height="${imageSize}">`;
            updateButtonStates();
        } else {
            imageContainer.innerHTML = "";
            updateButtonStates();
        }
    }

    function updateButtonStates() {
        prevBtn.disabled = currentImageIndex === 0;
        nextBtn.disabled = currentImageIndex === images.length - 1;
    }
};
