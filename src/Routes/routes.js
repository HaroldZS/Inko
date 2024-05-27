export const routes = [
  { id: 1, to: "/", text: "Home", public: true },
  { id: 2, to: "/blogs", text: "Blogs", public: true },
  { id: 3, to: "/log-in", text: "Login", public: true, publicOnly: true },
  { id: 4, to: "/", text: "Logout", public: false },
];
