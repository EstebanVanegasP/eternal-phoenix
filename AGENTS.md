# CODEX — Configuración y prompt para landing page Eternal Phoenix

Repositorio objetivo: `https://github.com/EstebanVanegasP/eternal-phoenix.git`

Este archivo sirve para pegarlo como contexto en Codex o guardarlo como `AGENTS.md` / `CODEX.md` dentro del repositorio.  
Objetivo: montar una **landing page premium de reclutamiento** para la comunidad **Eternal Phoenix**, con estética oscura, fuego/dorado, tono ceremonial, UI dinámica y animaciones modernas.

---

## 1. Rol que debe asumir Codex

Actúa como **Senior Frontend Engineer + UI/UX Motion Designer**, especializado en landing pages premium para comunidades gamer, interfaces fantasy/esports, microinteracciones, animaciones web modernas, responsive design y accesibilidad.

Tu trabajo no es crear una página genérica. Debes construir una landing page con identidad visual fuerte, basada en:

- Comunidad gamer de **Mobile Legends: Bang Bang**.
- Reclutamiento para comunidad general y Equipo Pro.
- Estética **oscura, ceremonial, dorada, fuego, fénix, pergamino, fantasía competitiva**.
- Marca: **Eternal Phoenix**.
- Frase madre: **“Renace. Compite. Asciende.”**

---

## 2. Reglas de trabajo no negociables

1. **No inventes información sensible ni personal.**
2. **No publiques números, correos, nombres privados ni datos de postulantes.**
3. **No presentes Eternal Phoenix como marca oficial de Mobile Legends, Moonton o terceros.**
4. Agrega en el footer una nota discreta:  
   `Eternal Phoenix es una comunidad independiente de jugadores. No está afiliada oficialmente a Mobile Legends: Bang Bang ni a Moonton.`
5. Si el repositorio ya tiene estructura, **respétala** y mejora sin romper.
6. Antes de modificar, inspecciona el proyecto:
   - `package.json`
   - estructura de carpetas
   - framework usado
   - dependencias
   - scripts disponibles
7. No hagas backend. Esta landing es **frontend-first**.
8. El CTA principal debe llevar al formulario de postulación:
   `https://docs.google.com/forms/d/e/1FAIpQLSfq0pVJN0mlWvCZjUW-yarvfXI6oW1IswTOgYZuznnTxMl_cA/viewform`
9. La web debe ser responsive, accesible y rápida.
10. Si agregas animaciones, deben respetar `prefers-reduced-motion`.

---

## 3. Stack recomendado

Si el repositorio está vacío o no tiene estructura clara, crear:

- **Vite + React + TypeScript**
- **Tailwind CSS**
- **Framer Motion** para animaciones declarativas
- **Lucide React** para íconos limpios
- **React Router** solo si se necesita navegación interna; preferible landing de una sola página
- CSS propio para partículas, brillos, bordes y texturas

Dependencias sugeridas:

```bash
npm install framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
```

Si ya existe otro stack, adapta la solución sin rehacer todo innecesariamente.

---

## 4. Identidad de marca

### Nombre

**Eternal Phoenix**

### Versión ceremonial

`꧁🔥 𝕰𝖙𝖊𝖗𝖓𝖆𝖑 𝕻𝖍𝖔𝖊𝖓𝖎𝖝 🔥꧂`

### Versión corta

**EPX**

### Sello

**EPX | Comunidad MLBB**

### Frase madre

**Renace. Compite. Asciende.**

### Concepto

Eternal Phoenix es una comunidad de Mobile Legends creada para reunir jugadores, formar equipos, organizar actividades y construir un entorno competitivo con respeto, disciplina y visión de crecimiento.

La landing debe vender una experiencia:

**Entrar → presentarse → mejorar → ser evaluado → competir → representar.**

---

## 5. Paleta visual

Usar variables CSS o tokens Tailwind extendidos.

```css
:root {
  --ep-black: #120807;
  --ep-brown: #27100B;
  --ep-orange: #F26A1B;
  --ep-amber: #FFB23F;
  --ep-gold: #D8A84F;
  --ep-bronze: #7A3518;
  --ep-crimson: #8F1D12;
  --ep-ivory: #FFF1D2;
  --ep-parchment: #E8C995;
  --ep-violet: #6F2DA8;
}
```

Gradientes recomendados:

