// Dependencies
import { newE2EPage } from '@stencil/core/testing';

describe('tau-page component e2e', () => {
  it('should render a tau-ripple.', async () => {
    const page = await newE2EPage();

    await page.setContent(`<tau-page></tau-page>`);

    const el = await page.find('tau-page');

    expect(el).not.toBeNull();
  });

  it('must have scroll class when it has withScroll prop as true.', async () => {
    const page = await newE2EPage();

    await page.setContent(`<tau-page></tau-page>`);

    const el = await page.find('tau-page');

    el.setProperty('withScroll', true);

    await page.waitForChanges();

    expect(el.classList.contains('scroll')).toBe(true);
  });
});
