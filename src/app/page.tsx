import { DemoBanner } from "@/components/DemoBanner";
import { Favorites } from "@/components/Favorites";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { MobileActionBar } from "@/components/MobileActionBar";
import { OrderAhead } from "@/components/OrderAhead";
import { OrderDialogProvider } from "@/components/OrderDialog";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Sprinkles } from "@/components/Sprinkles";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <OrderDialogProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <DemoBanner />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Sprinkles />
        <Favorites />
        <MenuSection />
        <OrderAhead />
        <Visit />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </OrderDialogProvider>
  );
}
