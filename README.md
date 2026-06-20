# Base Converter MCP Server

An enterprise-grade Model Context Protocol (MCP) server that empowers autonomous AI agents with mathematically precise radix and base conversions. By shifting mathematical transformations from probabilistic LLM inference to deterministic edge execution, we eliminate hallucination risks in low-level data processing.

[![Deploy on Vinkius Cloud](https://img.shields.io/badge/Deploy%20on-Vinkius%20Cloud-blue?style=for-the-badge)](https://vinkius.com/mcp/base-converter)
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

## Instant Edge Access via Vinkius Cloud

For organizations requiring zero-downtime, globally distributed access to this MCP, we host a production-ready instance on **Vinkius Cloud**. 

👉 **[Connect the Base Converter MCP to your AI](https://vinkius.com/mcp/base-converter)**

Vinkius Cloud provides a secure V8 isolate sandbox, ensuring sub-50ms latency globally and complete operational isolation.

## Open-Source Development

Built on the robust [@mcpfusion/core](https://www.npmjs.com/package/@mcpfusion/core) framework, this project guarantees strict data validation and isolation. 

```bash
npm install
npm run build
npm run dev
```

To deploy your own instance to the edge:
```bash
npm run deploy
```
