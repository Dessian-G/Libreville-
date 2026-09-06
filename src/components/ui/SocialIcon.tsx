// lucide-react n'inclut plus les logos de marques (Facebook, Instagram, ...) :
// icônes dessinées localement pour rester sur une seule librairie d'icônes.

interface GlyphProps {
  size?: number;
}

function FacebookGlyph({ size = 16 }: GlyphProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.53 17.52 2.04 12 2.04S2 6.53 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.81 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, (props: GlyphProps) => React.JSX.Element> = {
  facebook: FacebookGlyph,
};

interface SocialIconProps extends GlyphProps {
  icon: string;
}

export default function SocialIcon({ icon, size = 16 }: SocialIconProps) {
  const Icon = SOCIAL_ICONS[icon];
  if (!Icon) return null;
  return <Icon size={size} />;
}
