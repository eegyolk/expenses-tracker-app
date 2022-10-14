const routes = [
  {
    path: "/",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "index",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },

  // BEGIN - Account Creation Pages
  {
    path: "/register",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "register",
        component: () =>
          import("src/pages/AccountCreation/RegistrationPage.vue"),
      },
    ],
  },

  {
    path: "/verify",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "verify",
        component: () =>
          import("src/pages/AccountCreation/VerificationPage.vue"),
      },
    ],
  },

  {
    path: "/terms",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "terms",
        component: () => import("src/pages/AccountCreation/TermsPage.vue"),
      },
    ],
  },

  {
    path: "/privacy-policy",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "privacy-policy",
        component: () =>
          import("src/pages/AccountCreation/PrivacyPolicyPage.vue"),
      },
    ],
  },
  // END - Account Creation Pages

  // BEGIN - Authentication Pages
  {
    path: "/login",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("src/pages/Authentication/LoginPage.vue"),
      },
    ],
  },
  // END - Authentication Pages

  // BEGIN - Account Recovery Pages
  {
    path: "/forgot-password",
    component: () => import("layouts/NoLayout.vue"),
    children: [
      {
        path: "",
        name: "forgot-password",
        component: () =>
          import("src/pages/AccountRecovery/ForgotPasswordPage.vue"),
      },
    ],
  },
  // END - Account Recovery Pages

  // BEGIN - Tracker Pages
  {
    path: "/tracker/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "tracker-home",
        component: () => import("src/pages/Tracker/HomePage.vue"),
      },
    ],
  },
  // END - Tracker Pages

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
