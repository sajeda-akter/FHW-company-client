/* eslint-disable no-undef */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',

],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
