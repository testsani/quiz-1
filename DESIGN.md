# Airbnb Design System (DESIGN.md)

> Sourced from the Airbnb Design Language System specifications (via getdesign.md).

## 1. Visual Theme & Philosophy
- **Identity**: Clean, warm, photography-forward, human-centric hospitality marketplace.
- **Canvas**: Pure crisp white (`#FFFFFF`) with subtle warm-gray surface layers (`#F7F7F7`, `#F9F9F9`).
- **Accent**: Signature **Airbnb Rausch** (`#FF385C`), active `#E00B41`, and the iconic Rausch gradient (`linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)`).
- **Dividers & Hairlines**: Deliberate, crisp 1px borders (`#EBEBEB` for light editorial dividers, `#DDDDDD` for inputs and cards).
- **Shadows**: Soft, tactile, layered elevation (`0 1px 2px rgba(0,0,0,0.08)`, `0 6px 16px rgba(0,0,0,0.08)`, `0 12px 28px rgba(0,0,0,0.12)`).

## 2. Color Tokens
| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `color-primary` (Rausch) | `#FF385C` | Key CTA buttons, badges, brand accents |
| `color-primary-dark` | `#E00B41` | Button hover/active states |
| `color-primary-gradient` | `linear-gradient(to right, #E61E4D, #E31C5F, #D70466)` | Signature Airbnb hero CTA |
| `color-ink` | `#222222` | Display headings, high-emphasis text, active tabs |
| `color-body` | `#484848` | Standard paragraph, question context |
| `color-muted` | `#717171` | Helper labels, captions, metadata |
| `color-border` | `#DDDDDD` | Default interactive card/option borders |
| `color-hairline` | `#EBEBEB` | Section dividers, subtle frames |
| `color-surface` | `#FFFFFF` | Main card and popover backgrounds |
| `color-surface-soft` | `#F7F7F7` | Subtle backgrounds, option hover |
| `color-success` | `#008489` / `#10B981` | Correct answers, verified status |
| `color-danger` | `#C13515` / `#FF385C` | Incorrect answers, alerts |

## 3. Typography & Spacing
- **Font Stack**: Airbnb Cereal VF, Pretendard, 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif.
- **Hierarchy**:
  - Hero / Display: 26px ~ 32px, font-weight 700~800, tight letter-spacing (-0.02em).
  - Section Headings: 20px ~ 24px, font-weight 600~700.
  - Body & Context: 15px ~ 17px, line-height 1.6~1.7.
  - Sub-labels: 12px ~ 13px, font-weight 500~600.

## 4. Components & Geometry
- **Search-Pill Bar**: Iconic Airbnb rounded-full pill floating navigation with subtle shadow.
- **Cards**: Soft 16px ~ 20px corner radius (`rounded-2xl`), 1px `#EBEBEB` border, subtle hover lift.
- **Option Buttons**: Generous touch targets (min 56px height), clean white background, `#DDDDDD` border, crisp selected state with `#222222` or `#FF385C` border and subtle background tint.
- **Badges**: Superhost-style badges with star icon, rounded-full pills with subtle neutral borders.
