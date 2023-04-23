# 测试用例操作规程V5

***百谷王科技刘兵 2023.03.31***

## 操作流程

1. 登录IP白名单允许的公网服务器

2. 为此服务器部署 mocha@5.2.0 vscode nodejs@14.16.0 git 等工具

3. 为此服务器部署项目
```
git clone https://github.com/bookmansoft/vallnet
```

4. 同时打开五个控制台窗口:
- 1号窗口, 运行1号节点
    cd vallnet
    npm run n0
- 2号窗口, 运行2号节点并自动组网
    cd vallnet
    npm run n1
- 3号窗口, 运行3号节点并自动组网
    cd vallnet
    npm run n2
- 4号窗口, 运行4号节点并自动组网
    cd vallnet
    npm run n3
- 5号窗口, 批量运行单元测试
```bash
cd vallnet
mocha test/tbi.test/ --timeout=99999999
```

## 常用指令

- 卸载引擎
```bash
npm un gamegold
```

- 安装引擎特定版本
```bash
# 安装 V5.1.2
npm i gamegold@5.1.2
# 查看已安装的引擎版本
npm list gamegold
```
