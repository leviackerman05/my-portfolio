export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const copyEmail = async (email: string) => {
  try {
    await navigator.clipboard.writeText(email);
    return true;
  } catch {
    return false;
  }
};
