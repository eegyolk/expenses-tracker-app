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
          title: "",
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
          import("src/pages/account-creation/RegistrationPage.vue"),
        meta: {
          withBackButton: true,
          title: "",
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
          import("src/pages/account-creation/VerificationPage.vue"),
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
        component: () => import("src/pages/account-creation/TermsPage.vue"),
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
          import("src/pages/account-creation/PrivacyPolicyPage.vue"),
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
        component: () => import("src/pages/authentication/LoginPage.vue"),
        meta: {
          withBackButton: true,
          title: "",
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
          import("src/pages/account-recovery/ForgotPasswordPage.vue"),
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
          import("src/pages/account-recovery/VerificationPage.vue"),
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
          import("src/pages/account-recovery/ResetPasswordPage.vue"),
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
        component: () => import("src/pages/tracker/HomePage.vue"),
        meta: {
          withBackButton: false,
          title: "Home",
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
        component: () => import("src/pages/tracker/income/IndexPage.vue"),
        meta: {
          withBackButton: false,
          title: "Income",
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
        component: () => import("src/pages/tracker/income/AddPage.vue"),
        meta: {
          withBackButton: true,
          title: "Add Income",
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
        component: () => import("src/pages/tracker/expenses/IndexPage.vue"),
        meta: {
          withBackButton: false,
          title: "Expenses",
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
        component: () => import("src/pages/tracker/expenses/AddPage.vue"),
        meta: {
          withBackButton: true,
          title: "Add Expenses",
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
        component: () => import("src/pages/tracker/investment/IndexPage.vue"),
        meta: {
          withBackButton: false,
          title: "Investment",
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
        component: () => import("src/pages/tracker/investment/AddPage.vue"),
        meta: {
          withBackButton: true,
          title: "Add Investment",
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
        component: () => import("src/pages/tracker/ProfilePage.vue"),
        meta: {
          withBackButton: false,
          title: "Profile",
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
