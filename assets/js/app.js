document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

        // Typing effect
        document.addEventListener("DOMContentLoaded", function () {
          var el = document.querySelector(".typing-effect");
          var texts = [
            "Turning ideas into beautiful code...",
            "Passionate about UI/UX and frontend.",
            "Let's build something amazing together!",
          ];
          var idx = 0,
            charIdx = 0,
            typing = true;
          function type() {
            if (!el) return;
            if (typing) {
              if (charIdx < texts[idx].length) {
                el.textContent = texts[idx].slice(0, charIdx + 1);
                charIdx++;
                setTimeout(type, 55);
              } else {
                typing = false;
                setTimeout(type, 1200);
              }
            } else {
              if (charIdx > 0) {
                el.textContent = texts[idx].slice(0, charIdx - 1);
                charIdx--;
                setTimeout(type, 30);
              } else {
                typing = true;
                idx = (idx + 1) % texts.length;
                setTimeout(type, 400);
              }
            }
          }
          type();
        });
