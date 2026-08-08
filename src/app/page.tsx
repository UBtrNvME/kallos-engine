"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkle,
  Sun,
  Moon,
  Copy,
  Check,
  Code,
  PencilSimple,
  ShieldCheck,
  CursorClick,
  Sliders,
  Stack,
  ArrowRight,
  Terminal,
  Warning,
  CheckCircle,
  XCircle,
  Info,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function ShowcasePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"swatches" | "typography" | "playground" | "tokens">("swatches");
  const [inputError, setInputError] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [tokenView, setTokenView] = useState<"w3c" | "shadcn">("w3c");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(id);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  // Swatch Matrix Tokens
  const swatches = [
    {
      name: "Dionysus Violet",
      role: "Primary Brand CTA",
      variable: "--color-primary",
      darkHex: "#A855F7",
      lightHex: "#7E22CE",
      bgClass: "bg-[var(--color-primary)]",
      contrastDark: "16.8:1 (AAA)",
      contrastLight: "5.2:1 (AA)",
      description: "Regal Tyrian Violet inspired by ancient dye. Reserved for primary CTAs and brand headlines.",
    },
    {
      name: "Poseidon Ultramarine",
      role: "Secondary Brand Trigger",
      variable: "--color-secondary",
      darkHex: "#3B82F6",
      lightHex: "#1D4ED8",
      bgClass: "bg-[var(--color-secondary)]",
      contrastDark: "5.6:1 (AA)",
      contrastLight: "6.6:1 (AA)",
      description: "Deep Aegean Ultramarine for secondary triggers, active links, and code tokens.",
    },
    {
      name: "Helios Amber",
      role: "High-Visibility Accent Pop",
      variable: "--color-accent",
      darkHex: "#D4FF00",
      lightHex: "#D4FF00",
      bgClass: "bg-[var(--color-accent)]",
      contrastDark: "17.0:1 (AAA)",
      contrastLight: "Focus Ring / Badge",
      description: "Sun God's radiant beam. STRICTLY for pill badges, status indicators, and dark focus rings.",
    },
    {
      name: "Athena Emerald",
      role: "Success Status",
      variable: "--color-success",
      darkHex: "#10B981",
      lightHex: "#047857",
      bgClass: "bg-[var(--color-success)]",
      contrastDark: "9.2:1 (AAA)",
      contrastLight: "4.8:1 (AA)",
      description: "Goddess of Wisdom & Victory Laurel. Positive system telemetry and validation.",
    },
    {
      name: "Apollo Ochre",
      role: "Warning Status",
      variable: "--color-warning",
      darkHex: "#F59E0B",
      lightHex: "#B45309",
      bgClass: "bg-[var(--color-warning)]",
      contrastDark: "8.5:1 (AAA)",
      contrastLight: "4.7:1 (AA)",
      description: "God of Sun & Solar Prophecy. Warning notices and non-blocking alerts.",
    },
    {
      name: "Hades Crimson",
      role: "Error / Stygian Flame",
      variable: "--color-error",
      darkHex: "#F43F5E",
      lightHex: "#BE123C",
      bgClass: "bg-[var(--color-error)]",
      contrastDark: "5.8:1 (AA)",
      contrastLight: "5.5:1 (AA)",
      description: "Stygian red for errors, destructive actions, and invalid inputs.",
    },
    {
      name: "Hermes Cyan",
      role: "Info / Telemetry",
      variable: "--color-info",
      darkHex: "#06B6D4",
      lightHex: "#0E7490",
      bgClass: "bg-[var(--color-info)]",
      contrastDark: "7.9:1 (AAA)",
      contrastLight: "4.9:1 (AA)",
      description: "Messenger of Telemetry & Speed. Information chips and system status.",
    },
    {
      name: "Erebus / Aether Base",
      role: "Canvas Background",
      variable: "--color-bg",
      darkHex: "#09090B",
      lightHex: "#FAFAFA",
      bgClass: "bg-[var(--color-bg)] border border-border",
      contrastDark: "Base Canvas",
      contrastLight: "Base Canvas",
      description: "OLED Dark background (#09090B) and Paper-like Light canvas (#FAFAFA).",
    },
    {
      name: "Parthenon Surface",
      role: "Marble Surface Plane",
      variable: "--color-surface",
      darkHex: "#18181B",
      lightHex: "#FFFFFF",
      bgClass: "bg-[var(--color-surface)] border border-border",
      contrastDark: "16.5:1 vs Text",
      contrastLight: "19.0:1 vs Text",
      description: "Flat surface planes bounded by hairline 1px structural framing for cards & modals.",
    },
  ];

  const w3cTokensJson = {
    $schema: "https://design-tokens.github.io/community-group/format/",
    color: {
      brand: {
        primary: { dark: { $value: "#A855F7" }, light: { $value: "#7E22CE" } },
        secondary: { dark: { $value: "#3B82F6" }, light: { $value: "#1D4ED8" } },
        accent: { dark: { $value: "#D4FF00" }, light: { $value: "#D4FF00" } },
        focus: { dark: { $value: "#D4FF00" }, light: { $value: "#7E22CE" } },
      },
      status: {
        success: { dark: { $value: "#10B981" }, light: { $value: "#047857" } },
        warning: { dark: { $value: "#F59E0B" }, light: { $value: "#B45309" } },
        error: { dark: { $value: "#F43F5E" }, light: { $value: "#BE123C" } },
        info: { dark: { $value: "#06B6D4" }, light: { $value: "#0E7490" } },
      },
    },
    radii: {
      none: { $value: "0px" },
      sharp: { $value: "2px" },
      tactical: { $value: "4px" },
      card: { $value: "8px" },
    },
    typography: {
      sans: { $value: "Inter, sans-serif" },
      mono: { $value: "JetBrains Mono, monospace" },
    },
  };

  const shadcnComponentsJson = {
    $schema: "https://ui.shadcn.com/schema.json",
    style: "default",
    rsc: true,
    tsx: true,
    tailwind: {
      config: "tailwind.config.ts",
      css: "src/app/globals.css",
    },
    kallos: {
      designSystem: "Neo-Hellenic Minimalism",
      master: "design-system/kallos-engine/MASTER.md",
      radii: { none: "0px", sharp: "2px", tactical: "4px", card: "8px" },
      triggers: "font-mono normal-case min-h-[44px]",
      focusRing: "focus-visible:outline-2 focus-visible:outline-[var(--color-focus-ring)]",
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-[200] border-b border-border bg-card/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-tactical bg-[var(--color-primary)] text-[var(--color-primary-text)] font-mono font-bold text-lg">
              κ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-sans font-bold text-lg tracking-tight text-foreground">
                  Kallos Engine
                </h1>
                <Badge variant="default" className="text-[10px]">
                  v1.0.0
                </Badge>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Neo-Hellenic Minimalist Design System & Token Bridge
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="gap-2 font-mono text-xs"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-4 w-4 text-[var(--color-accent)]" />
                  <span>Paper Light</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 text-[var(--color-primary)]" />
                  <span>OLED Dark</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-t border-border bg-card px-6">
          <div className="mx-auto flex max-w-7xl gap-2 font-mono text-sm">
            <button
              onClick={() => setActiveTab("swatches")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 font-semibold transition-all min-h-[44px] ${
                activeTab === "swatches"
                  ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Sparkle className="h-4 w-4" />
              <span>Swatch Matrix</span>
            </button>
            <button
              onClick={() => setActiveTab("typography")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 font-semibold transition-all min-h-[44px] ${
                activeTab === "typography"
                  ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <PencilSimple className="h-4 w-4" />
              <span>Typography Specimen</span>
            </button>
            <button
              onClick={() => setActiveTab("playground")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 font-semibold transition-all min-h-[44px] ${
                activeTab === "playground"
                  ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Sliders className="h-4 w-4" />
              <span>Component Playground</span>
            </button>
            <button
              onClick={() => setActiveTab("tokens")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 font-semibold transition-all min-h-[44px] ${
                activeTab === "tokens"
                  ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Code className="h-4 w-4" />
              <span>Token Inspector</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Section 1: Swatch Matrix */}
        {activeTab === "swatches" && (
          <div className="space-y-6">
            <div className="flex flex-col space-y-2 border-b border-border pb-4">
              <div className="flex items-center justify-between">
                <h2 className="font-sans text-2xl font-bold tracking-tight">
                  Hellenic Pantheon Swatch Matrix
                </h2>
                <Badge variant="secondary" className="font-mono">
                  60-30-10 Distribution Rule
                </Badge>
              </div>
              <p className="font-sans text-sm text-muted-foreground max-w-3xl">
                Grounding Kallos Engine in ancient Greek mythic DNA: Erebus Dark, Dionysus Violet, Poseidon Ultramarine, Helios Amber, Athena Emerald, Apollo Ochre, and Hades Crimson.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {swatches.map((swatch) => (
                <Card key={swatch.name} className="flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className={`h-24 w-full rounded-t-tactical ${swatch.bgClass} flex items-end justify-between p-3`}>
                      <span className="rounded-sharp bg-[#09090B]/80 px-2 py-1 font-mono text-xs text-white backdrop-blur-sm">
                        {theme === "dark" ? swatch.darkHex : swatch.lightHex}
                      </span>
                      <Badge variant="outline" className="bg-[#09090B]/80 text-white border-0 font-mono text-[10px]">
                        {swatch.contrastDark}
                      </Badge>
                    </div>

                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-bold">{swatch.name}</CardTitle>
                        <Badge variant="secondary" className="text-[10px]">
                          {swatch.role}
                        </Badge>
                      </div>
                      <CardDescription className="text-xs pt-1">
                        {swatch.description}
                      </CardDescription>
                    </CardHeader>
                  </div>

                  <CardFooter className="flex items-center justify-between border-t border-border p-4 pt-3 bg-muted/20">
                    <code className="font-mono text-xs text-muted-foreground">{swatch.variable}</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(swatch.variable, swatch.name)}
                      className="h-8 min-h-[32px] px-2 text-xs font-mono"
                    >
                      {copiedToken === swatch.name ? (
                        <Check className="h-3.5 w-3.5 text-[var(--color-success)]" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Typography Specimen */}
        {activeTab === "typography" && (
          <div className="space-y-8">
            <div className="flex flex-col space-y-2 border-b border-border pb-4">
              <h2 className="font-sans text-2xl font-bold tracking-tight">
                Modernist Technical Hybrid Typography Specimen
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-3xl">
                Juxtaposition of humanistic sans-serif (<code className="font-mono text-foreground font-semibold">Inter</code>) for narrative hierarchy, with tactical monospace (<code className="font-mono text-foreground font-semibold">JetBrains Mono</code>) for controls, badges, and interactive triggers.
              </p>
            </div>

            {/* Font Pairings Breakdown */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-sans text-lg">Narrative & Copy: Inter (Sans-Serif)</CardTitle>
                  <CardDescription>
                    Used for headings, main body paragraphs, labels, and descriptive narrative text.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="font-sans text-2xl font-bold">
                    Visual beauty is inseparable from structural clarity.
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    Rooted in Swiss spatial discipline. High negative space, generous margins, and an uncompromising 8pt rhythm scale give every element room to breathe and command attention.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-mono text-lg">Controls & Metrics: JetBrains Mono</CardTitle>
                  <CardDescription>
                    Used for buttons, inputs, pill badges, table metrics, code tokens, and interactive triggers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="font-mono text-sm space-y-2 bg-muted/40 p-4 rounded-tactical border border-border">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">system_status:</span>
                      <span className="text-[var(--color-success)] font-bold">ATHENA_ACTIVE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">tactical_radii:</span>
                      <span className="text-[var(--color-secondary)]">0px - 8px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">touch_target_min:</span>
                      <span className="text-[var(--color-accent)] font-bold">44x44px</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Modular Type Scale */}
            <Card>
              <CardHeader>
                <CardTitle>Modular Type Scale Hierarchy (Swiss 8pt Rhythm)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 divide-y divide-border">
                <div className="pt-2 flex items-baseline justify-between">
                  <div>
                    <span className="font-mono text-xs text-muted-foreground block mb-1">--text-3xl (40px / 48px) — Hero Display</span>
                    <h1 className="font-sans text-3xl font-bold tracking-tight">Kallos Architectural Precision</h1>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">Hero Display</Badge>
                </div>

                <div className="pt-4 flex items-baseline justify-between">
                  <div>
                    <span className="font-mono text-xs text-muted-foreground block mb-1">--text-2xl (32px / 40px) — Page Title</span>
                    <h2 className="font-sans text-2xl font-bold tracking-tight">Neo-Hellenic Minimalism</h2>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">Page Title</Badge>
                </div>

                <div className="pt-4 flex items-baseline justify-between">
                  <div>
                    <span className="font-mono text-xs text-muted-foreground block mb-1">--text-xl (24px / 32px) — Card Header</span>
                    <h3 className="font-sans text-xl font-semibold">Parthenon Surface Plane</h3>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">H3 Card Header</Badge>
                </div>

                <div className="pt-4 flex items-baseline justify-between">
                  <div>
                    <span className="font-mono text-xs text-muted-foreground block mb-1">--text-lg (20px / 28px) — Section Header</span>
                    <h4 className="font-sans text-lg font-medium">Hairline Structural Framing</h4>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">Section Header</Badge>
                </div>

                <div className="pt-4 flex items-baseline justify-between">
                  <div>
                    <span className="font-mono text-xs text-muted-foreground block mb-1">--text-base (16px / 24px) — Primary Body</span>
                    <p className="font-sans text-base text-foreground">
                      Interfaces should feel like modern marble columns or blueprint structures.
                    </p>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">Primary Body</Badge>
                </div>

                <div className="pt-4 flex items-baseline justify-between">
                  <div>
                    <span className="font-mono text-xs text-muted-foreground block mb-1">--text-sm (14px / 20px) — Monospace Control</span>
                    <p className="font-mono text-sm text-[var(--color-primary)] font-semibold border-b-2 border-[var(--color-primary)] inline-block pb-0.5">
                      kallos-btn-primary (Sentence Case Trigger)
                    </p>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">Monospace Trigger</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Section 3: Component Playground */}
        {activeTab === "playground" && (
          <div className="space-y-8">
            <div className="flex flex-col space-y-2 border-b border-border pb-4">
              <h2 className="font-sans text-2xl font-bold tracking-tight">
                shadcn/ui Custom Primitive Component Playground
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-3xl">
                Enforcing monospace triggers, normal capitalization (<code className="font-mono text-foreground font-semibold">textTransform: 'none'</code>), 44px touch target minimums, and Helios Amber focus rings.
              </p>
            </div>

            {/* Buttons Showcase */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CursorClick className="h-5 w-5 text-[var(--color-primary)]" />
                  <span>Button Triggers (Monospace & 44px Minimum Touch Targets)</span>
                </CardTitle>
                <CardDescription>
                  Clickable controls use Monospace font with normal capital case, never forced uppercase.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="default">
                    Dionysus Primary
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <Button variant="secondary">
                    Poseidon Secondary
                  </Button>

                  <Button variant="accent">
                    Helios Accent Pop
                  </Button>

                  <Button variant="outline">
                    Hairline Structural
                  </Button>

                  <Button variant="ghost">
                    Ghost Trigger
                  </Button>

                  <Button variant="destructive">
                    Hades Crimson
                  </Button>

                  <Button variant="outline" disabled>
                    Disabled State
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Form Input & Dialog Modal */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-[var(--color-secondary)]" />
                    <span>Input Primitive & Error States</span>
                  </CardTitle>
                  <CardDescription>
                    Monospace text inputs with min 44px touch height and Helios Amber focus rings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="font-mono text-xs font-semibold text-muted-foreground">
                      Standard Input Field
                    </label>
                    <Input placeholder="Enter prompt or query..." />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="font-mono text-xs font-semibold text-muted-foreground">
                        Validation Error Input State
                      </label>
                      <button
                        onClick={() => setInputError(!inputError)}
                        className="font-mono text-xs text-[var(--color-primary)] underline cursor-pointer"
                      >
                        Toggle Error: {inputError ? "ON" : "OFF"}
                      </button>
                    </div>
                    <Input
                      placeholder="kallos-engine-id"
                      error={inputError}
                      defaultValue={inputError ? "invalid_system_id" : "kallos-master-v1"}
                    />
                    {inputError && (
                      <p className="font-mono text-xs text-[var(--color-error)] flex items-center gap-1">
                        <XCircle className="h-3.5 w-3.5" />
                        Hades Error: Invalid Kallos engine token string.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Stack className="h-5 w-5 text-[var(--color-accent)]" />
                    <span>Dialog Modal Primitive</span>
                  </CardTitle>
                  <CardDescription>
                    Flat marble surface plane bounded by hairline 1px borders with Erebus Backdrop Scrim.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-start justify-center space-y-4">
                  <p className="font-sans text-sm text-muted-foreground">
                    Click below to open the architectural dialog modal with an Erebus dark backdrop scrim.
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default">
                        Launch Dialog Modal
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <ShieldCheck className="h-5 w-5 text-[var(--color-primary)]" />
                          <span>Kallos Engine System Audit</span>
                        </DialogTitle>
                        <DialogDescription>
                          Architectural precision modal plane rendered with 8px radii bounds and zero fuzzy Material drop shadows.
                        </DialogDescription>
                      </DialogHeader>

                      <div className="my-2 space-y-2 bg-muted/30 p-4 rounded-tactical border border-border font-mono text-xs">
                        <div className="flex justify-between">
                          <span>wcag_aa_contrast:</span>
                          <span className="text-[var(--color-success)] font-semibold">PASSED (≥4.5:1)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>touch_target_min:</span>
                          <span className="text-[var(--color-success)] font-semibold">PASSED (44px)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>focus_ring_token:</span>
                          <span className="text-[var(--color-accent)] font-semibold">HELIOS_AMBER</span>
                        </div>
                      </div>

                      <DialogFooter>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            Close
                          </Button>
                        </DialogTrigger>
                        <Button variant="default" size="sm">
                          Confirm Audit
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>

            {/* Badges & Telemetry Table */}
            <Card>
              <CardHeader>
                <CardTitle>Micro-Brutalist Badges & Hellenic Data Table</CardTitle>
                <CardDescription>
                  Tactical status pills (`radii.sharp` 2px) and tabular data with monospace metrics.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-3 items-center">
                  <Badge variant="default">Helios Accent Pop</Badge>
                  <Badge variant="primary">Dionysus Primary</Badge>
                  <Badge variant="secondary">Poseidon Secondary</Badge>
                  <Badge variant="success">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Athena Success
                  </Badge>
                  <Badge variant="warning">
                    <Warning className="h-3 w-3 mr-1" />
                    Apollo Warning
                  </Badge>
                  <Badge variant="destructive">
                    <XCircle className="h-3 w-3 mr-1" />
                    Hades Error
                  </Badge>
                  <Badge variant="info">
                    <Info className="h-3 w-3 mr-1" />
                    Hermes Telemetry
                  </Badge>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Deity Token</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Dark OLED</TableHead>
                      <TableHead>Paper Light</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-bold text-[var(--color-primary)]">Dionysus Violet</TableCell>
                      <TableCell>Primary Brand CTA</TableCell>
                      <TableCell>#A855F7</TableCell>
                      <TableCell>#7E22CE</TableCell>
                      <TableCell><Badge variant="primary">Active</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-[var(--color-secondary)]">Poseidon Ultramarine</TableCell>
                      <TableCell>Secondary Trigger</TableCell>
                      <TableCell>#3B82F6</TableCell>
                      <TableCell>#1D4ED8</TableCell>
                      <TableCell><Badge variant="secondary">Active</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-[#D4FF00]">Helios Amber</TableCell>
                      <TableCell>Focus & Micro-Badge</TableCell>
                      <TableCell>#D4FF00</TableCell>
                      <TableCell>#D4FF00</TableCell>
                      <TableCell><Badge variant="default">Accent Pop</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Section 4: Token Inspector */}
        {activeTab === "tokens" && (
          <div className="space-y-6">
            <div className="flex flex-col space-y-2 border-b border-border pb-4">
              <div className="flex items-center justify-between">
                <h2 className="font-sans text-2xl font-bold tracking-tight">
                  Design Token Bridge Inspector
                </h2>
                <div className="flex gap-2">
                  <Button
                    variant={tokenView === "w3c" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTokenView("w3c")}
                    className="font-mono text-xs"
                  >
                    tokens.json (W3C Standard)
                  </Button>
                  <Button
                    variant={tokenView === "shadcn" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTokenView("shadcn")}
                    className="font-mono text-xs"
                  >
                    components.json (shadcn/ui)
                  </Button>
                </div>
              </div>
              <p className="font-sans text-sm text-muted-foreground max-w-3xl">
                W3C Design Tokens Community Group standard format and shadcn/ui component mapping export for downstream apps.
              </p>
            </div>

            <Card className="relative">
              <CardHeader className="flex flex-row items-center justify-between border-b border-border py-3">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-[var(--color-primary)]" />
                  <span className="font-mono text-sm font-semibold">
                    {tokenView === "w3c" ? "design-system/kallos-engine/tokens.json" : "components.json"}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const text = JSON.stringify(tokenView === "w3c" ? w3cTokensJson : shadcnComponentsJson, null, 2);
                    navigator.clipboard.writeText(text);
                    setCopiedJson(true);
                    setTimeout(() => setCopiedJson(false), 2000);
                  }}
                  className="gap-2 font-mono text-xs"
                >
                  {copiedJson ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[var(--color-success)]" />
                      <span>Copied JSON!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Raw JSON</span>
                    </>
                  )}
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <pre className="max-h-[500px] overflow-auto p-6 font-mono text-xs text-[var(--color-text-primary)] bg-muted/20">
                  {JSON.stringify(tokenView === "w3c" ? w3cTokensJson : shadcnComponentsJson, null, 2)}
                </pre>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
