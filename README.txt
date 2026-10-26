MTEC BORE & KEY — SHARED PRICING V4.2 — CUSTOMER

The MTEC quotation screen retains the original design.
The original MTEC Order Summary appears at the bottom when Place Order is clicked.
Pricing for 6-60mm bores, keyways, stainless and aluminium and grub screws
remains as approved. The grooves and boss controls remain archived.

IMPORTANT: Not yet connected or deployed to your actual GitHub Pages repository.

CUSTOMER VERSION:
- Publish index.html, LOGO.png, pricing.json, manifest.json and service-worker.js
  together in the actual GitHub Pages folder containing the calculator.
- The customer tool reads ./pricing.json on each page load, bypassing cache.
- If it cannot load published prices online it disables Place Order rather
  than present a possibly outdated quotation as valid.
- When opened offline as a file in Chrome, it previews the packaged launch
  prices because local browsers restrict fetch(file://).
- No Admin Settings or GitHub credentials in the Customer build.

ADMIN VERSION:
- Keep on your own PC; never upload the Admin copy to a public site.
- Open index.html in Chrome and select Admin Settings to change rates.
- Save Settings saves this Admin browser's values only.
- To publish, fill GitHub repository owner/repo, its Pages publishing branch,
  the path to pricing.json in that branch and a GitHub fine-grained personal
  access token scoped to that ONE repo with Contents read/write.
- The token is only used for that publish request and is never stored.
- Clicking Save & Publish Prices checks the current file's Git SHA, commits
  new prices to GitHub, and displays GitHub's response. GitHub Pages must
  deploy the change before customer browsers read it.
- Download Pricing File provides a manual upload option without a token.
- If the website embeds the GitHub calculator, one pricing.json controls both.
  If another calculator lives on mtecltd.co.uk as separate static files, it
  must be pointed at the published pricing URL or embed the GitHub site.

NOTE: Before launch verify the actual repository / Pages source / URL with
GitHub; they have not been confirmed, and the live site has not been changed.

V4.2: Restores the always-visible, live-updating Order Summary inside the calculator, matching the original live page. No pricing settings or pricing formula changes.

For this GitHub repository (sparkymarc1979-art/mtec-bore-key): do NOT publish MTECTOOL.html, as it contains the earlier Admin interface. Back up and remove that file from the public repository after confirming it is no longer required.
