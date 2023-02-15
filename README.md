# Quick.db Documentation

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

To deploy your site to production, check out our [Deploy an Astro Website](https://docs.astro.build/guides/deploy) guide.

## Page metadata

Astro uses frontmatter in Markdown pages to choose layouts and pass properties to those layouts. If you are using the default layout, you can customize the page in many different ways to optimize SEO and other things. For example, you can use the `title` and `description` properties to set the document title, meta title, meta description, and Open Graph description.

````markdown
---
title: Example title
description: Really cool docs example that uses Astro
layout: ../../layouts/MainLayout.astro
---

### Sidebar navigation

The sidebar navigation is controlled by the `SIDEBAR` variable in your `src/config.ts` file. You can customize the sidebar by modifying this object. A default, starter navigation has already been created for you.

```ts
export const SIDEBAR = {
    en: [
        { text: "Section Header", header: true },
        { text: "Introduction", link: "en/introduction" },
        { text: "Page 2", link: "en/page-2" },
        { text: "Page 3", link: "en/page-3" },

        { text: "Another Section", header: true },
        { text: "Page 4", link: "en/page-4" },
    ],
};
```
````

Note the top-level `en` key: This is needed for multi-language support. You can change it to whatever language you'd like, or add new languages as you go. More details on this below.

### Search (Powered by Algolia)

[Algolia](https://www.algolia.com/) offers a free service to qualified open source projects called [DocSearch](https://docsearch.algolia.com/). If you are accepted to the DocSearch program, provide your API Key & index name in `src/config.ts` and a search box will automatically appear in your site header.

Note that Aglolia and Astro are not affiliated. We have no say over acceptance to the DocSearch program.

If you'd prefer to remove Algolia's search and replace it with your own, check out the `src/components/Header.astro` component to see where the component is added.
