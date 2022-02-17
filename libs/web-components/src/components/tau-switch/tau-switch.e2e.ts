// Dependencies
import { newE2EPage } from '@stencil/core/testing';

describe('tau-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(`<tau-switch></tau-switch>`);

    const tauSwitch = await page.find('tau-switch');
    expect(tauSwitch).toHaveClass('hydrated');
  });

  it('should emit tauChange event when clicked', async () => {
    const page = await newE2EPage();

    const checked = true;

    await page.setContent(`<tau-switch checked=${checked}></tau-switch>`);

    const tauSwitch = await page.find('tau-switch');

    tauSwitch.click();

    const tauChange = await page.spyOnEvent('tauChange');

    await page.waitForChanges();

    expect(tauChange).toHaveReceivedEvent();
    expect(tauChange).toHaveReceivedEventDetail(!checked);
  });

  it('should add class checked to wrapper when host is clicked', async () => {
    const page = await newE2EPage();

    const checked = true;

    await page.setContent(`<tau-switch checked=${checked}></tau-switch>`);

    const tauSwitch = await page.find('tau-switch');
    const wrapperSwitch = await page.find('tau-switch >>> .wrapper');

    tauSwitch.click();

    await page.waitForChanges();

    const tauProp = await tauSwitch.getProperty('checked');

    await page.waitForChanges();

    expect(wrapperSwitch.classList.contains('checked')).toBe(tauProp);
  });
});
