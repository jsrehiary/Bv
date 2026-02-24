import './style.css';
import page from 'page';

import { HomePage } from './pages/home'
import { VisualIdentity } from "./pages/about/visualIdentity"
import { ValuesPage } from "./pages/about/values"
import { ContactSection } from "./pages/contact"
import { DKVPage } from "./pages/division/dkvPage"
import { PemkarPage } from './pages/division/pemkarPage';
import { SosmasPage } from './pages/division/sosmasPage';
import { LitbangPage } from './pages/division/litbang';
import { PedankPage } from './pages/division/pedank';
import { SenbudPage } from './pages/division/senbud';
import { DeporPage } from './pages/division/depor';

const app = document.querySelector("#app")!

function render(content: string) {
  app.innerHTML = content
}

/* ================= ROUTES ================= */

page("/", () => {
  render(HomePage())
})

page("/about/visual-identity", () => {
  render(VisualIdentity())
})

page("/about/values", () => {
  render(ValuesPage())
})

page("/contact", () => {
  render(ContactSection())
})

page("/biro-dkv", () => {
  render(DKVPage())
})

page("/pemkar", () => {
  render(PemkarPage())
})

page("/sosmas", () => {
  render(SosmasPage())
})

page("/litbang", () => {
  render(LitbangPage())
})

page("/pedank", () => {
  render(PedankPage())
})

page("/senbud", () => {
  render(SenbudPage())
})

page("/depor", () => {
  render(DeporPage())
})

/* ================= START ROUTER ================= */

page()

window.addEventListener("popstate", page);

export function navigate(path: string) {
  window.history.pushState({}, "", path);
  page();
}
