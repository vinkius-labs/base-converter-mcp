# Base Converter MCP Server

An enterprise-grade Model Context Protocol (MCP) server that empowers autonomous AI agents with mathematically precise radix and base conversions. By shifting mathematical transformations from probabilistic LLM inference to deterministic edge execution, we eliminate hallucination risks in low-level data processing.

[![Deploy on Vinkius Edge](https://img.shields.io/badge/Deploy%20on-Vinkius%20Edge-blue?style=for-the-badge)](https://vinkius.com/mcp/deterministic-base-converter)
[![Docker Pulls](https://img.shields.io/docker/pulls/vinkius/base-converter-mcp?style=for-the-badge&logo=docker&color=2496ed)](https://hub.docker.com/r/vinkius/base-converter-mcp)
[![MCP Fusion Compatible](https://img.shields.io/badge/MCP%20Fusion-Strict%20Mode-success?style=for-the-badge)](https://www.npmjs.com/package/@mcpfusion/core)

## Why Offload Base Conversion from LLMs?

During our architectural evaluations of AI-driven data pipelines, we observed a critical failure mode: **Large Language Models struggle with precise binary, hex, and octal transformations.** 
When an AI agent attempts to convert long strings of hexadecimal data or binary hashes, it relies on probabilistic token prediction rather than arithmetic computation. This frequently leads to off-by-one errors, truncated hashes, and silent data corruption.

### The Mathematical Guarantee
The **Base Converter MCP** solves this by providing a highly optimized, type-safe execution environment. Instead of predicting the output, the LLM calls this server to perform standard radix conversions (Binary, Hexadecimal, Octal, Decimal, and Base64) natively. The result is 100% deterministic, executed in milliseconds, and saves significant token context.

---

## Capabilities

This server provides the following deterministic tool to your agents:

* `convert_base`
  * **Function**: Converts strings or numbers between specified bases (2, 8, 10, 16) and handles raw encoding formats like Base64.
  * **Use Case**: Ideal for cryptographic agents, network packet analysis, and low-level debugging where exact binary representation is non-negotiable.

## Instant Edge Access via Vinkius Edge

For organizations requiring zero-downtime, globally distributed access to this MCP, we host a production-ready instance on **Vinkius Edge**. 

👉 **[Connect the Base Converter MCP to your AI](https://vinkius.com/mcp/deterministic-base-converter)**

Vinkius Edge provides a secure V8 isolate sandbox, ensuring sub-50ms latency globally and complete operational isolation.

## Open-Source Development & Deployment

Built on the robust [@mcpfusion/core](https://www.npmjs.com/package/@mcpfusion/core) framework, this project guarantees strict data validation and isolation. You can run it locally or deploy it to our global edge network.

### 1. Free Edge Hosting (Recommended)
You do not need to host this yourself! **Vinkius provides FREE, highly available edge hosting for MCP servers.** You can deploy this exact server in seconds to our globally distributed V8 isolate cloud:
```bash
npx mcpfusion deploy
```
*This command compiles your code and instantly deploys it to the Vinkius Edge, providing you with a live, secure URL to attach to your AI agents.*

### 2. Local Development
If you prefer to run and test this MCP server locally:
```bash
npm install
npm run build
npm run dev
```
