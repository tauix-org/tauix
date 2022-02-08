export const getColorContrast = (color: string) => {
  if (color) {
    const hydrate = color.replace(' ', '');

    if (hydrate) {
      const rain = hydrate.includes('#') ? convertHexToRGB(hydrate) : hydrate;

      if (rain.includes('rgba') && rain.includes(', 0)')) {
        return 'var(--tau-primary)';
      }

      const rgb = rain?.split(')')[0]?.split('rgb(')[1];

      if (rgb) {
        const r = parseInt(rgb?.split(',')[0]);
        const g = parseInt(rgb?.split(',')[1]);
        const b = parseInt(rgb?.split(',')[2]);

        return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
      }
    }
  }
};

export const applyStyles = (styles: object, el: HTMLElement) => {
  el &&
    Object.keys(styles).map(
      (keyStyle: string) => (el.style[keyStyle] = styles[keyStyle])
    );
};

export const applyStyleSlotted = (styles: object, slot: HTMLSlotElement) => {
  const els = slot.assignedElements();

  els.forEach((el: HTMLElement) => applyStyles(styles, el));
};

export const convertHexToRGB = (color: string) => {
  const hex = color.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (_m, r, g, b) => r + r + g + g + b + b
  );

  const hax = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return hax
    ? `rgb(${parseInt(hax[1], 16)}, ${parseInt(hax[2], 16)}, ${parseInt(hax[3], 16)})`
    : null;
};

export const transportAttributes = (el: HTMLElement, destiny: HTMLElement) =>
  el
    .getAttributeNames()
    .map(
      (attr: string) =>
        attr != 'class' &&
        attr != 'id' &&
        attr != 'style' &&
        destiny.setAttribute(attr, el.getAttribute(attr))
    );
