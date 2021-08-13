<script>
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target =
            this.getAttribute("href").length > 1
              ? document.querySelector(this.getAttribute("href"))
              : document.body.firstElementChild;
          target.scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    </script>