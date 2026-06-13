import { getStorage } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-storage.js";

import { app } from "./config.js";

export const storage = getStorage(app);