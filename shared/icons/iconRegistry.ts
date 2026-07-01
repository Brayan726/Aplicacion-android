/**
 * Icon Registry
 * Centralized MaterialCommunityIcons names — never repeat icon strings.
 */

export const Icons = {
  // Navigation
  back: 'arrow-left',
  forward: 'arrow-right',
  close: 'close',
  menu: 'menu',
  chevronDown: 'chevron-down',
  chevronUp: 'chevron-up',
  chevronLeft: 'chevron-left',
  chevronRight: 'chevron-right',

  // Actions
  add: 'plus',
  edit: 'pencil-outline',
  delete: 'delete-outline',
  save: 'content-save-outline',
  search: 'magnify',
  filter: 'filter-variant',
  sort: 'sort',
  refresh: 'refresh',
  share: 'share-variant-outline',
  download: 'download-outline',
  upload: 'upload-outline',
  copy: 'content-copy',
  more: 'dots-vertical',
  moreHorizontal: 'dots-horizontal',

  // Auth
  login: 'login',
  logout: 'logout',
  lock: 'lock-outline',
  unlock: 'lock-open-outline',
  eye: 'eye-outline',
  eyeOff: 'eye-off-outline',

  // Sports / App specific
  athlete: 'account-outline',
  athletes: 'account-group-outline',
  training: 'dumbbell',
  session: 'calendar-clock',
  competition: 'trophy-outline',
  attendance: 'clipboard-check-outline',
  performance: 'chart-line',
  report: 'file-chart-outline',
  calendar: 'calendar-outline',
  timer: 'timer-outline',
  stopwatch: 'timer-sand',

  // Status
  check: 'check',
  checkCircle: 'check-circle-outline',
  error: 'alert-circle-outline',
  warning: 'alert-outline',
  info: 'information-outline',
  success: 'check-circle',

  // UI
  home: 'home-outline',
  settings: 'cog-outline',
  notification: 'bell-outline',
  help: 'help-circle-outline',
  empty: 'inbox-outline',
  loading: 'loading',
  wifiOff: 'wifi-off',
  permission: 'shield-lock-outline',
  camera: 'camera-outline',
  image: 'image-outline',
  phone: 'phone-outline',
  email: 'email-outline',
  location: 'map-marker-outline',
  star: 'star-outline',
  starFilled: 'star',
  heart: 'heart-outline',
  bookmark: 'bookmark-outline',

  // Stats
  trendingUp: 'trending-up',
  trendingDown: 'trending-down',
  chart: 'chart-bar',
  medal: 'medal-outline',
} as const;

export type IconName = (typeof Icons)[keyof typeof Icons];
