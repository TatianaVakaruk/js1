export const callbackPrompt = {
  // put your code here
  message: "Tell me your number",
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};
callbackPrompt.showDeferredPrompt(2000);
