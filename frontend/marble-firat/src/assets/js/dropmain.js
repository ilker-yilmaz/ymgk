
function dropdrag() {
  document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });

    inputElement.addEventListener("change", (e) => {
      if (
        inputElement.files.length &&
        inputElement.files[0].type.startsWith("image/")
      ) {
        var file = inputElement.files[0];

      } else {
        window.alert("Lütfen geçerli dosya tipini seçiniz...");
      }
    });

    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });

    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });

    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();

      if (
        e.dataTransfer.files.length &&
        e.dataTransfer.files[0].type.startsWith("image/")
      ) {
        inputElement.files = e.dataTransfer.files;

        var file = e.dataTransfer.files[0];

      } else {
        window.alert("Lütfen geçerli dosya tipini seçiniz...");

      }

    });
  });
}

/**
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 * @param {Buffer} buffer
 */

