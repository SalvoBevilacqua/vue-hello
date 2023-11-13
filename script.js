const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      stringMessage: "Saaaalve!",
      text_class: "text-center m-5",
      img_class: "rounded mx-auto d-block",
      imgUrl: "https://hips.hearstapps.com/hmg-prod/images/ber-1-1556271580.jpg"
    };
  }
});

app.mount("#app");