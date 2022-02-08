import { newE2EPage } from '@stencil/core/testing';

describe('tau-flex', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tau-flex></tau-flex>');

    const element = await page.find('tau-flex');
    expect(element).toHaveClass('hydrated');
  });
});
