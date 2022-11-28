export default {
  computed: {
    hostURL() {
      return window.chatquickConfig.hostURL;
    },
    vapidPublicKey() {
      return window.chatquickConfig.vapidPublicKey;
    },
    enabledLanguages() {
      return window.chatquickConfig.enabledLanguages;
    },
    isEnterprise() {
      return window.chatquickConfig.isEnterprise === 'true';
    },
  },
};
