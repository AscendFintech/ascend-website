import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ScanSearch,
  BarChart3,
  Printer,
  FileSpreadsheet,
  Boxes,
  CalendarClock,
  Workflow,
  X,
  ArrowRight,
} from 'lucide-react';
import Reveal from './motion/Reveal';
import { StaggerGroup, StaggerItem } from './motion/Stagger';
import SpotlightCard from './motion/SpotlightCard';
import IconBadge from './motion/IconBadge';

interface CaseStudy {
  icon: React.ElementType;
  tag: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
  image?: string;
}

const caseStudies: CaseStudy[] = [
  {
    icon: ScanSearch,
    tag: 'Custom Frappe App',
    title: 'Reverse Image Search for Item Lookup',
    client: 'A multi-brand electronics & accessories distributor',
    image: 'https://demoascend.u.frappe.cloud/files/similar_items_generic.png',
    challenge:
      "Customers and even sales staff often only had a photo of a product — from a supplier catalog, a customer's WhatsApp message, or an old invoice — with no item code attached. Searching by name or category in ERPNext's Item list meant scrolling through lookalike SKUs, and quotations were getting delayed while staff cross-checked photos manually against the catalog.",
    solution:
      "We built a custom image search module on top of the ERPNext Item doctype. Every item's reference images are indexed using an image-similarity model; staff — and eventually customers, through a simple upload widget — can drop in any photo and instantly get a ranked list of the closest-matching items, complete with live stock and pricing pulled straight from ERPNext.",
    result:
      "What used to be a five-minute back-and-forth over WhatsApp screenshots is now a search that returns matches in seconds, straight from the item master staff already trust.",
  },
  {
    icon: BarChart3,
    tag: 'Custom Dashboard',
    title: 'Sales Dashboard & Per-Salesperson Metrics',
    client: 'A trading company with a growing multi-person sales team',
    challenge:
      "Sales leadership had no single view of how each team member was actually performing — quotations, follow-ups, and closed deals lived across spreadsheets, WhatsApp updates, and gut feel. It was hard to tell who was closing well versus who needed coaching, and end-of-month reviews were largely anecdotal.",
    solution:
      "We built a custom sales dashboard inside ERPNext that pulls directly from Quotations, Sales Orders, and Sales Invoices to show each salesperson's pipeline, conversion rate, and revenue closed — side by side, refreshed live, with drill-down into individual deals.",
    result:
      "Sales leadership now runs weekly reviews off real numbers instead of memory, and has already used the dashboard to recognize its top performer and pinpoint exactly where a struggling rep's pipeline was leaking.",
  },
  {
    icon: Printer,
    tag: 'Custom Print Format',
    title: 'Item-Wise & Lump-Sum Print Formats',
    client: 'A contracting and trading business serving both product buyers and service clients',
    challenge:
      "The same business needed to send very different documents depending on the customer — a detailed, line-by-line breakdown for product buyers who wanted to see every item and rate, and a clean, lump-sum summary for service clients who just wanted the bottom line. The default print format couldn't do both without manual editing after export.",
    solution:
      "We built configurable print format templates for Quotations and Sales Invoices that toggle between a fully itemized layout and a summarized lump-sum layout, selectable per document — no duplicate records, no manual reformatting.",
    result:
      "Sales staff now generate the right document for the right client in one click, and every version still comes out of the exact same ERPNext source data.",
  },
  {
    icon: FileSpreadsheet,
    tag: 'Custom Report',
    title: 'Client-Facing Statement of Account Reports',
    client: 'A distribution business managing dozens of active credit accounts',
    challenge:
      "Chasing payments meant manually compiling each client's outstanding invoices, credit notes, and payment history into a statement before it could even be sent — a task that ate up the accounts team's time every month and left plenty of room for outdated or incorrect balances.",
    solution:
      "We built a branded, client-facing Statement of Account report directly from ERPNext's accounts data — outstanding invoices, aging, and running balance generated and exportable in a click, with the option to schedule it to go out automatically.",
    result:
      "The accounts team now sends accurate, professional statements in a fraction of the time, and clients get fewer surprises — and fewer disputes — about what they owe.",
  },
  {
    icon: Boxes,
    tag: 'Custom Workflow',
    title: 'Quotation Workflow for Configurable Products',
    client: 'A manufacturer of made-to-order products with multiple configurable parts',
    challenge:
      "A single item could be made up of several parts, and each part had its own set of variations — think a base unit plus a choice of finish, size, and add-ons. The standard quotation line only handled one product at a time, so quoting a configured item meant manually itemizing every part and variation by hand, and it was easy to miss a combination or misquote a price.",
    solution:
      "We extended the Quotation doctype so a single line item can expand into its component parts, each with its own variant selection and price rule, all rolling up into one accurate line total — while still keeping the underlying part-level detail for production.",
    result:
      "Sales can now quote complex, configurable products in minutes instead of a back-and-forth spreadsheet exercise, with far fewer pricing mistakes reaching the customer.",
  },
  {
    icon: CalendarClock,
    tag: 'Custom HR Logic',
    title: 'Leave Policies Based on Date of Joining',
    client: 'A company with a tenure-based leave policy',
    challenge:
      "Leave entitlement was supposed to increase the longer an employee had been with the company, but standard leave policy assignment didn't automatically account for each employee's joining date — HR was manually recalculating and reassigning leave policies as staff crossed tenure milestones.",
    solution:
      "We built custom logic that reads each employee's date of joining and automatically assigns — and updates — the correct leave policy and entitlement as they cross each tenure threshold, with no manual recalculation.",
    result:
      "HR no longer tracks tenure milestones on the side in a spreadsheet — leave balances are always correct, automatically, from day one of employment through every work anniversary.",
  },
  {
    icon: Workflow,
    tag: 'Custom Workflow',
    title: 'Multi-Level Delivery & Approval Workflows',
    client: 'A distribution business with multi-level dispatch sign-off',
    challenge:
      "Deliveries needed sign-off from more than one person before dispatch — a warehouse check, then a manager approval — but the default delivery process didn't enforce that chain, so shipments occasionally went out before every check was actually done.",
    solution:
      "We configured a custom workflow on the Delivery Note doctype with defined states and role-based transitions, so a delivery literally cannot move to \"ready to dispatch\" until each required approval has been logged in the system.",
    result:
      "Every dispatch now carries a clean audit trail of who checked and approved what, giving the business a system-enforced guarantee that nothing ships without the right sign-offs.",
  },
];

