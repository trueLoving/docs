---
outline: deep
mermaidTheme: base
---

# 命令行工具

命令行工具是指用户通过终端来执行程序服务所提供的一种交互方式。

用户在终端输入指令，终端**接收**用户指令,**解析**用户指令，**调用**应用程序。

## 常见 shell

- cmd
- powershell
- zsh
- shell

## 相关资料

- [命令行的艺术](https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md)
- [Command Line Interface Guidelines](https://clig.dev/)

## 命令行注册工具

- [cac](https://github.com/cacjs/cac)
- [commander](https://github.com/tj/commander.js)
- [cliui](https://github.com/yargs/cliui)
- [oclif](https://github.com/oclif/oclif)

## 终端用户交互 UI

- [clack](https://github.com/natemoo-re/clack)
- [Inquirer](https://github.com/SBoudrias/Inquirer.js)

## 阅读笔记

命令行工具设计指南

设计哲学

- 人类优先（与之对应的是机器优先）
- 模块简单化且可组合运行
- 程序一致性
- 输出信息详略得当
- 易于发现（提供 --help 指令，提供使用文档，命令行建议,）
- 终端交互（用户体验）
- 鲁棒性（）
- 充满同情心（当你使用这款命令行工具时想要怎么样的体验）
- 运行环境的不确定性（不知道在哪个终端运行，当前运行的终端环境是一个怎么样的情况）

设计指南

- 基本要求
  - 尽量使用三方库来解析你的命令(参数、环境信息、help、操作建议)
  - 进程退出（成功为 0，失败为非 0）
  - 输出信息输出到 stdout
  - 错误信息输出到 stderr
- 提供 help 指令查看 cli 使用
