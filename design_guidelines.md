# Doctor Portal - Design Guidelines

## Design Approach: Medical-Grade Design System

**Selected Framework:** Material Design 3 with Healthcare Adaptations  
**Rationale:** Healthcare applications demand trust, clarity, and efficiency. Material Design provides enterprise-grade components optimized for information-dense interfaces while maintaining professional aesthetics.

**Core Principles:**
- Clinical Clarity: Information hierarchy prioritizes patient safety and data accuracy
- Professional Trust: Visual design conveys medical expertise and reliability
- Efficient Workflows: Minimize cognitive load for busy healthcare professionals
- Responsive Accessibility: WCAG 2.1 AA compliance across all viewports

---

## Color Palette

### Light Mode
- **Primary:** 210 100% 45% (Medical Blue - trust, professionalism)
- **Primary Hover:** 210 100% 40%
- **Secondary:** 210 15% 25% (Charcoal - text, headings)
- **Accent:** 160 75% 45% (Teal - success states, positive actions)
- **Background:** 210 20% 98% (Soft White)
- **Surface:** 0 0% 100% (Pure White - cards, modals)
- **Border:** 210 15% 88%
- **Text Primary:** 210 15% 20%
- **Text Secondary:** 210 10% 45%

### Dark Mode
- **Primary:** 210 100% 55%
- **Primary Hover:** 210 100% 50%
- **Secondary:** 210 10% 85%
- **Accent:** 160 65% 50%
- **Background:** 210 15% 10%
- **Surface:** 210 12% 14%
- **Border:** 210 10% 22%
- **Text Primary:** 210 10% 92%
- **Text Secondary:** 210 8% 70%

### Status Colors
- **Success:** 160 75% 45% (Appointments confirmed, operations successful)
- **Warning:** 35 90% 55% (Pending actions, attention needed)
- **Error:** 0 75% 55% (Critical alerts, validation errors)
- **Info:** 210 100% 50% (Informational messages)

---

## Typography

**Font Stack:** Inter (via Google Fonts CDN) - exceptional medical interface legibility

### Hierarchy
- **H1 (Hero):** text-5xl md:text-6xl font-bold tracking-tight
- **H2 (Section Headers):** text-3xl md:text-4xl font-semibold
- **H3 (Card Titles):** text-xl md:text-2xl font-semibold
- **H4 (Subsections):** text-lg font-semibold
- **Body Large:** text-lg leading-relaxed
- **Body:** text-base leading-relaxed
- **Small/Caption:** text-sm text-secondary
- **Labels:** text-sm font-medium uppercase tracking-wide

**Medical Data Typography:**
- Patient names: font-semibold
- Medical terms: font-medium
- Timestamps: text-sm tabular-nums (consistent number width)

---

## Layout System

**Spacing Primitives:** Tailwind units of **2, 4, 6, 8, 12, 16** (p-2, m-4, gap-6, py-8, space-y-12, mt-16)

### Grid Structure
- **Landing Page:** max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- **Dashboards:** Sidebar (w-64) + Main Content (flex-1 max-w-7xl)
- **Forms:** max-w-2xl for optimal readability
- **Cards Grid:** grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

### Responsive Breakpoints
- Mobile: base (forms stack, single column)
- Tablet: md (2-column grids, compact sidebar)
- Desktop: lg+ (3-column grids, full sidebar)

---

## Component Library

### Navigation
- **Navbar:** Sticky top-0, backdrop-blur-md, shadow-sm, py-4
  - Logo left, nav items center/right, Login button with primary color
- **Sidebar (Dashboards):** Fixed left, h-screen, bg-surface, border-r
  - Icons (Heroicons) + labels, active state with bg-primary/10 + border-l-4

### Core UI Elements

**Buttons:**
- Primary: bg-primary text-white hover:bg-primary-hover rounded-lg px-6 py-3
- Secondary: border-2 border-primary text-primary hover:bg-primary/5
- Outline on Images: backdrop-blur-md bg-white/20 border border-white/30 text-white

**Cards:**
- bg-surface rounded-xl shadow-sm border border-border p-6
- Hover: shadow-md transition-shadow
- Doctor Cards: Image top, rounded-t-xl, info below with p-6

**Forms:**
- Inputs: border-2 border-border rounded-lg px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/10
- Dark mode inputs: bg-surface border-border
- Labels: text-sm font-medium mb-2 block
- Validation: Error states with text-error border-error

**Tables (Patient/Appointment Lists):**
- Zebra striping: odd:bg-surface even:bg-background
- Headers: bg-surface/50 font-semibold text-sm uppercase
- Cells: py-4 px-6, responsive scrolling on mobile

**Stats Cards (Doctor Dashboard):**
- Grid layout, large numbers (text-4xl font-bold), small labels below
- Icons top-left with bg-primary/10 rounded-lg p-3

### Data Displays
- **Status Badges:** Inline-flex px-3 py-1 rounded-full text-xs font-medium
  - Confirmed: bg-success/10 text-success
  - Pending: bg-warning/10 text-warning
  - Cancelled: bg-error/10 text-error

**Modal/Dialog:**
- Backdrop: bg-black/50 backdrop-blur-sm
- Content: bg-surface rounded-2xl shadow-2xl max-w-lg mx-auto p-8

---

## Page-Specific Layouts

### Landing Page
- **Hero:** h-[600px] with gradient overlay (from-primary/90 to-primary/60) over medical imagery
  - Centered content: max-w-4xl mx-auto text-center text-white
  - CTA button with backdrop-blur effect
- **Featured Doctors:** 3-column grid (lg:grid-cols-3 md:grid-cols-2), gap-8
- **Contact Section:** 2-column layout (form left, info+map right on lg)

### Appointment Form
- Centered max-w-2xl, card-style with shadow-lg
- 2-column layout for Name/Phone, single column for select/textarea
- Date/Time: side-by-side on desktop (grid-cols-2)
- Confirmation: Success modal with checkmark icon

### Dashboards
- **Sidebar:** 256px fixed, scrollable content area
- **Main Content:** p-8, breadcrumbs top, page title mb-8
- **Data Tables:** Full-width with horizontal scroll on mobile
- **Action Buttons:** Top-right of sections (Add Doctor, Export, etc.)

---

## Images

### Hero Section (Landing)
- **Type:** Full-width medical environment photography
- **Content:** Modern hospital corridor, medical team collaboration, or clean clinic interior
- **Treatment:** Dark gradient overlay (from-primary/90 to-transparent) for text legibility
- **Dimensions:** min-h-[600px], object-cover

### Doctor Cards
- **Type:** Professional headshots
- **Dimensions:** aspect-square, rounded-t-xl (matches card border radius)
- **Fallback:** Initials in colored circle if no image

### Dashboard Illustrations
- **Empty States:** Medical-themed line illustrations for "No appointments yet"
- **Icons:** Heroicons throughout (outline for inactive, solid for active states)

---

## Animations

**Minimal Motion Philosophy** - Healthcare interfaces prioritize stability:
- Card hover: transition-shadow duration-200
- Button states: transition-colors duration-150
- Page transitions: Simple fade (opacity 0→1, 200ms)
- **No:** Complex scroll animations, auto-playing carousels, or attention-grabbing movements

---

## Accessibility & Dark Mode

- All form inputs maintain consistent dark mode styling (bg-surface, border-border)
- Focus states: 4px ring with primary/10 opacity
- Contrast ratios: 4.5:1 minimum for text, 3:1 for interactive elements
- Dark mode toggle: Top-right of navbar, smooth transition-colors duration-300