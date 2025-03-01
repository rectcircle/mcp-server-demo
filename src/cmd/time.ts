#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// 创建 Server 实例
const server = new McpServer({
    name: "Time",
    version: "1.0.0",
});

server.tool("now_utc_iso",
    "Show now system time in UTC ISO format",
    async (_) => {
        // 获取时间
        const now = new Date()
        return {
            content: [{ type: "text", text: now.toISOString() }]
        }
    }
);

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
