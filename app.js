import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

// expose current path to templates for active nav classes
app.use((req, res, next) => { res.locals.url = req.path; next(); });

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/our-brand", label: "Our Brand" },
  { href: "/solutions", label: "Solutions" },
  { href: "/newsroom", label: "Newsroom" },
  { href: "/contact", label: "Contact" }
];

const heroSlides = [
  {
    img: "/images/hero-1.png",
    pill: "We also serve homes directly through our BNB brand across the Indian subcontinent.",
    cta: { label: "Visit site", href: "#" },
    stat: "2.6 Million+ people around the world consume our oil daily"
  },
  {
    img: "/images/hero-2.png",
    pill: "Global sourcing, rigorous QA, consistent supply.",
    cta: { label: "Learn more", href: "#" },
    stat: "150+ SKUs across categories"
  },
  {
    img: "/images/hero-2.png",
    pill: "Private label & bulk manufacturing at scale.",
    cta: { label: "Talk to sales", href: "/contact" },
    stat: "40+ countries served"
  }
];

const render = (view) => (req, res) => res.render(view, { title: view === "index" ? "Home" : view.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()), nav, heroSlides });

app.get("/", render("index"));
app.get("/products", render("products"));
app.get("/who-we-are", render("who-we-are"));
app.get("/our-brand", render("our-brand"));
app.get("/solutions", render("solutions"));
app.get("/newsroom", render("newsroom"));
app.get("/contact", render("contact"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`➡ http://localhost:${PORT}`));
