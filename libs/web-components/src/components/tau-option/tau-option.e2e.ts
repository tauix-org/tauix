import { newE2EPage } from '@stencil/core/testing';

describe('tau-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tau-option></tau-option>');

    const element = await page.find('tau-option');
    expect(element).toHaveClass('hydrated');
  });
});