```css
--ep-gradient-hero: linear-gradient(135deg, #FFB23F, #F26A1B, #8F1D12);
--ep-gradient-bg: radial-gradient(circle at top, #7A3518 0%, #27100B 35%, #120807 100%);
--ep-gradient-premium: linear-gradient(135deg, #E8C995, #D8A84F, #7A3518);
```

---

## 6. Tipografía sugerida

Usar Google Fonts o fuentes web seguras.

Recomendación:

- Títulos ceremoniales: `Cinzel Decorative`, `Cinzel`, serif.
- Títulos de sección: `Cinzel`, `Marcellus`, serif.
- Texto normal: `Inter`, `Manrope`, sans-serif.
- Métricas / etiquetas: `Rajdhani`, `Montserrat`, sans-serif.

Regla:  
La tipografía gótica o ceremonial debe usarse solo en títulos grandes. El texto funcional debe ser limpio y legible.

---

## 7. Dirección visual

La web debe sentirse:

- Oscura.
- Premium.
- Ceremonial.
- Gamer competitiva.
- Fuego/dorado.
- Ordenada.
- Moderna.
- Con profundidad visual.

Evitar:

- Neon genérico.
- Estética infantil.
- Saturación excesiva.
- Texto ilegible sobre imágenes.
- Collages cargados.
- Dependencia directa de héroes oficiales como identidad principal.

Usar elementos propios:

- Fénix original.
- Alas.
- Brasas.
- Partículas.
- Bordes ornamentales.
- Pergamino.
- Escudos.
- Líneas doradas.
- Cards glass/dark.
- Gradientes tipo fuego.
- Efectos de ascenso.

---

## 8. Estructura obligatoria de la landing

### 8.1 Navbar

Elementos:

- Logo / marca: `Eternal Phoenix`
- Links:
  - Inicio
  - Comunidad
  - Equipo Pro
  - Proceso
  - Reglas
  - Postularme

Comportamiento:

- Sticky / fixed.
- Fondo glass oscuro.
- Borde inferior dorado sutil.
- Efecto al hacer scroll.
- Menú mobile tipo drawer o desplegable.

---

### 8.2 Hero section

Debe ser la sección más impactante.

Contenido:

```txt
Eternal Phoenix
Renace. Compite. Asciende.

Comunidad de Mobile Legends donde el talento, la disciplina y el espíritu de equipo se convierten en progreso competitivo.
```

Botones:

- `Postularme al Equipo Pro` → Google Form
- `Conocer la Comunidad` → sección Comunidad

Elementos visuales:

- Fénix central o silueta de fénix.
- Brasas animadas.
- Luz dorada radial.
- Tarjetas pequeñas:
  - Comunidad organizada
  - Tryouts y seguimiento
  - Camino competitivo

Animaciones:

- Entrada del título con `opacity + y`.
- Fénix con flotación sutil.
- Brasas moviéndose en background.
- Botón con brillo animado.
- Parallax suave.

---

### 8.3 ¿Qué es Eternal Phoenix?

Copy base:

```txt
Eternal Phoenix es una comunidad de Mobile Legends creada para jugadores que quieren crecer, competir y formar parte de algo más grande que una partida.

Aquí reunimos convivencia, reclutamiento, evaluación y formación competitiva bajo una misma identidad: el renacer constante del jugador.
```

Diseño:

- Dos columnas en desktop.
- Texto a la izquierda.
- Card visual a la derecha con escudo/fénix.
- Métricas visuales no inventadas. Usar etiquetas cualitativas:
  - Comunidad
  - Reclutamiento
  - Equipo Pro
  - Eventos

---

### 8.4 Rutas de participación

Tres cards:

1. **Comunidad General**  
   Para convivir, jugar, encontrar squad, participar en eventos y crecer dentro de la comunidad.

2. **Equipo Pro + Leyenda**  
   Cantera menor para jugadores con potencial competitivo y proceso de mejora.

3. **Equipo Pro + Honorario**  
   Cantera mayor para jugadores más consistentes y candidatos a representar oficialmente a Eternal Phoenix.

Cada card debe tener:

- Ícono.
- Título.
- Descripción.
- Hover con borde dorado y glow.
- Microanimación de elevación.

---

### 8.5 Camino del jugador

Timeline vertical o horizontal responsive.

Etapas:

1. Postulación
2. Revisión
3. Preselección
4. Tryout
5. Observación
6. Aprobación
7. Roster

Descripciones:

- Postulación: ingreso de datos y evidencias.
- Revisión: validación de perfil, rango y conducta.
- Preselección: cumple criterios mínimos y avanza.
- Tryout: prueba práctica de rendimiento y comunicación.
- Observación: seguimiento y evaluación de mejora.
- Aprobación: ingreso oficial a la estructura competitiva.
- Roster: integración al equipo o cantera activa.

