import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  acid: "acid",
  dracula: "dracula",
};

// Correct the default theme value retrieval
const getThemeLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.acid; // Fix here
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      const { user } = action.payload;
      console.log(user);
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logOut: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logging out...");
    },
    toggleTheme: (state) => {
      const { dracula, acid } = themes;
      state.theme = state.theme === dracula ? acid : dracula;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logOut, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
