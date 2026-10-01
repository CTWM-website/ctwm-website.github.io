// KaTeX: render \( \) and \[ \] once the fonts and the DOM are ready.
document.addEventListener("DOMContentLoaded", function () {
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "$$",  right: "$$",  display: true },
        { left: "\\(", right: "\\)", display: false },
      ],
      throwOnError: false,
    });
  }

  // Autoplay looping videos only while they are on screen: a page of
  // simultaneously playing mp4s is the usual reason these pages feel slow.
  const vids = document.querySelectorAll("video[loop]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.play().catch(() => {});
        else e.target.pause();
      });
    }, { threshold: 0.25 });
    vids.forEach((v) => io.observe(v));
  }
});
