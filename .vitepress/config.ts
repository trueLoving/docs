import { withMermaid } from "vitepress-plugin-mermaid";
import { defineConfig } from "vitepress";
import {
  vitestDescription,
  vitestName
} from "./meta";

export default withMermaid(
  defineConfig({
    lang: "en-US",
    title: vitestName,
    description: vitestDescription,
    locales: {
      root: {
        label: "English",
        lang: "en-US",
      },
    },
    lastUpdated: true,
    markdown: {
      theme: {
        light: "vitesse-light",
        dark: "vitesse-dark",
      },
    },
    themeConfig: {
      logo: "/logo.svg",
      search: {
        provider: "local",
      },
      nav: [
        { text: "前端", link: "/frontend/", activeMatch: "^/frontend/" },
        { text: "后端", link: "/backend/", activeMatch: "^/backend/" },
        { text: "设计", link: "/design/", activeMatch: "^/design/" },
        { text: "算法", link: "/algorithm/", activeMatch: "^/algorithm/" },
        {
          text: "前端工程化",
          link: "/engineering/",
          activeMatch: "^/engineering/",
        },
        { text: "插件开发", link: "/extension/", activeMatch: "^/extension/" },
      ],
      sidebar: {
        "/extension": [
          {
            text: "插件开发",
            items: [
              {
                text: "Chrome 插件",
                link: "/extension/chrome",
              },
              {
                text: "VsCode 插件",
                link: "/extension/vscode",
              },
            ],
          },
        ],
        "/engineering": [
          {
            text: "前端工程化",
            items: [
              {
                text: '命令行工具',
                link: "/engineering/cli",
              },
              {
                text: "工程模版服务",
                link: "/engineering/boilerplate",
              },
              {
                text: "工程构建服务",
                link: "/engineering/builder",
              },
              {
                text: "CICD 服务",
                link: "/engineering/cicd",
              },
              {
                text: "日志收集服务",
                link: "/engineering/log",
              },
              {
                text: "运行监控服务",
                link: "/engineering/monitor",
              },
              {
                text: "质量守护服务",
                link: "/engineering/quality",
              },
              {
                text: "文档构建服务",
                link: "/engineering/docs",
              },
            ],
          },
        ],
        "/": [
          {
            text: "Guide",
            items: [
              {
                text: "Why Vitest",
                link: "/guide/why",
              },
              {
                text: "Getting Started",
                link: "/guide/",
              },
              {
                text: "Features",
                link: "/guide/features",
              },
              {
                text: "Workspace",
                link: "/guide/workspace",
              },
              {
                text: "CLI",
                link: "/guide/cli",
              },
              {
                text: "Test Filtering",
                link: "/guide/filtering",
              },
              {
                text: "Coverage",
                link: "/guide/coverage",
              },
              {
                text: "Snapshot",
                link: "/guide/snapshot",
              },
              {
                text: "Mocking",
                link: "/guide/mocking",
              },
              {
                text: "Testing Types",
                link: "/guide/testing-types",
              },
              {
                text: "Vitest UI",
                link: "/guide/ui",
              },
              {
                text: "Browser Mode",
                link: "/guide/browser",
              },
              {
                text: "In-source Testing",
                link: "/guide/in-source",
              },
              {
                text: "Test Context",
                link: "/guide/test-context",
              },
              {
                text: "Environment",
                link: "/guide/environment",
              },
              {
                text: "Extending Matchers",
                link: "/guide/extending-matchers",
              },
              {
                text: "IDE Integration",
                link: "/guide/ide",
              },
              {
                text: "Debugging",
                link: "/guide/debugging",
              },
              {
                text: "Comparisons",
                link: "/guide/comparisons",
              },
              {
                text: "Migration Guide",
                link: "/guide/migration",
              },
              {
                text: "Common Errors",
                link: "/guide/common-errors",
              },
            ],
          },
          {
            text: "API",
            items: [
              {
                text: "Test API Reference",
                link: "/api/",
              },
              {
                text: "Mock Functions",
                link: "/api/mock",
              },
              {
                text: "Vi Utility",
                link: "/api/vi",
              },
              {
                text: "Expect",
                link: "/api/expect",
              },
              {
                text: "ExpectTypeOf",
                link: "/api/expect-typeof",
              },
              {
                text: "assertType",
                link: "/api/assert-type",
              },
            ],
          },
          {
            text: "Config",
            items: [
              {
                text: "Config Reference",
                link: "/config/",
              },
            ],
          },
        ],
      },
    },
  })
)
