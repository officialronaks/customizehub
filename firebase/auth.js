import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

import { app } from "./config.js";

export const auth = getAuth(app);