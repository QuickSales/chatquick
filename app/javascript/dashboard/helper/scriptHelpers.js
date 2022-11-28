import posthog from 'posthog-js';

export const CHATQUICK_SET_USER = 'CHATQUICK_SET_USER';
export const CHATQUICK_RESET = 'CHATQUICK_RESET';

export const ANALYTICS_IDENTITY = 'ANALYTICS_IDENTITY';
export const ANALYTICS_RESET = 'ANALYTICS_RESET';

export const initializeAnalyticsEvents = () => {
  window.bus.$on(ANALYTICS_IDENTITY, ({ user }) => {
    if (window.analyticsConfig) {
      posthog.identify(user.id, { name: user.name, email: user.email });
    }
  });

  window.bus.$on(ANALYTICS_RESET, () => {
    if (window.analyticsConfig) {
      posthog.reset();
    }
  });
};

export const initializeChatquickEvents = () => {
  window.bus.$on(CHATQUICK_RESET, () => {
    if (window.$chatquick) {
      window.$chatquick.reset();
    }
  });
  window.bus.$on(CHATQUICK_SET_USER, ({ user }) => {
    if (window.$chatquick) {
      window.$chatquick.setUser(user.email, {
        avatar_url: user.avatar_url,
        email: user.email,
        identifier_hash: user.hmac_identifier,
        name: user.name,
      });
      window.$chatquick.setCustomAttributes({
        signedUpAt: user.created_at,
        cloudCustomer: 'true',
      });
    }
  });
};
