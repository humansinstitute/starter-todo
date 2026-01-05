export const elements = {
  loginPanel: document.querySelector("[data-login-panel]"),
  sessionControls: document.querySelector("[data-session-controls]"),
  errorTarget: document.querySelector("[data-login-error]"),
  logoutBtn: document.querySelector("[data-logout]"),
  copyIdBtn: document.querySelector("[data-copy-id]"),
  heroInput: document.querySelector("[data-hero-input]"),
  heroHint: document.querySelector("[data-hero-hint]"),
  avatarButton: document.querySelector("[data-avatar]"),
  avatarImg: document.querySelector("[data-avatar-img]"),
  avatarFallback: document.querySelector("[data-avatar-fallback]"),
  avatarMenu: document.querySelector("[data-avatar-menu]"),
  summaryPanel: document.querySelector("[data-summary-panel]"),
  summaryUpdated: document.querySelector("[data-summary-updated]"),
  summaryDay: document.querySelector("[data-summary-day]"),
  summaryDayText: document.querySelector("[data-summary-day-text]"),
  summaryWeek: document.querySelector("[data-summary-week]"),
  summaryWeekText: document.querySelector("[data-summary-week-text]"),
  summarySuggestions: document.querySelector("[data-summary-suggestions]"),
  summarySuggestionsText: document.querySelector("[data-summary-suggestions-text]"),
  qrModal: document.querySelector("[data-qr-modal]"),
  qrCloseBtn: document.querySelector("[data-qr-close]"),
  qrContainer: document.querySelector("[data-qr-container]"),
  showLoginQrBtn: document.querySelector("[data-show-login-qr]"),
  exportSecretBtn: document.querySelector("[data-export-secret]"),
  viewProfileBtn: document.querySelector("[data-view-profile]"),
  // PIN modal elements
  pinModal: document.querySelector("[data-pin-modal]"),
  pinCloseBtn: document.querySelector("[data-pin-close]"),
  pinTitle: document.querySelector("[data-pin-title]"),
  pinDescription: document.querySelector("[data-pin-description]"),
  pinDisplay: document.querySelector("[data-pin-display]"),
  pinDots: document.querySelectorAll("[data-pin-dot]"),
  pinError: document.querySelector("[data-pin-error]"),
  pinKeypad: document.querySelector("[data-pin-keypad]"),
  // Profile modal elements
  profileModal: document.querySelector("[data-profile-modal]"),
  profileCloseBtn: document.querySelector("[data-profile-close]"),
  profileView: document.querySelector("[data-profile-view]"),
  profileAvatar: document.querySelector("[data-profile-avatar]"),
  profileName: document.querySelector("[data-profile-name]"),
  profileNip05: document.querySelector("[data-profile-nip05]"),
  profileAbout: document.querySelector("[data-profile-about]"),
  profileNpub: document.querySelector("[data-profile-npub]"),
  profileEditBtn: document.querySelector("[data-profile-edit-btn]"),
  profileEditForm: document.querySelector("[data-profile-edit-form]"),
  profileEditName: document.querySelector("[data-profile-edit-name]"),
  profileEditAbout: document.querySelector("[data-profile-edit-about]"),
  profileEditPicture: document.querySelector("[data-profile-edit-picture]"),
  profileEditStatus: document.querySelector("[data-profile-edit-status]"),
  profileEditCancel: document.querySelector("[data-profile-edit-cancel]"),
};

export const show = (el) => el?.removeAttribute("hidden");
export const hide = (el) => el?.setAttribute("hidden", "hidden");
export const setText = (el, text) => {
  if (el) el.textContent = text;
};
export const focusHeroInput = () => {
  const input = document.getElementById("title");
  if (input) input.focus();
};
