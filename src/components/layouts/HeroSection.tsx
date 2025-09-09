// components/HeroSection.tsx
import React from "react";
import { Link } from "react-router-dom";

export type BreadcrumbItem = {
  label: string;
  href?: string; // optional; if missing it's treated as current page
};

export type CTA = {
  label: string;
  href?: string; // internal route ("/path") or external ("https://...")
  onClick?: () => void; // optional
  variant?: "primary" | "secondary";
};

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundUrl?: string;
  /** Tailwind-compatible height, e.g. "h-[60vh]" or "h-96". Default: 60vh */
  heightClass?: string;
  breadcrumb?: BreadcrumbItem[]; // e.g. [{label: "Home", href: "/"}, {label: "Shop"}]
  cta?: CTA | null;
  /** Overlay color (any CSS color) and start/end opacity for gradient */
  overlayColor?: string;
  overlayStartOpacity?: number; // 0 to 1
  overlayEndOpacity?: number; // 0 to 1
  children?: React.ReactNode; // optional extra content inside hero (right under subtitle)
  className?: string; // additional wrapper classes
  backgroundPosition?: string; // e.g. "center center"
}

export default function HeroSection({
  title = "Page Title",
  subtitle,
  backgroundUrl,
  heightClass = "h-[60vh]",
  breadcrumb = [],
  cta = null,
  children,
  className = "",
  backgroundPosition = "center center",
}: HeroSectionProps) {
  const isInternal = (href?: string) =>
    typeof href === "string" && href.startsWith("/");

  const renderBreadcrumb = () => {
    if (!breadcrumb || breadcrumb.length === 0) return null;
    return (
      <nav className="mt-4 text-sm text-white/85" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-2">
          {breadcrumb.map((b, i) => {
            const isLast = i === breadcrumb.length - 1;
            return (
              <li
                key={`${b.label}-${i}`}
                className={isLast ? "text-white/95" : ""}
                aria-current={isLast ? "page" : undefined}
              >
                {b.href && !isLast ? (
                  isInternal(b.href) ? (
                    <Link to={b.href} className="hover:underline">
                      {b.label}
                    </Link>
                  ) : (
                    // external
                    <Link
                      to={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {b.label}
                    </Link>
                  )
                ) : (
                  <span>{b.label}</span>
                )}
                {!isLast && (
                  <span className="mx-2 text-white/60" aria-hidden="true">
                    <svg
                      className="inline-block w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  };

  const renderCTA = () => {
    if (!cta) return null;
    const stylePrimary = "bg-purple-600 hover:bg-purple-700 text-white";
    const styleSecondary =
      "bg-white/20 hover:bg-white/30 text-white border border-white/30";

    const btnClass = `inline-flex items-center gap-2 px-5 py-2 rounded-md font-semibold transition ${
      cta.variant === "secondary" ? styleSecondary : stylePrimary
    }`;

    if (cta.href) {
      return isInternal(cta.href) ? (
        <Link to={cta.href} className={btnClass} onClick={cta.onClick}>
          {cta.label}
        </Link>
      ) : (
        <Link
          to={cta.href}
          className={btnClass}
          onClick={cta.onClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cta.label}
        </Link>
      );
    }

    return (
      <button type="button" onClick={cta.onClick} className={btnClass}>
        {cta.label}
      </button>
    );
  };

  return (
    <header
      className={`relative w-full ${heightClass} flex items-center ${className}`}
      aria-label="Hero section"
      role="banner"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: backgroundPosition,
      }}
    >
      {/* overlay gradient */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 100%)`,
          opacity: 1,
        }}
      />

      {/* content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-sm">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-2 text-sm sm:text-base md:text-lg text-white/90">
              {subtitle}
            </p>
          )}

          {/* children slot (optional extra content) */}
          {children && <div className="mt-4">{children}</div>}

          {/* breadcrumb + CTA row */}
          <div className="mt-4 flex flex-col items-start justify-between gap-4">
            {renderBreadcrumb()}
            <div>{renderCTA()}</div>
          </div>
        </div>
      </div>

      {/* subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white/10" />
    </header>
  );
}
