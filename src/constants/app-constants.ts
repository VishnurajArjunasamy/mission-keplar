export const MENUS = {
  HOME: {
    NAME: "HOME",
    ROUTE: "",
  },
  ALLMOVIES: {
    NAME: "ALL MOVIES",
    ROUTE: "allMovies",
  },
  NOWSHOWING: {
    NAME: "NOW SHOWING",
    ROUTE: "showTime",
  },
};

export const SESSION = {
  LOGIN: {
    NAME: "LOGIN",
    ROUTE: "login",
  },
  LOGOUT: {
    NAME: "LOGOUT",
    ROUTE: "",
  },
};

export const LOGIN = {
  HEADING: "Login",
  MESSAGE:
    "Logging into CineFLEX will give you access to full videos and movies. You can sit back, relax and watch at your home.",
  FORM: {
    EMAIL: {
      NAME: "Email",
      REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      ERRMSG: "Enter a valid email",
    },
    PASSWORD: {
      NAME: "Password",
      REGEX: /^.{7,}$/,
      ERRMSG: "Password must be longer than 6 characters",
    },
  },
};

export const LOTTERY = {
  MESSAGE: "Your Mobile Number can win you exciting prizes",
  BTN_TXT: "I'm Feeling Lucky",
  WIN_MSG: "Hurray! You Won a free ticket to Blind Date on Wednseday",
  LOST_MDG: "Sorry :( Better Luck Next Time",
};

export const TRAILERS = {
  HEADING: "Trailers",
  SIGN_IN_PROMPT: "You need to sign in to view Trailers.",
  SIGN_IN_NOW: "Sign in Now",
  TRAILER_TITLE: "Sintel",
  TRAILER_DESC:
    "Sintel tells the story of a friendship between a girl named Sintel, a baby dragon and the desperate lengths she will go to when that friendship is taken from her.Sintel is created by Blender in 2010 as a pet project to demonstrate Blender capabilities.",
  WATCH_NOW: "WATCH NOW",
};
