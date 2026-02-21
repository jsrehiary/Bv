import './style.css'
import { HomePage } from './pages/home.ts'
import { VisualIdentity } from "./pages/about/visualIdentity.ts";
import { ValuesPage } from "./pages/about/values.ts";


function renderPage() {
  const path = window.location.pathname;

  let content = "";

  if (path === "/about/visual-identity") {
    content = VisualIdentity();
  } else if (path === "/about/values") {
    content = ValuesPage();
  } else {
    content = HomePage();
  }

  document.querySelector("#app")!.innerHTML = content;
}

renderPage();

window.addEventListener("popstate", renderPage);

export function navigate(path: string) {
  window.history.pushState({}, "", path);
  renderPage();
}