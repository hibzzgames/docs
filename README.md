[![Twitter Follow](https://img.shields.io/badge/follow-%40hibzzgames-1DA1f2?logo=twitter&style=for-the-badge)](https://twitter.com/hibzzgames) [![Discord](https://img.shields.io/discord/695898694083412048?color=788bd9&label=DIscord&style=for-the-badge)](https://discord.gg/YXdJ8cZngB) ![Astro](https://img.shields.io/badge/Astro-0C1222?style=for-the-badge&logo=astro&logoColor=FDFDFE)

# 🚀 Hibzz Games Documentation Website
This is the official documentation website for the game development tools created by Hibzz Games. It can be found at [docs.hibzz.games](https://docs.hibzz.games).

It's built using [Astro](https://astro.build) and a modified version of [Starlight](https://starlight.astro.build/). Starlight has been modified to filter the sidebar based on the tools that the user is currently viewing. More information on the patch can be found [here](https://github.com/hibzzgames/docs/tree/master/patches).

This repository doesn't host any documentation. The documentation for each tool is stored in their respective repositories under the `docs` branch and this repository uses submodules to pull in the files for each tool when the GitHub Action runs.

<br>

## 📝 How to write a new page?
Each page must contain a title and description in the frontmatter. The frontmatter is the section at the top of each page that is surrounded by `---`. 

All Starlight base components are available to use. For more information on how to use them, Please refer to Starlight's [Authoring Content in Markdown](https://starlight.astro.build/guides/authoring-content/) and [Components](https://starlight.astro.build/guides/components/).

Additionally, custom components are available to use, such as a custom implementation of the `Card` component that supports a `link` property. The site has [Iconify](https://iconify.design/) integration, so you can use any icon from the [Iconify Gallery](https://icon-sets.iconify.design/) by using the `Icon` component. For example, `<Icon name="mdi:github" />` will render the GitHub icon.

<br>

## 📦 Adding a new tool
Tools must be added as a submodule and can be done so by running the following command from the root of the repository:

```bash
git submodule add -b docs <git_url> /src/content/docs/<tool_name>
```

The content of a submodule can be updated using the following command:

```bash
git submodule update --remote
```

Additionally, make sure to update `index.mdx` with a card containing the tool's name, description, and link to the documentation.


## 😍 Contributing
Contributions are welcome! The tools that I have created haven't grown to the point where I need to add contribution guidelines and such. If you want to contribute, please create a pull request with your changes and I'll review it as soon as possible. If you're unsure about something, feel free to create an issue and I'll get back to you.


