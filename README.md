# MCP Server Demo

```bash
# 创建并打开项目目录
mkdir mcp-server-demo
cd mcp-server-demo
npm init -y
code .

# 安装依赖
npm install @modelcontextprotocol/sdk zod
npm install -D @types/node typescript

# 创建源码目录和文件
mkdir -p src/cmd
touch src/cmd/time.ts
```

* https://github.com/modelcontextprotocol/typescript-sdk
* https://modelcontextprotocol.io/quickstart/server
* https://github.com/modelcontextprotocol/servers/blob/main/src/filesystem/index.ts
