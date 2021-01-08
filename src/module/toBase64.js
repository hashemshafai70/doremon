export default function toBase64WithCropper(e){
    const file = e.target.files[0];
    if (file.type.indexOf("image/") === -1) {
      alert("Please select an image file");
      return;
    }
    if (typeof FileReader === "function") {
      this.croperDialog = true;
      const reader = new FileReader();
      reader.onload = event => {
        this.imgSrc = event.target.result;
        // rebuild cropperjs with the updated source
        this.$refs.cropper.replace(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Sorry, FileReader API not supported");
    }
}