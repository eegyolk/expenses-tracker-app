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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
