# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [1.2.1](https://github.com/myesn/system-performance-dashboard/compare/v1.2.0...v1.2.1) (2024-09-16)

## [1.2.0](https://github.com/myesn/system-performance-dashboard/compare/v1.1.1...v1.2.0) (2024-09-14)


### Features

* 添加中间件限制 API 请求速率 ([6139f02](https://github.com/myesn/system-performance-dashboard/commit/6139f0250be330386ed9dbed8030fa0b96838a0f))


### Bug Fixes

* 本地不限制速率请求 ([09bf4fc](https://github.com/myesn/system-performance-dashboard/commit/09bf4fcb64e4257b1bb3c038b846baab8af72692))
* 接口报错后 ui 组件无法正常展示 ([2520f08](https://github.com/myesn/system-performance-dashboard/commit/2520f08339db6c9b0df9825203b0750701e1d10b))

## [1.1.1](https://github.com/myesn/system-performance-dashboard/compare/v1.1.0...v1.1.1) (2024-09-14)


### Features

* 优化 memory-mem 组件显示效果 ([7660742](https://github.com/myesn/system-performance-dashboard/commit/76607425eec6bf496868a635dd2021939a22d536))
* 优化 network-stats 组件显示效果 ([718caf0](https://github.com/myesn/system-performance-dashboard/commit/718caf0aca944a55958156c746e9298476cad5e6))

## [1.1.0](https://github.com/myesn/system-performance-dashboard/compare/v1.0.0...v1.1.0) (2024-09-14)


### Features

* 添加适用于手机端的 viewport ([780929d](https://github.com/myesn/system-performance-dashboard/commit/780929d2b8b4f1d1dc50bbcb73206c3ba4f243f6))
* 完成 osinfo-time 组件样式响应式 ([b30998f](https://github.com/myesn/system-performance-dashboard/commit/b30998fd4dd493775c3fe9fdcda92075af6f0422))
* 页面响应式样式 ([bd7d59f](https://github.com/myesn/system-performance-dashboard/commit/bd7d59f971b84a0459d97420390b173ba00db2ab))
* memory-mem 组件响应式样式 ([a01db81](https://github.com/myesn/system-performance-dashboard/commit/a01db81d5e15985ee7cb1c94040e114d14461032))
* network-stats 组件响应式样式 ([66d74cc](https://github.com/myesn/system-performance-dashboard/commit/66d74cc16f8e31fbd033a5f3b384a41d7711da02))

## 1.0.0 (2024-09-14)


### Features

* 安装 button 组件 ([19f4e82](https://github.com/myesn/system-performance-dashboard/commit/19f4e82eb7721113c1976c5487de963e3b1117e2))
* 安装 card 组件 ([a02bf3b](https://github.com/myesn/system-performance-dashboard/commit/a02bf3b337d6e7c3f45a7ba6bef767ecb379a958))
* 安装 dayjs 依赖 ([85e9502](https://github.com/myesn/system-performance-dashboard/commit/85e9502e4ae2c29f4e23df3f076b5169cecf0eff))
* 安装 dropdown-menu 组件 ([7650dc6](https://github.com/myesn/system-performance-dashboard/commit/7650dc684980e93f13690e46d030bbc84ecc4a0d))
* 安装 separator 组件 ([eda1796](https://github.com/myesn/system-performance-dashboard/commit/eda1796a1452791393574295ccc8c34db4ea2fec))
* 安装 shadcn/ui 的 progress 组件 ([268a1ef](https://github.com/myesn/system-performance-dashboard/commit/268a1efe180e675f0f17dd5202f8fd8893f01a52))
* 集成 shadcn/ui ([821bfd4](https://github.com/myesn/system-performance-dashboard/commit/821bfd4487ca42deea8ed4e68653dcbc3674f162))
* 集成代码格式化工具 ([d3e9d08](https://github.com/myesn/system-performance-dashboard/commit/d3e9d08fdcfbc249c6ca177b03f4a7e89c840cc0))
* 添加 /api/osinfo/time 接口 ([7ef2235](https://github.com/myesn/system-performance-dashboard/commit/7ef2235b7032cb2003c3638c0d9a2c44be2b3026))
* 添加 systeminformation 依赖 ([2c63bbf](https://github.com/myesn/system-performance-dashboard/commit/2c63bbfc2a1465a050c920113431e4ab8d49af80))
* 添加格式化 bytes 为可读形式的库 ([d50f7ff](https://github.com/myesn/system-performance-dashboard/commit/d50f7ffa8534f78ad2528b084d7392ca57caa20d))
* 添加和使用 dark mode 组件 ([51d035c](https://github.com/myesn/system-performance-dashboard/commit/51d035c0e15fed477bff9e6fd16d28b5e559b330))
* 添加黑暗模式切换按钮 ([3913aaf](https://github.com/myesn/system-performance-dashboard/commit/3913aaf8413db7cb76edcae150505ac2a645db47))
* 完成 cpu-current-load 的容器组件和展示组件 ([69b91b8](https://github.com/myesn/system-performance-dashboard/commit/69b91b845f66e5a4ec1317c1e9d61ded3b75bc16))
* 完成 fs-size 的容器组件和展示组件 ([b266c35](https://github.com/myesn/system-performance-dashboard/commit/b266c35dc9c8593b7f740494d30773bc803fe3d8))
* 完成 memory-mem 的容器组件和展示组件 ([cbbf1a9](https://github.com/myesn/system-performance-dashboard/commit/cbbf1a9f4f7dafb8b005b6a4962b9a06cf93900a))
* 完成 network-stats 的容器组件和展示组件 ([ac8f611](https://github.com/myesn/system-performance-dashboard/commit/ac8f611d0906ef0a45f0f2bca3950ae03594f599))
* 完成 osinfo-time 的容器组件和展示组件 ([797440f](https://github.com/myesn/system-performance-dashboard/commit/797440f9f9839d18e92f0049284b8591771f4f8d))
* 新增 /api/memory/mem 接口 ([3822fd7](https://github.com/myesn/system-performance-dashboard/commit/3822fd72238413de3e31123b8cc61aad2edbe6fa))
* 新增 cpu 当前负载百分比查询 ([1d36b61](https://github.com/myesn/system-performance-dashboard/commit/1d36b6121967e76a81e8ef8cac6b3a1656fb34ad))
* 引入 magic ui 的圆形进度条组件 ([4f01aee](https://github.com/myesn/system-performance-dashboard/commit/4f01aee856b2c899c2341a0fbfade1b8bf8d434f))
* 引入 swr ([4b81878](https://github.com/myesn/system-performance-dashboard/commit/4b818787f545311f605919b4ebdfc0eb1db9b10b))
* 圆形进度条直接添加百分比符号 ([e436382](https://github.com/myesn/system-performance-dashboard/commit/e4363822800eb0e283908ecd30d2f263939879e0))
* 增加 /api/file-system/size 接口 ([4a4edcb](https://github.com/myesn/system-performance-dashboard/commit/4a4edcb65bd5b889d64ea7e4781bf02c08fb5f3a))
* 增加 /api/network/stats 接口 ([1740e56](https://github.com/myesn/system-performance-dashboard/commit/1740e562baca8f3476a24ccf341504b09bbe8704))
* 增加页面加载前的 loading ([2110427](https://github.com/myesn/system-performance-dashboard/commit/21104272c659cbbec460eeb18382fbfa69a3209d))
* progress 组件新增指示器背景色 props ([5aac2d6](https://github.com/myesn/system-performance-dashboard/commit/5aac2d65bb8edefa0fa72b1f2117dbcce1211885))


### Bug Fixes

* 百分比计算值出现精度问题，使用 toFixed 四舍五入丢弃小数位 ([e5a497f](https://github.com/myesn/system-performance-dashboard/commit/e5a497f05dc7631a7ee4b23094d06a1ccd80b1bf))
* 导出 CpuCurrentLoadResponse  类型 ([9c087e3](https://github.com/myesn/system-performance-dashboard/commit/9c087e31c69947d9ef7d4cf2a5460728973e855d))
* 实时上传和下载第一次值为 null ([0e93f2b](https://github.com/myesn/system-performance-dashboard/commit/0e93f2b34bb193556aa6dd23d8207e09379ac14e))
* 使用 Math.round 代替 toFixed 以避免 TypeScript 类型错误 ([a465cc9](https://github.com/myesn/system-performance-dashboard/commit/a465cc9926312a4732d62098b29a77c3b1bf66ba))
* 添加可为空关键字 ([fb8600e](https://github.com/myesn/system-performance-dashboard/commit/fb8600e20e40019a9c0910a2333b5456b1138e48))
* api 结果被静态处理 ([51be175](https://github.com/myesn/system-performance-dashboard/commit/51be1752f1e07ab29fc3e4fb250e09115a6b3ef5))