Animación:

- La línea del timeline debe iluminarse al hacer scroll.
- Cada etapa aparece con reveal.
- Íconos con glow al estar visibles.

---

### 8.6 Requisitos de postulación

Mostrar como checklist premium.

Campos / requisitos:

- Nickname MLBB.
- ID de jugador.
- Servidor.
- Rango actual.
- Rango máximo.
- Rol principal.
- Roles secundarios.
- Héroes principales.
- Experiencia competitiva.
- Disponibilidad.
- Evidencias/capturas.
- Aceptación de reglas.

Agregar texto:

```txt
El envío del formulario no garantiza aceptación inmediata. La revisión depende de evidencias, conducta, disponibilidad y desempeño.
```

---

### 8.7 Evidencias

Sección visual con tarjetas:

- Perfil general.
- Rango actual.
- Rango máximo.
- Últimas temporadas.
- Estadísticas.
- Héroes principales.
- Historial reciente.
- Puntaje de crédito.

Texto:

```txt
El proceso de Eternal Phoenix no se basa solo en rango. El staff revisa evidencias, comportamiento, consistencia y comunicación para tomar decisiones más justas.
```

---

### 8.8 Valores y reglas clave

Valores:

- Respeto
- Disciplina
- Mejora
- Equipo
- Privacidad

Bloque reglamento:

```txt
Eternal Phoenix no es un chat casual. Es un espacio competitivo y organizado. Toda participación dentro del sistema Equipo Pro implica respeto, responsabilidad, cumplimiento de reglas, envío de evidencias válidas y apertura a evaluación y seguimiento por parte del staff.
```

---

### 8.9 Canales de comunicación

Mostrar estructura visual tipo módulos:

- ADM — Gestión, decisiones y control.
- General — Convivencia y comunicación diaria.
- Equipo Profesional + Mítico/Honorario — Cantera mayor y candidatos a representación.
- Equipo Profesional + Leyenda — Cantera menor y mejora competitiva.
- Noticias — Avisos, convocatorias y novedades.
- Lobby — Coordinación rápida y actividad social.
- Juegos — Partidas, squads y entretenimiento.

---

### 8.10 Comunicación oficial

Tres tonos:

#### Tono ceremonial

```txt
Convocatoria abierta — Eternal Phoenix
El fuego vuelve a encenderse. Abrimos postulaciones para jugadores que desean crecer dentro del sistema competitivo de la comunidad.
```

#### Tono administrativo

```txt
Registro Admin — Advertencia [1/3]
Motivo: conducta inadecuada.
Impacto: afectación a la convivencia.
Medida: advertencia formal y seguimiento.
```

#### Tono cercano

```txt
Bienvenido/a a Eternal Phoenix
Aquí jugamos, mejoramos y construimos comunidad. Lee las reglas, presenta tu ficha y disfruta el fuego del grupo.
```

---

### 8.11 FAQ

Preguntas mínimas:

1. ¿Entrar al formulario garantiza entrar al Equipo Pro?  
   No. La postulación inicia el proceso de revisión.

2. ¿Mis datos se publican?  
   No. Los datos se usan solo para gestión interna del reclutamiento.

3. ¿Puedo entrar solo para jugar casual?  
   Sí. La comunidad general también está pensada para convivencia, partidas y eventos.

4. ¿Qué pasa si no cumplo ahora?  
   Puedes quedar en rechazo temporal y volver a postularte cuando mejores.

5. ¿Necesito rango alto?  
   Depende de la ruta. También se evalúa conducta, disponibilidad, comunicación y evidencias.

---

### 8.12 CTA final

Texto:

```txt
¿Listo para renacer dentro de Eternal Phoenix?

Completa tu ficha, adjunta tus evidencias y permite que el staff revise tu perfil competitivo.
```

Botón:

`Postularme al Equipo Pro`

---

### 8.13 Footer

Debe incluir:

- Eternal Phoenix.
- EPX | Comunidad MLBB.
- Links internos.
- CTA al formulario.
- Disclaimer independiente:

```txt
Eternal Phoenix es una comunidad independiente de jugadores. No está afiliada oficialmente a Mobile Legends: Bang Bang ni a Moonton.
```

---

## 9. Componentes sugeridos

Crear componentes reutilizables:

