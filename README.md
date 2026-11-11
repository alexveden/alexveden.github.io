# alexveden.com

Site of Alex Veden, QuantOps Architect: the systems quant desks run on, from research
workflow to execution, risk and reporting.

Built with Jekyll and served by GitHub Pages from `main`. There is no theme and no
JavaScript framework: the layouts, CSS and JS are all in this repository.

## Layout

```
_config.yml              site config, collections, defaults
index.html               homepage
what-you-get.md          engagement shapes, served at /what-you-get/
how-i-work.md            method and handover, served at /how-i-work/
about.md                 background, served at /about/
contact.md               contact, served at /contact/
_collection_about/       capability pages, served at /about/<name>/
_layouts/                base, home, page
_includes/               head, nav, footer
assets/css/site.css      the whole stylesheet
assets/js/site.js        nav toggle and active link
assets/img/              images
404.html                 not-found page
```

## Local build

Requires Ruby 3.x and Bundler.

```
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Adding a page

Create a markdown file at the root with a permalink:

```
---
title: Page title
kicker: Section label
summary: One line under the title
layout: page
permalink: /page-slug/
---

Body in markdown.
```

Add `wide: true` for full-width pages. Link it from `_includes/nav.html` if it belongs
in the navigation.

## Adding a capability page

Create `_collection_about/<slug>.md`:

```
---
title: Page title
kicker: Capability
summary: One line under the title
layout: page
---

Body in markdown.
```

It is published at `/about/<slug>/` and appears in the site navigation only if you
add a link to `_includes/nav.html`.
