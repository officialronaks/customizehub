import {
    db,
    doc,
    getDoc
} from "../../firebase/firestore.js";

async function loadSettings() {

    const docRef = doc(db, "settings", "site");

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

        const data = docSnap.data();

        document.getElementById("siteName").innerText =
            data.siteName || "CustomizeHub";

        document.getElementById("heroTitle").innerText =
            data.heroTitle || "";

        document.getElementById("heroSubtitle").innerText =
            data.heroSubtitle || "";

    } else {

        console.log("settings/site not found");

    }

}

loadSettings();