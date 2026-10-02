---
name: apple-design
description: >-
  Elite Apple Human Interface Guidelines (HIG) & Design System Skill.
  Enforces Apple-grade frosted glassmorphism, SF Pro typography, precise spring physics,
  tactile micro-interactions, dynamic light/dark mode translucency, and pristine aesthetic hierarchy.
---

# Apple Design System & Human Interface Guidelines (HIG) Skill

This skill provides an authoritative guide for building web interfaces that reflect Apple’s world-class visual identity and Human Interface Guidelines (HIG).

---

## 1. Core Principles of Apple Web Design

### 1. Transparency & Translucency (Vibrancy & Frosted Glass)
* **Backdrop Blur**: Use `backdrop-filter: blur(20px) saturate(180%)` to create genuine depth.
* **Surface Glass**: Semi-transparent dark surfaces (`rgba(13, 34, 61, 0.6)`) or light surfaces (`rgba(255, 255, 255, 0.75)`).
* **Inner Highlights**: Use 1px subtle borders (`border: 1px solid rgba(255, 255, 255, 0.12)`) and inset top highlights (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2)`).

### 2. Typography & Hierarchy
* **Font Stacks**: Rely on `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif`.
* **Dynamic Type Scaling**: High contrast between headings (`font-weight: 700` or `800`) and body text (`font-weight: 400`, `line-height: 1.6`).
* **Balanced Headings**: Enforce `text-wrap: balance` on all major section headings to eliminate trailing single-word orphans.

### 3. Spring Physics & Micro-Interactions
* **Bezier Curves**: Use Apple signature spring curves: `cubic-bezier(0.16, 1, 0.3, 1)` or `cubic-bezier(0.34, 1.56, 0.64, 1)`.
* **Hover Scale**: Subtle elevate on hover (`transform: translateY(-4px) scale(1.01)`).
* **Tactile Buttons**: Capsule-shaped pill buttons (`border-radius: 9999px`) with glow shadows and active press states.

### 4. Layout & Spacing
* **Generous Padding**: Maintain large section vertical spacing (`padding: 6rem 0` or `8rem 0`).
* **Rounded Containers**: Use rounded corners (`border-radius: 20px` to `24px` for cards, `16px` for inner elements).
* **Clutter-Free Alignment**: Keep headings, subheadings, and primary CTAs centered or rhythmically structured.

---

## 2. Token Standards & CSS Utilities

```css
:root {
  /* Apple Glass Surface Tokens */
  --apple-glass-bg: rgba(255, 255, 255, 0.75);
  --apple-glass-border: rgba(255, 255, 255, 0.85);
  --apple-blur: blur(25px) saturate(190%);
  
  /* Apple Bezier Transitions */
  --apple-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --apple-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Apple Frosted Glass Card */
.apple-card {
  background: var(--surface-glass);
  backdrop-filter: var(--apple-blur);
  -webkit-backdrop-filter: var(--apple-blur);
  border: 1px solid var(--border-glass);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transition: transform 0.4s var(--apple-ease), box-shadow 0.4s var(--apple-ease);
}

.apple-card:hover {
  transform: translateY(-4px) scale(1.008);
  box-shadow: 0 30px 70px rgba(0, 132, 255, 0.25);
}

/* Apple Pill Button */
.apple-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 0 2rem;
  border-radius: 9999px;
  font-weight: 700;
  white-space: nowrap;
  transition: all 0.25s var(--apple-ease);
}
```

---

## 3. Checklist for Apple-Grade Quality

- [ ] All floating cards use true hardware-accelerated `backdrop-filter: blur(...)`.
- [ ] Buttons use full capsule pill radii (`9999px`) with single-line `white-space: nowrap`.
- [ ] No single-word widow lines in main headings (`text-wrap: balance`).
- [ ] Dark Mode & Light Mode translucency adapt seamlessly with high contrast contrast ratios.
- [ ] Smooth 60fps animations using transform and opacity only.
