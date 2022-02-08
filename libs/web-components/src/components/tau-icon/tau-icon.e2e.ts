// Dependencies
import { newE2EPage } from '@stencil/core/testing';

describe('tau-icon component e2e', () => {
  it('should render a tau-icon.', async () => {
    const page = await newE2EPage();

    await page.setContent(`<tau-icon></tau-icon>`);

    const el = await page.find('tau-icon');

    expect(el).not.toBeNull();
  });
});
