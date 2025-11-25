/* Tailwind utility classes via CDN (DO NOT remove this comment) */

/* Ocean Theme - Dark Blue & Cyan */
:root {
  --brand-primary: #0284c7;      /* sky-600 */
  --brand-secondary: #0891b2;    /* cyan-600 */
  --brand-accent: #ea580c;       /* orange-600 */
  --brand-success: #059669;      /* emerald-600 */
  --brand-danger: #dc2626;       /* red-600 */
}

/* Updated Button - Ocean wave gradient */
.btn-brand {
  background: linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #0891b2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px -5px rgba(2, 132, 199, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn-brand:hover {
  transform: scale(1.05) rotate(-2deg);
  box-shadow: 0 20px 40px -10px rgba(2, 132, 199, 0.6);
}

/* Updated Card - Thick orange border with glow */
.card-custom {
  background: linear-gradient(to bottom right, #ffffff, #fef3c7);
  border: 4px solid var(--brand-accent);
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 0 0 8px rgba(234, 88, 12, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
}

.card-custom::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, #0284c7, #06b6d4, #0891b2);
}

/* Updated Text - Ocean gradient with bold shadow */
.text-brand {
  background: linear-gradient(135deg, #0284c7, #06b6d4, #0891b2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

/* New Custom Font - Montserrat */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');

body {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Updated Animation - Wave effect */
@keyframes wave {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
}

.animate-shimmer {
  animation: wave 3s ease-in-out infinite;
  background: linear-gradient(to right, transparent 0%, rgba(6, 182, 212, 0.4) 50%, transparent 100%);
  background-size: 200% 100%;
}