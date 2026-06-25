// Authored preview for SectionHeading — realistic brand copy across its axes
// (align: center/left, tone: light/dark). Imports the real exported component
// from the DS bundle (shimmed to window.TDP).
import { SectionHeading } from "terraza-del-pacifico";

export function Default() {
  return (
    <SectionHeading
      eyebrow="Nuestras Suites"
      title="Despierta con el Pacífico"
      subtitle="Cada suite abre al mar con luz natural, materiales cálidos y el sonido constante de las olas de Playa Hermosa."
    />
  );
}

export function LeftAligned() {
  return (
    <SectionHeading
      align="left"
      eyebrow="Gastronomía"
      title="Sabores frente al mar"
      subtitle="Cocina de mercado con producto local en el restaurante Vivace, abierto a todos los visitantes."
    />
  );
}

export function OnOcean() {
  return (
    <div style={{ background: "hsl(199 66% 18%)", padding: "56px 40px" }}>
      <SectionHeading
        tone="dark"
        eyebrow="Playa Hermosa"
        title="Frente al Pacífico"
        subtitle="Un refugio tranquilo a pasos de la arena, en la costa del Pacífico de Costa Rica."
      />
    </div>
  );
}

export function TitleOnly() {
  return <SectionHeading title="Reserva tu estadía" />;
}
