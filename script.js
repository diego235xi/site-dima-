// ===== Configuração =====
// WhatsApp da Dima (código do país + DDD + número, só dígitos).
const WHATSAPP_NUMBER = "5583993706527";

(function () {
  const waBase = "https://wa.me/" + WHATSAPP_NUMBER;

  // Links de WhatsApp. data-whatsapp="mensagem" abre a conversa com o texto pronto.
  // Sem JavaScript, os links continuam levando à seção de contato (#contato).
  document.querySelectorAll("[data-whatsapp]").forEach((a) => {
    const msg = a.getAttribute("data-whatsapp");
    a.href = msg ? waBase + "?text=" + encodeURIComponent(msg) : waBase;
    a.target = "_blank";
    a.rel = "noopener";
  });

  document.getElementById("ano").textContent = new Date().getFullYear();

  // Borda do cabeçalho ao rolar
  const topbar = document.querySelector(".topbar");
  const onScroll = () => topbar.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menu mobile
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("menu");
  const mobile = window.matchMedia("(max-width: 960px)");
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-lock", open);
    if (open) requestAnimationFrame(() => nav.querySelector("a").focus());
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => mobile.matches && setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (!nav.classList.contains("is-open")) return;
    if (e.key === "Escape") {
      setMenu(false);
      toggle.focus();
    }
    // Mantém o Tab dentro do menu aberto (links + botão de fechar)
    if (e.key === "Tab") {
      const items = [...nav.querySelectorAll("a"), toggle];
      const i = items.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); items[items.length - 1].focus(); }
      else if (!e.shiftKey && i === items.length - 1) { e.preventDefault(); items[0].focus(); }
    }
  });
  mobile.addEventListener("change", () => setMenu(false));

  // Formulário -> WhatsApp
  const form = document.getElementById("contact-form");
  const note = form.querySelector(".form__note");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let firstInvalid = null;
    form.querySelectorAll("[required]").forEach((f) => {
      const invalid = !f.value.trim();
      f.classList.toggle("is-invalid", invalid);
      f.setAttribute("aria-invalid", String(invalid));
      if (invalid && !firstInvalid) firstInvalid = f;
    });
    if (firstInvalid) {
      note.textContent = "Preencha nome e telefone, por favor.";
      firstInvalid.focus();
      return;
    }
    const d = new FormData(form);
    const text =
      `Olá, Dima! Meu nome é ${d.get("nome")}.\n` +
      `Telefone: ${d.get("telefone")}\n` +
      `${d.get("tipo")}.\n` +
      (d.get("mensagem") ? `Procuro: ${d.get("mensagem")}` : "");
    window.open(waBase + "?text=" + encodeURIComponent(text), "_blank", "noopener");
    note.textContent = "Abrindo o WhatsApp…";
    form.reset();
  });
})();
