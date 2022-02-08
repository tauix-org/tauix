// Dependencies
import { newE2EPage } from '@stencil/core/testing';

describe('tau-ripple component e2e', () => {
  it('should render a tau-ripple.', async () => {
    const page = await newE2EPage();

    await page.setContent(`<tau-ripple></tau-ripple>`);

    const el = await page.find('tau-ripple');

    expect(el).not.toBeNull();
  });
});
