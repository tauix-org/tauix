// Dependencies
import { newE2EPage } from '@stencil/core/testing';

describe('tau-select component e2e', () => {
  const options = [
    {
      title: 'Material',
    },
    {
      title: 'Ionic',
    },
  ];

  it('should render a tau-select.', async () => {
    const page = await newE2EPage();

    await page.setContent(`<tau-select></tau-select>`);

    const el = await page.find('tau-select');

    expect(el).not.toBeNull();
  });

  it('should open when clicked.', async () => {
    const page = await newE2EPage();

    await page.setContent(`<tau-select></tau-select>`);

    const select = await page.find('tau-select');

    select.setProperty('options', options);

    await page.waitForChanges();

    const selectWrapper = await page.find('tau-select >>> .wrapper');
    const selectHeader = await page.find('tau-select >>> .select-header');

    selectHeader.click();

    await page.waitForChanges();

    expect(selectWrapper.classList.contains('open')).toBe(true);
  });

  it('should close when the component was not the element clicked.', async () => {
    const page = await newE2EPage();

    await page.setContent(`<div><div><tau-select></tau-select>`);

    const select = await page.find('tau-select');

    select.setProperty('options', options);

    await page.waitForChanges();

    const selectWrapper = await page.find('tau-select >>> .wrapper');
    const selectHeader = await page.find('tau-select >>> .select-header');
    const outherEl = await page.find('div');

    selectHeader.click();

    await page.waitForChanges();

    outherEl.click();

    await page.waitForChanges();

    expect(selectWrapper.classList.contains('open')).toBe(false);
  });

  it('should close when a component option is clicked.', async () => {
    const page = await newE2EPage();

    await page.setContent(`<tau-select></tau-select>`);

    const select = await page.find('tau-select');

    select.setProperty('options', options);

    await page.waitForChanges();

    const selectWrapper = await page.find('tau-select >>> .wrapper');
    const selectHeader = await page.find('tau-select >>> .select-header');
    const selectOptions = await page.findAll('tau-select >>> .select-option');

    selectHeader.click();

    await page.waitForChanges();

    selectOptions[0].click();

    await page.waitForChanges();

    expect(selectWrapper.classList.contains('open')).toBe(false);
  });

  it('should emit events such as data referring to clicked.', async () => {
    const page = await newE2EPage();
    const positionOptionSelected = 0;

    await page.setContent(`<tau-select></tau-select>`);

    const select = await page.find('tau-select');

    select.setProperty('options', options);

    await page.waitForChanges();

    const selectHeader = await page.find('tau-select >>> .select-header');
    const selectOptions = await page.findAll('tau-select >>> .select-option');

    selectHeader.click();

    await page.waitForChanges();

    const tauChange = await select.spyOnEvent('tauChange');

    selectOptions[positionOptionSelected].click();

    await page.waitForChanges();

    expect(tauChange).toHaveReceivedEvent();
    expect(tauChange).toHaveReceivedEventDetail(options[positionOptionSelected]);
  });

  it('wrapper must have class active when prop active is true.', async () => {
    const page = await newE2EPage();

    await page.setContent(`<tau-select></tau-select>`);

    const select = await page.find('tau-select');

    select.setProperty('active', true);

    const selectWrapper = await page.find('tau-select >>> .wrapper');

    await page.waitForChanges();

    expect(selectWrapper.classList.contains('active')).toBe(true);
  });
});
