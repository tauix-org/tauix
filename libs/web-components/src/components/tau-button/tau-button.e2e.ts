// Dependencies
import { newE2EPage } from '@stencil/core/testing';

describe('button component e2e', () => {
  it('should render a tau-buttons.', async () => {
    const page = await newE2EPage();

    await page.setContent(`<tau-button></tau-button>`);

    const el = await page.find('tau-button');

    expect(el).not.toBeNull();
  });

  it('should issue submit event.', async () => {
    const page = await newE2EPage();

    await page.setContent(`<tau-button type="submit"></tau-button>`);

    const button = await page.find('tau-button');

    button.click();

    const tauSubmit = await page.spyOnEvent('tauSubmit');

    await page.waitForChanges();

    expect(tauSubmit).toHaveReceivedEventDetail(true);
    expect(tauSubmit).toHaveReceivedEvent();
  });

  it('should issue reset event.', async () => {
    const page = await newE2EPage();

    await page.setContent(`<tau-button type="reset"></tau-button>`);

    const button = await page.find('tau-button');

    button.click();

    const tauReset = await page.spyOnEvent('tauReset');

    await page.waitForChanges();

    expect(tauReset).toHaveReceivedEventDetail(true);
    expect(tauReset).toHaveReceivedEvent();
  });

  it('must render el in slot.', async () => {
    const page = await newE2EPage();

    await page.setContent(`<tau-button><span>E2E</span></tau-button>`);

    const span = await page.find('tau-button span');

    const slot = await page.find('tau-button >>> slot');

    expect(span).not.toBeNull();
    expect(slot).not.toBeNull();
    expect(span).toEqualText('E2E');
  });

  it('should render it when button has href.', async () => {
    const url = 'https://youtube.com';

    const page = await newE2EPage();

    await page.setContent(`<tau-button href=${url}></tau-button>`);

    const a = await page.find('tau-button >>> a');

    expect(a).not.toBeNull();
    expect(a.getAttribute('href')).toEqual(url);
  });

  it('must have class related to size prop.', async () => {
    const size = 'small';

    const page = await newE2EPage();

    await page.setContent(`<tau-button size=${size}></tau-button>`);

    const button = await page.find('tau-button >>> button,a');

    expect(button.classList.contains(size)).toBe(true);
  });

  it('should not emit any events when it is disabled.', async () => {
    const disable = true;
    const type: string = 'reset';

    const page = await newE2EPage();

    await page.setContent(
      `<tau-button type=${type} disable=${disable}></tau-button>`
    );

    const button = await page.find('tau-button');

    button.click();

    const tauReset = await page.spyOnEvent('tauReset');
    const tauSubmit = await page.spyOnEvent('tauSubmit');

    await page.waitForChanges();

    expect(type == 'submit' ? tauSubmit : tauReset).not.toHaveReceivedEvent();
  });
});