```txt
src/
  assets/
  components/
    Navbar.tsx
    Hero.tsx
    SectionHeading.tsx
    PhoenixEmblem.tsx
    EmberBackground.tsx
    GlowButton.tsx
    FeatureCard.tsx
    Timeline.tsx
    RequirementChecklist.tsx
    ValueCard.tsx
    ChannelCard.tsx
    CommunicationToneCard.tsx
    FAQ.tsx
    Footer.tsx
  data/
    landingContent.ts
  styles/
    globals.css
    animations.css
  App.tsx
  main.tsx
```

Si el proyecto usa otro framework, adaptar los nombres.

---

## 10. Animaciones UI obligatorias

Implementar sin sacrificar rendimiento.

### 10.1 Background de brasas

- Pequeñas partículas animadas.
- CSS o canvas liviano.
- No bloquear rendimiento.
- Debe desactivarse o reducirse con `prefers-reduced-motion`.

### 10.2 Scroll reveal

- Cada sección aparece al entrar en viewport.
- Usar Framer Motion o Intersection Observer.

### 10.3 Navbar dinámica

- Transparente al inicio.
- Glass oscuro al hacer scroll.
- Borde dorado sutil.
- Estado activo por sección.

### 10.4 Hero motion

- Fénix flotando suavemente.
- Glow radial.
- Botones con brillo tipo “shimmer”.
- Título con entrada progresiva.

### 10.5 Cards interactivas

- Hover con elevación.
- Borde dorado.
- Glow interno.
- Movimiento 3D muy sutil, sin marear.

### 10.6 Timeline animado

- Línea de progreso iluminada al hacer scroll.
- Íconos activados por viewport.
- Cada etapa con reveal lateral.

### 10.7 Microinteracciones

- Botones magnéticos sutiles.
- Subrayado animado en navegación.
- FAQ accordion suave.
- Cursor glow opcional solo desktop.

---

## 11. Accesibilidad y responsive

Cumplir:

- Contraste suficiente.
- Textos legibles.
- `aria-label` en botones e íconos.
- Navegación por teclado.
- Estados `focus-visible`.
- Mobile-first.
- Breakpoints:
  - Mobile: 360px+
  - Tablet: 768px+
  - Desktop: 1024px+
  - Large: 1440px+

No usar animaciones fuertes en móviles.

---

## 12. Criterios de aceptación

La entrega se considera correcta si:

- La landing carga sin errores.
- `npm run lint` no falla, si existe.
- `npm run typecheck` no falla, si existe.
- `npm run build` funciona.
- El diseño mantiene estética Eternal Phoenix.
- El CTA principal abre el formulario.
- No hay datos privados visibles.
- La página es responsive.
- Las animaciones son suaves.
- El sitio no usa imágenes oficiales copiadas como identidad principal.
- Se incluye disclaimer de independencia.
- El código está organizado en componentes reutilizables.
- El contenido está centralizado en `landingContent.ts` o equivalente.

---

## 13. Prompt principal para Codex

Copia y pega este prompt en Codex dentro del repositorio:

