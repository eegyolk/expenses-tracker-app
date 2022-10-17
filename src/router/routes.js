const routes = [
  {
    path: "/",
    component: () => import("src/layouts/NonTrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "index",
        component: () => import("pages/IndexPage.vue"),
        meta: {
          withBackButton: false,
          title: "Welcome",
        },
      },
    ],
  },

  // BEGIN - Account Creation Pages
  {
    path: "/register",
    component: () => import("src/layouts/NonTrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "register",
        component: () =>
          import("src/pages/AccountCreation/RegistrationPage.vue"),
        meta: {
          withBackButton: true,
          title: "Registration",
        },
      },
    ],
  },

  {
    path: "/verify-account",
    component: () => import("src/layouts/NonTrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "verify-account",
        component: () =>
          import("src/pages/AccountCreation/VerificationPage.vue"),
        meta: {
          withBackButton: false,
          title: "Account Verification",
        },
      },
    ],
  },

  {
    path: "/terms",
    component: () => import("src/layouts/NonTrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "terms",
        component: () => import("src/pages/AccountCreation/TermsPage.vue"),
        meta: {
          withBackButton: true,
          title: "Terms of Service",
        },
      },
    ],
  },

  {
    path: "/privacy-policy",
    component: () => import("src/layouts/NonTrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "privacy-policy",
        component: () =>
          import("src/pages/AccountCreation/PrivacyPolicyPage.vue"),
        meta: {
          withBackButton: true,
          title: "Privacy Policy",
        },
      },
    ],
  },
  // END - Account Creation Pages

  // BEGIN - Authentication Pages
  {
    path: "/login",
    component: () => import("src/layouts/NonTrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("src/pages/Authentication/LoginPage.vue"),
        meta: {
          withBackButton: true,
          title: "Sign In",
        },
      },
    ],
  },
  // END - Authentication Pages

  // BEGIN - Account Recovery Pages
  {
    path: "/forgot-password",
    component: () => import("src/layouts/NonTrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "forgot-password",
        component: () =>
          import("src/pages/AccountRecovery/ForgotPasswordPage.vue"),
        meta: {
          withBackButton: true,
          title: "Forgot Password",
        },
      },
    ],
  },

  {
    path: "/verify-reset",
    component: () => import("src/layouts/NonTrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "verify-reset",
        component: () =>
          import("src/pages/AccountRecovery/VerificationPage.vue"),
        meta: {
          withBackButton: false,
          title: "Password Recovery",
        },
      },
    ],
  },

  {
    path: "/reset-password",
    component: () => import("src/layouts/NonTrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "reset-password",
        component: () =>
          import("src/pages/AccountRecovery/ResetPasswordPage.vue"),
        meta: {
          withBackButton: false,
          title: "Password Recovery",
        },
      },
    ],
  },
  // END - Account Recovery Pages

  // BEGIN - Tracker Pages
  {
    path: "/tracker/home",
    component: () => import("src/layouts/TrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "tracker-home",
        component: () => import("src/pages/Tracker/HomePage.vue"),
        meta: {
          withBackButton: false,
          title: "Home",
          withAddButton: false,
          withFooterToolbar: true,
        },
      },
    ],
  },

  {
    path: "/tracker/income",
    component: () => import("src/layouts/TrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "tracker-income",
        component: () => import("src/pages/Tracker/Income/IndexPage.vue"),
        meta: {
          withBackButton: false,
          title: "Income",
          withAddButton: true,
          withFooterToolbar: true,
        },
      },
    ],
  },
  {
    path: "/tracker/income/add",
    component: () => import("src/layouts/TrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "tracker-income-add",
        component: () => import("src/pages/Tracker/Income/AddPage.vue"),
        meta: {
          withBackButton: true,
          title: "Add Income",
          withAddButton: false,
          withFooterToolbar: false,
        },
      },
    ],
  },

  {
    path: "/tracker/expenses",
    component: () => import("src/layouts/TrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "tracker-expenses",
        component: () => import("src/pages/Tracker/Expenses/IndexPage.vue"),
        meta: {
          withBackButton: false,
          title: "Expenses",
          withAddButton: true,
          withFooterToolbar: true,
        },
      },
    ],
  },
  {
    path: "/tracker/expenses/add",
    component: () => import("src/layouts/TrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "tracker-expenses-add",
        component: () => import("src/pages/Tracker/Expenses/AddPage.vue"),
        meta: {
          withBackButton: true,
          title: "Add Expenses",
          withAddButton: false,
          withFooterToolbar: false,
        },
      },
    ],
  },

  {
    path: "/tracker/investment",
    component: () => import("src/layouts/TrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "tracker-investment",
        component: () => import("src/pages/Tracker/Investment/IndexPage.vue"),
        meta: {
          withBackButton: false,
          title: "Investment",
          withAddButton: true,
          withFooterToolbar: true,
        },
      },
    ],
  },
  {
    path: "/tracker/investment/add",
    component: () => import("src/layouts/TrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "tracker-investment-add",
        component: () => import("src/pages/Tracker/Investment/AddPage.vue"),
        meta: {
          withBackButton: true,
          title: "Add Investment",
          withAddButton: false,
          withFooterToolbar: false,
        },
      },
    ],
  },

  {
    path: "/tracker/profile",
    component: () => import("src/layouts/TrackerLayout.vue"),
    children: [
      {
        path: "",
        name: "tracker-profile",
        component: () => import("src/pages/Tracker/ProfilePage.vue"),
        meta: {
          withBackButton: false,
          title: "Profile",
          withAddButton: false,
          withFooterToolbar: true,
        },
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
