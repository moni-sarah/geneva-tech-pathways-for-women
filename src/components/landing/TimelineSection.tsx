import { useLanguage } from "@/contexts/LanguageContext";
import { CalendarDays } from "lucide-react";

const TimelineSection = () => {
  const { t } = useLanguage();

  const events = [
    { date: "timeline.1.date", title: "timeline.1.title", desc: "timeline.1.desc" },
    { date: "timeline.2.date", title: "timeline.2.title", desc: "timeline.2.desc" },
    { date: "timeline.3.date", title: "timeline.3.title", desc: "timeline.3.desc" },
    { date: "timeline.4.date", title: "timeline.4.title", desc: "timeline.4.desc" },
  ];

  return (
    <section id="timeline" className="py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">{t("timeline.tag")}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">{t("timeline.title")}</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />

            <div className="space-y-12">
              {events.map((event, index) => (
                <div key={event.title} className={`relative flex items-start gap-6 md:gap-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full gradient-hero -translate-x-1.5 mt-1.5 z-10 ring-4 ring-background" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-warm transition-shadow">
                      <div className="flex items-center gap-2 mb-2 text-secondary">
                        <CalendarDays className="h-4 w-4" />
                        <span className="text-sm font-medium">{t(event.date)}</span>
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-1">{t(event.title)}</h3>
                      <p className="text-muted-foreground text-sm">{t(event.desc)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
