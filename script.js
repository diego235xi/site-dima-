// ===== Configuração =====
// Substitua pelo número real da Dima (código do país + DDD + número, só dígitos).
const WHATSAPP_NUMBER = "5500000000000";

(function () {
  const waBase = "https://wa.me/" + WHATSAPP_NUMBER;
  document.querySelectorAll("[data-whatsapp]").forEach((a) => (a.href = waBase));

  document.getElementById("ano").textContent = new Date().getFullYear();

  // Header ao rolar
  const topbar = document.querySelector(".topbar");
  const onScroll = () => topbar.classList.toggle("is-scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menu mobile
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("menu");
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    nav.classList.toggle("is-open", open);
    topbar.classList.toggle("menu-open", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  // Animação de entrada
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 80 + "ms";
      io.observe(el);
    });
  } else {
    items.forEach((el) => el.classList.add("is-visible"));
  }

  // Ambientes: toque acende/apaga (celular)
  document.querySelectorAll(".room").forEach((room) => {
    room.addEventListener("click", () => room.classList.toggle("is-on"));
  });

  // Formulário -> WhatsApp
  const form = document.getElementById("contact-form");
  const note = form.querySelector(".form__note");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let ok = true;
    form.querySelectorAll("[required]").forEach((f) => {
      const invalid = !f.value.trim();
      f.classList.toggle("is-invalid", invalid);
      if (invalid) ok = false;
    });
    if (!ok) {
      note.textContent = "Preencha nome e telefone, por favor.";
      return;
    }
    const d = new FormData(form);
    const text =
      `Olá, Dima Iluminação! Meu nome é ${d.get("nome")}.\n` +
      `Telefone: ${d.get("telefone")}\n` +
      `Tipo de projeto: ${d.get("tipo")}\n` +
      (d.get("mensagem") ? `Mensagem: ${d.get("mensagem")}` : "");
    window.open(waBase + "?text=" + encodeURIComponent(text), "_blank", "noopener");
    note.textContent = "Abrindo o WhatsApp…";
    form.reset();
  });
})();
