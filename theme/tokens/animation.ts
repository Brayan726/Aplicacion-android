/**
 * Animation Tokens
 * Durations and easing for future animations.
 */

export const animation = {
  duration: {
    instant: 0,
    fast: 150,
    normal: 250,
    slow: 400,
    slower: 600,
  },
  easing: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
    accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  spring: {
    gentle: { damping: 20, stiffness: 180 },
    default: { damping: 15, stiffness: 250 },
    bouncy: { damping: 10, stiffness: 300 },
  },
} as const;

export type AnimationToken = typeof animation;