```txt
Quiero que trabajes en el repositorio:

https://github.com/EstebanVanegasP/eternal-phoenix.git

Objetivo:
Montar una landing page premium para la comunidad Eternal Phoenix, enfocada en reclutamiento de jugadores de Mobile Legends y presentación de la comunidad/Equipo Pro.

Primero inspecciona el repositorio completo:
- package.json
- estructura de carpetas
- framework actual
- scripts disponibles
- assets existentes
- configuración de estilos

No borres ni reemplaces archivos importantes sin necesidad. Si el proyecto está vacío o casi vacío, crea una estructura moderna con Vite + React + TypeScript + Tailwind CSS. Si ya hay stack, adáptate al stack existente.

La landing debe ser frontend-only, responsive, accesible y visualmente premium.

Identidad visual:
- Marca: Eternal Phoenix
- Frase madre: “Renace. Compite. Asciende.”
- Estética: oscura, fuego, dorado, fénix, pergamino, ceremonial, competitiva, Mobile Legends community vibe.
- No uses estética neon genérica.
- No dependas de arte oficial de Mobile Legends como identidad principal.
- Usa fénix, brasas, alas, escudos, bordes ornamentales y elementos propios.

Paleta:
#120807, #27100B, #F26A1B, #FFB23F, #D8A84F, #7A3518, #8F1D12, #FFF1D2, #E8C995, #6F2DA8.

Formulario CTA:
El botón principal “Postularme al Equipo Pro” debe abrir:
https://docs.google.com/forms/d/e/1FAIpQLSfq0pVJN0mlWvCZjUW-yarvfXI6oW1IswTOgYZuznnTxMl_cA/viewform

Secciones obligatorias:
1. Navbar sticky/glass con enlaces: Inicio, Comunidad, Equipo Pro, Proceso, Reglas, Postularme.
2. Hero section con:
   - Eternal Phoenix
   - “Renace. Compite. Asciende.”
   - Copy: “Comunidad de Mobile Legends donde el talento, la disciplina y el espíritu de equipo se convierten en progreso competitivo.”
   - CTA principal “Postularme al Equipo Pro”
   - CTA secundario “Conocer la Comunidad”
   - Fénix visual protagonista
   - Tarjetas: Comunidad organizada, Tryouts y seguimiento, Camino competitivo.
3. ¿Qué es Eternal Phoenix?
4. Rutas de participación:
   - Comunidad General
   - Equipo Pro + Leyenda
   - Equipo Pro + Honorario
5. Camino del jugador:
   - Postulación
   - Revisión
   - Preselección
   - Tryout
   - Observación
   - Aprobación
   - Roster
6. Requisitos de postulación.
7. Evidencias.
8. Valores y reglas clave:
   - Respeto
   - Disciplina
   - Mejora
   - Equipo
   - Privacidad
   Incluir el bloque: “Eternal Phoenix no es un chat casual. Es un espacio competitivo y organizado...”
9. Canales de comunicación:
   - ADM
   - General
   - Equipo Profesional + Mítico/Honorario
   - Equipo Profesional + Leyenda
   - Noticias
   - Lobby
   - Juegos
10. Comunicación oficial:
   - Tono ceremonial
   - Tono administrativo
   - Tono cercano
11. FAQ.
12. CTA final.
13. Footer con disclaimer:
   “Eternal Phoenix es una comunidad independiente de jugadores. No está afiliada oficialmente a Mobile Legends: Bang Bang ni a Moonton.”

Animaciones y efectos:
- Background de brasas/partículas liviano.
- Hero con fénix flotante sutil.
- Scroll reveal por sección.
- Navbar que cambia al hacer scroll.
- Cards con hover glow dorado.
- Timeline con línea iluminada al hacer scroll.
- Botones con shimmer.
- FAQ accordion animado.
- Respetar prefers-reduced-motion.

Arquitectura sugerida:
- Componentes reutilizables.
- Contenido centralizado en data/landingContent.ts o equivalente.
- Estilos organizados.
- Código limpio y mantenible.

Validación final:
Ejecuta los scripts disponibles:
- npm install si hace falta
- npm run lint si existe
- npm run typecheck si existe
- npm run build

Si algún script no existe, no lo inventes como si hubiera pasado. Reporta exactamente qué ejecutaste y qué resultado dio.

Entrega final:
- Resumen de cambios.
- Archivos modificados/creados.
- Cómo correr el proyecto localmente.
- Estado de lint/typecheck/build.
```

---

## 14. Prompt corto para iterar el diseño visual

Úsalo después de la primera implementación:

```txt
Ahora mejora la landing de Eternal Phoenix a nivel visual y de motion design.

Quiero una página más premium, menos genérica y más ceremonial:
- Más profundidad en fondos.
- Mejor uso de fuego/dorado.
- Bordes ornamentales sutiles.
- Cards más elegantes.
- Hero más impactante.
- Timeline con sensación de ascenso.
- Animaciones suaves y modernas.
- Mejor responsive mobile.
- Mejor contraste y legibilidad.

No cambies el contenido base ni agregues datos inventados. Solo mejora UI/UX, composición visual, microinteracciones, responsive y rendimiento.
Ejecuta build al final y reporta resultado.
```

---

## 15. Prompt para revisión de calidad

```txt
Haz una auditoría frontend de la landing Eternal Phoenix.

Revisa:
- Responsive mobile/tablet/desktop.
- Accesibilidad.
- Contraste.
- Legibilidad.
- Performance.
- Organización de componentes.
- Duplicación de código.
- Animaciones excesivas.
- Buen uso de prefers-reduced-motion.
- Si el CTA del formulario funciona.
- Si el footer incluye el disclaimer de comunidad independiente.
- Si se están mostrando datos privados o inventados.

Entrega:
1. Hallazgos críticos.
2. Mejoras recomendadas.
3. Cambios que aplicarás.
4. Ejecuta build/lint/typecheck si existen.
5. Reporta resultados reales.
```
