import logoBiblica from "@/assets/logo-biblica.png";
import logoTheChosen from "@/assets/logo-thechosen.jpg";
import logoBibleProject from "@/assets/logo-bibleproject-wiki.png";
import logoSermonshots from "@/assets/logo-sermonshots-new.png";
import logoCovenant from "@/assets/logo-covenant-new.png";
import logoResonate from "@/assets/logo-resonate-new.png";
import logoVelora from "@/assets/logo-velora.png";
import logoRestvo from "@/assets/logo-restvo.png";
import logoLifechurch from "@/assets/logo-lifechurch-new.png";
import logoBible from "@/assets/logo-bible.png";

const partnerLogos = [
  { src: logoBiblica, alt: "Biblica" },
  { src: logoTheChosen, alt: "The Chosen" },
  { src: logoBibleProject, alt: "Bible Project" },
  { src: logoSermonshots, alt: "Sermon Shots" },
  { src: logoCovenant, alt: "Evangelical Covenant Church" },
  { src: logoResonate, alt: "Resonate" },
  { src: logoVelora, alt: "Velora" },
  { src: logoRestvo, alt: "Restvo" },
  { src: logoLifechurch, alt: "Life.Church" },
  { src: logoBible, alt: "Bible App" },
];

type PartnerLogosMarqueeProps = {
  className?: string;
  /** Show the “Trusted by partners” label above the strip */
  showLabel?: boolean;
};

/**
 * Horizontally scrolling partner logo banner (pre-rewrite Hero marquee),
 * restyled for Ink & Ember light surfaces.
 */
const PartnerLogosMarquee = ({
  className = "",
  showLabel = true,
}: PartnerLogosMarqueeProps) => {
  return (
    <div className={`overflow-hidden ${className}`} aria-label="Trusted by partners">
      {showLabel && (
        <p className="container mx-auto px-6 text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-6">
          Trusted by partners
        </p>
      )}
      <div className="relative">
        <div className="flex gap-12 items-center animate-[scroll-left_40s_linear_infinite]">
          {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex h-14 w-28 flex-shrink-0 items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-14 max-w-[7rem] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogosMarquee;
