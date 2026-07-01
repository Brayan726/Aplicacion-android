/**
 * Z-Index Tokens
 * Layering hierarchy for overlays and floating elements.
 */

export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modalBackdrop: 400,
  modal: 500,
  popover: 600,
  toast: 700,
  tooltip: 800,
} as const;

export type ZIndexToken = typeof zIndex;
