import { createRoot } from "react-dom/client";
import TabManager from "./components/TabManager";
const mountNode = document.createElement("div");
mountNode.id = "react-tab-manager";
document.body.appendChild(mountNode);

const root = createRoot(mountNode);
root.render(<TabManager />);

