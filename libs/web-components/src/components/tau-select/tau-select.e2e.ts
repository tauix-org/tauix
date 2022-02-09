// Dependencies
import { newE2EPage } from '@stencil/core/testing';

describe('tau-select component e2e', () => {
  it('should render a tau-select.', async () => {
    const page = await newE2EPage();

    await page.setContent(`<tau-select></tau-select>`);

    const el = await page.find('tau-select');

    expect(el).not.toBeNull();
  });
});
