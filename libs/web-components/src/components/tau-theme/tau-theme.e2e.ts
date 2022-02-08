// Dependencies
import { newE2EPage } from '@stencil/core/testing';

describe('tau-theme component e2e', () => {
  it('should render a tau-theme.', async () => {
    const page = await newE2EPage();

    await page.setContent(`<tau-theme></tau-theme>`);

    const el = await page.find('tau-theme');

    expect(el).not.toBeNull();
  });

  it('should render class referring to theme on host.', async () => {
    const theme = 'tau-light';

    const page = await newE2EPage();

    await page.setContent(`<tau-theme theme=${theme}></tau-theme>`);

    const el = await page.find('tau-theme');

    expect(el.classList.contains(theme)).toBe(true);
  });

  it('should issue limn event.', async () => {
    const limnDetail = {
      old: 'tau-dark',
      current: 'tau-dark',
    };

    const page = await newE2EPage();

    await page.setContent(`<tau-theme theme='tau-light'></tau-theme>`);

    const el = await page.find('tau-theme');

    el.setAttribute('theme', 'tau-dark');

    const tauLimn = await el.spyOnEvent('tauLimn');

    await page.waitForChanges();

    expect(tauLimn).toHaveReceivedEvent();
    expect(tauLimn).toHaveReceivedEventDetail(limnDetail);
  });

  it('must update class on host if theme is updated.', async () => {
    const theme = 'tau-dark';

    const page = await newE2EPage();

    await page.setContent(`<tau-theme theme='tau-light'></tau-theme>`);

    const el = await page.find('tau-theme');

    el.setProperty('theme', theme);

    await page.waitForChanges();

    expect(el.classList.contains(theme)).toBe(true);
  });
});
