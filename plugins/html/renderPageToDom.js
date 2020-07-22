const { printDonationReminder } = require("@lsos/donation-reminder");
const browserConfig = require("@brillout/browser-config");
const CONTAINER_ID = require("./CONTAINER_ID");
const assert = require("@brillout/reassert");

module.exports = renderPageToDom;

printDonationReminder({
  npmName: "@goldpage",
  projectName: "Goldpage",
  donationText:
    "Bonjour :slight_smile:, I am Romuald, any help is motivating me a lot :heart:",
  minNumberOfAuthors: 0,
});

async function renderPageToDom({ initialProps }) {
  assert.internal(initialProps);

  await browserConfig.domRender({
    page: initialProps.__sources.pageConfig,
    CONTAINER_ID,
    initialProps,
  });
}
