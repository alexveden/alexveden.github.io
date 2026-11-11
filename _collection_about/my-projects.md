---
title: My projects
author: Alex Veden
date: 2024-04-12
layout: page
---


## Systems I've built

<a id="uber-hf-2"></a>
### UberHF 2.0 (low-latency trading)
Trading framework in pure C (not C++) for low-latency market-making and arbitrage.

**Highlights:**
- Micro-app architecture
- In-memory quotes and datafeed
- Shared-memory events and RPC: no system calls on the hot path
- 67k lines of C, including 35k of unit tests
- Smart execution and algorithmic orders
- Stocks, futures and options
- Custom FAST parser, 5&ndash;7x faster than [mFAST](https://github.com/objectcomputing/mFAST)
- FIX (SBE) order management


<a id="micro-strategy"></a>
### MicroStrategy Framework
Low-frequency Python execution framework for model trading, smart order execution and complex positions. In production since 2021.

**Highlights:**
- Independent position handling
- Internal netting of execution orders to cut transaction costs
- Multi-leg execution: baskets, spreads, pairs
- Multi-market, multi-broker execution
- Smart orders: time-sliced orders, options delta-hedge orders
- Historical backtesting for options, spreads, pairs, futures and other complex positions
- 61k lines of Python, including 45k of unit tests

<a id="uber-miner"></a>
### UberMiner
The analysis engine behind my own trading: signal generation and modelling. In development since 2017.

**Highlights:**
- OmniFeed: one datafeed for stocks, futures, spreads, pairs and options
- DMlib: alpha generation and analysis library
- Monte-Carlo simulation of portfolio risk
- ML-driven market research
- Indicators in Numba: vectorised, no look-ahead, predictable on bad data. Based on [yauber-algo](#yauber-algo).
- AsyncIO microservices on [yauber-executor](#yauber-executor)
- 69k lines of Python and Cython


## Projects for clients
### ArbSwarm proprietary trading group (2023 &ndash; 2026)
Adapted [MicroStrategy](#micro-strategy) for execution and position management and [UberMiner](#uber-miner) for analysis and datafeed. Built the Hive&copy; tool for generating alpha swarms and signals on US futures, FIX execution through Trading Technologies, and the Linux server infrastructure.

<a id="tmqr-exo"></a>
### TMQR EXO Trading Framework
Framework for research, backtesting and running a multi-account fund on futures, options and US stocks.

**Highlights**:
- Backtesting engine for machine-learning models on futures, stocks and options
- Datafeed and multi-account execution infrastructure
- In-house Jupyter research environment over VPN
- Core in Python (31k lines) and Jupyter notebooks (20k lines)
- Linux server infrastructure
- Execution via Trading Technologies FIX and Interactive Brokers API


## Open-source projects


### AsyncFIX - AsyncIO FIX Protocol Python Framework

[AsyncFIX - AsyncIO FIX Protocol Python Framework](https://github.com/alexveden/asyncfix)

[AsyncFIX docs](https://alexveden.github.io/asyncfix/)

**Highlights**:

- Pythonic FIX messages
- Full AsyncIO support
- Schema validation
- Tools for unit testing client apps
- NewOrderSingle container and state management
- Session management: journaling, session restore, heartbeats, resets
- FIX Tester for unit tests: schema validation, order management, message exchange
- FIX 4.4
- 100% unit test coverage

### UberHF 1.0 Cython (archived)
[UberHF Cython (archived/pre-alpha)](https://github.com/alexveden/uberhf_cython)

First generation of my high-frequency framework, in C, Cython and Python. Archived in favour of the pure C rewrite, [UberHF 2.0](#uber-hf-2).

**Highlights:**

- Microservice architecture
- Binary protocol over ZeroMQ between apps
- FIX friendly
- In-memory shared datafeed
- Smart order execution


<a id="yauber-algo"></a>

### YAUBER - Algo Lib

[Yet Another Universal Backtesting Engine Release (YAUBER) - Algo Lib](https://github.com/alexveden/yauber-algo)

Standalone algorithms for financial time series analysis.

**Highlights:**

- Numba-compiled, generally faster than equivalent Pandas code
- No look-ahead, consistent when the history start changes, NaN friendly, built-in data validation
- Stable API, 100% unit test coverage

<a id="yauber-backtester"></a>

### YAUBER - Backtester

[Yet Another Universal Backtesting Engine Release (YAUBER) - Backtester](https://github.com/alexveden/yauber-backtester)

**Bare-bones portfolio backtesting engine:**

- Asset ranking, basket trading, portfolio rebalancing
- Large universes (2000&ndash;3000 US stocks, daily) or small intraday ones (futures or FX, hourly)
- Meta-strategies: portfolios of other strategies
- Capital allocation, costs and margin simulation

<a id="yauber-executor"></a>

### YAUBER - Executor

[Yet Another Universal Backtesting Engine Release (YAUBER) - Executor](https://github.com/alexveden/yauber-executor)

**Boilerplate for asyncio Python distributed infrastructure.**

- Fully asynchronous
- RabbitMQ and MongoDB
- Messaging and RPC between scripts
- Sample infrastructure
- In production 24/7 since 2019

<a id="cython-tools"></a>

### Cython Tools: toolkit for efficient Cython development

[Cython Tools: toolkit for efficient Cython development](https://github.com/alexveden/cython-tools)

**Key features**

- All development tools in one place
- Built-in debugger, including cdef and C code, on GDB
- Unit testing with coverage reports
- Line profiler
- Run .pyx files by entry-point function
- Annotations and an index for the whole project
- Project boilerplate
- Snippets for low-level C code and debugging

### Cex.C - Comprehensively EXtended C Language

[Cex.C - Comprehensively EXtended C Language](https://github.com/alexveden/cex)

[Cex.C website and docs](https://cex-c.org/)

Standalone, dependency-free, single-header C language extension for GCC/Clang. Adds modern language features while remaining plain C11 (C23 compatible).

**Highlights:**

- Single header under 20k lines, no dependencies beyond GCC/Clang and libc
- Integrated build system: CEX builds itself, no external build tool needed
- Allocator-based memory management: temporary scopes, arenas, auto-free
- Namespaces for grouping functions and simulating OOP classes
- Error handling with stack tracebacks and assertions
- Built-in unit test runner, code generation and help system
- Cross-platform, multi-architecture, big/little endian
- Type-safe dynamic arrays and hashmaps, string views, wildcard matching
- `cexstd` extension library with JSON support and serialization code generation

