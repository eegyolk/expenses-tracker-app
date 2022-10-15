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
          title: "Welcome",
          withBackButton: false,
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
          title: "Registration",
          withBackButton: true,
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
          title: "Account Verification",
          withBackButton: false,
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
          title: "Terms of Service",
          withBackButton: true,
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
          title: "Privacy Policy",
          withBackButton: true,
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
          title: "Sign In",
          withBackButton: true,
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
          title: "Forgot Password",
          withBackButton: true,
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
          title: "Password Recovery",
          withBackButton: false,
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
          title: "Password Recovery",
          withBackButton: false,
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
          title: "Home",
          withFooterToolbar: true,
          withBackButton: false,
          withAddButton: false,
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
          title: "Income",
          withFooterToolbar: true,
          withBackButton: false,
          withAddButton: true,
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
          title: "Add Income",
          withFooterToolbar: false,
          withBackButton: true,
          withAddButton: false,
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
        component: () => import("src/pages/Tracker/ExpensesPage.vue"),
        meta: {
          title: "Expenses",
          withFooterToolbar: true,
          withBackButton: false,
          withAddButton: true,
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
        component: () => import("src/pages/Tracker/InvestmentPage.vue"),
        meta: {
          title: "Investment",
          withFooterToolbar: true,
          withBackButton: false,
          withAddButton: true,
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
          title: "Profile",
          withFooterToolbar: true,
          withBackButton: false,
          withAddButton: false,
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
