import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { CinematicIntro } from "@/components/motion/CinematicIntro";
import { ScrollProgressBar } from "@/components/motion/ScrollProgressBar";
import { PageTransition } from "@/components/motion/PageTransition";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <CinematicIntro>
        <div className="overflow-x-clip">
          <AnnouncementBar />
          <SiteHeader />
          <ScrollProgressBar />
          <main id="main-content" className="w-full overflow-x-clip pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
          <MobileStickyBar />
          <ScrollToTop />
        </div>
      </CinematicIntro>
    </SmoothScrollProvider>
  );
}
