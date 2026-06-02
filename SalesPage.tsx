@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Poppins", ui-sans-serif, system-ui, sans-serif;
}

@keyframes infiniteScroll {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

.animate-infinite-scroll {
  display: flex;
  width: max-content;
  animation: infiniteScroll 35s linear infinite;
  will-change: transform;
}

.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

/* Botão CTA Verde Limão Focado em Altíssima Conversão */
.cta-btn {
  background-color: #a3e635 !important;
  color: #0f172a !important; /* Azul escuro/grafite para legibilidade máxima em cima de Verde Limão */
  box-shadow: 0 4px 15px rgba(163, 230, 53, 0.45) !important;
  transition: all 0.3s ease !important;
  border-radius: 9999px !important;
  border: none !important;
}

.cta-btn:hover {
  background-color: #bef264 !important; /* Um tom de verde limão mais fluorescente ao passar o mouse */
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 20px rgba(163, 230, 53, 0.6) !important;
  color: #0f172a !important;
}

