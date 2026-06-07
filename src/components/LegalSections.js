import { LEGAL_CONTACT_EMAIL } from "@/content/legalPolicies";

export function LegalSections({ sections }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-lg font-bold text-foreground md:text-xl">
            {section.title}
          </h2>
          <div className="mt-4 space-y-4">
            {section.paragraphs.map((text) => (
              <p
                key={text.slice(0, 48)}
                className="text-sm leading-relaxed text-muted md:text-base"
              >
                {text}
              </p>
            ))}
          </div>
        </section>
      ))}
      <p className="border-t border-border pt-8 text-sm text-muted">
        Contact:{" "}
        <a
          href={`mailto:${LEGAL_CONTACT_EMAIL}`}
          className="font-semibold text-primary hover:underline"
        >
          {LEGAL_CONTACT_EMAIL}
        </a>
      </p>
    </div>
  );
}
