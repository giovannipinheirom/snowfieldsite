#!/bin/bash
PAGES=(
  ""
  "metodologia"
  "sobre"
  "idiomas/ingles"
  "ingles-regular"
  "aulas-em-condominios"
  "aulas-corporativas"
  "intensivo-para-viagens"
  "preparatorios"
  "cursos"
  "cursos/ingles-regular"
  "teste-de-nivel"
  "contato"
  "politica-de-privacidade"
  "rota-inexistente"
)

for p in "${PAGES[@]}"; do
  name="${p//\//-}"
  if [ -z "$name" ]; then name="home"; fi

  # Desktop (1440px)
  google-chrome --headless --disable-gpu --no-sandbox --window-size=1440,900 --screenshot="screenshots/desktop-${name}.png" "http://localhost:3000/${p}" 2>/dev/null

  # Mobile (375px)
  google-chrome --headless --disable-gpu --no-sandbox --window-size=375,812 --screenshot="screenshots/mobile-${name}.png" "http://localhost:3000/${p}" 2>/dev/null

  echo "Captured: ${name}"
done
