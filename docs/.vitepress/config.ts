import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Osnova",
  description: "Local-first учебные проекты как обычные папки.",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "Продукт", link: "/product/vision" },
      { text: "Архитектура", link: "/architecture/overview" },
      { text: "Спецификация", link: "/specification/" },
      { text: "ADR", link: "/adr/adr-0001-windows-first" },
      { text: "Участие", link: "/contributing" }
    ],
    sidebar: [
      {
        text: "Продукт",
        items: [
          { text: "Видение", link: "/product/vision" },
          { text: "Принципы", link: "/product/principles" },
          { text: "MVP", link: "/product/mvp" },
          { text: "Roadmap", link: "/product/roadmap" }
        ]
      },
      {
        text: "Архитектура",
        items: [
          { text: "Обзор", link: "/architecture/overview" },
          { text: "Карта репозиториев", link: "/architecture/repository-map" },
          { text: "Desktop", link: "/architecture/desktop" },
          { text: "Local First", link: "/architecture/local-first" },
          { text: "Система плагинов", link: "/architecture/plugin-system" },
          { text: "AI Runtime", link: "/architecture/ai-runtime" }
        ]
      },
      {
        text: "Спецификация",
        items: [{ text: "Формат проекта", link: "/specification/" }]
      },
      {
        text: "ADR",
        items: [
          { text: "0001 Windows First", link: "/adr/adr-0001-windows-first" },
          { text: "0002 Electron React TypeScript", link: "/adr/adr-0002-electron-react-typescript" },
          { text: "0003 Folder Based Projects", link: "/adr/adr-0003-folder-based-projects" },
          { text: "0004 Plugin System", link: "/adr/adr-0004-plugin-system" }
        ]
      }
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Osnova-labs" }]
  }
});