const CaseStudies: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeStudy = activeIndex !== null ? caseStudies[activeIndex] : null;

  return (
    <section className="relative pt-24 pb-20 bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(212,160,76,0.07),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 mt-8">
          <Reveal>
            <span className="inline-block text-sm font-semibold tracking-widest text-gold-400 uppercase mb-4">
              Case Studies
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real Problems, <span className="text-accent">Custom-Built Solutions</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              A look at how we've extended ERPNext and Frappe beyond the box for clients whose
              workflows didn't fit a default install — click a card to read the full story
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <StaggerItem key={study.title}>
                <button onClick={() => setActiveIndex(index)} className="w-full h-full text-left">
                  <SpotlightCard className="p-6 h-full flex flex-col">
                    <IconBadge className="mb-4">
                      <Icon className="text-gold-400" size={24} strokeWidth={1.75} />
                    </IconBadge>
                    <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase mb-2">
                      {study.tag}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-sm text-stone-500 italic mb-4">{study.client}</p>
                    <p className="text-stone-400 text-sm leading-relaxed line-clamp-3 mb-4">
                      {study.challenge}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400">
                      Read case study
                      <ArrowRight size={16} />
                    </span>
                  </SpotlightCard>
                </button>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>

      <AnimatePresence>
        {activeStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glow-border bg-ink-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-white/10 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <IconBadge>
                    <activeStudy.icon className="text-gold-400" size={24} strokeWidth={1.75} />
                  </IconBadge>
                  <div>
                    <span className="block text-xs font-semibold tracking-widest text-gold-400 uppercase mb-1">
                      {activeStudy.tag}
                    </span>
                    <h2 className="text-xl font-bold text-white">{activeStudy.title}</h2>
                  </div>
                </div>
                <button
                  onClick={() => setActiveIndex(null)}
                  className="text-stone-400 hover:text-white transition-colors flex-shrink-0"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6">
                <p className="text-sm text-stone-500 italic mb-6">{activeStudy.client}</p>
                {activeStudy.image && (
                  <img
                    src={activeStudy.image}
                    alt={activeStudy.title}
                    className="w-full rounded-2xl border border-white/10 object-cover mb-6"
                  />
                )}
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-gold-400 uppercase mb-1">
                      Challenge
                    </p>
                    <p className="text-stone-400 leading-relaxed">{activeStudy.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-gold-400 uppercase mb-1">
                      Solution
                    </p>
                    <p className="text-stone-400 leading-relaxed">{activeStudy.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-gold-400 uppercase mb-1">
                      Result
                    </p>
                    <p className="text-stone-300 leading-relaxed">{activeStudy.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudies;
