---
title: Python and C developer / architect
kicker: Capability
summary: Python for research, C on the hot path, Linux all the way down.
author: Alex Veden
date: 2024-04-04
layout: page
---
Python, C and Linux administration let me carry a project from concept to production
without building a team around it. The same applies to the side work around a trading
project: dashboards for controlling live robots, reporting, REST feeds for secondary data,
live dataset updates.

## Experience
I wrote my first programs in school, in C, Pascal, Delphi and assembler. When I started
trading in 2004 as an economics student, I decided every trading decision had to be an
algorithm.

- **2007 &ndash; 2012:** trading systems in C# and C.
- **2012:** full-time Linux user.
- **2013:** switched research and infrastructure to Python, with Cython for hot paths.
- **2016:** quantitative developer in Python full-time.
- **2022:** plain C for low-latency trading.

## Circle of competence
- **Trading and backtesting frameworks.** 7+ production frameworks for backtesting and optimisation on equities, futures, options and multi-leg instruments. The same code backtests a strategy and runs it live. See [yauber-backtester]({{ '/about/my-projects/#yauber-backtester' | relative_url }}).
- **Order management and execution.** Algorithmic orders for multi-leg positions (pairs, baskets, options), delta hedging, legging into option positions. FIX, broker APIs, REST.
- **Market data storage.** Data structures for fast backtesting and live trading, usually on MongoDB.
- **Distributed services.** Microservices over RabbitMQ or ZeroMQ, with asyncio Python. See [yauber-executor]({{ '/about/my-projects/#yauber-executor' | relative_url }}), in production since 2019.
- **Fast Python.** Numba and Cython for numeric code. See [yauber-algo]({{ '/about/my-projects/#yauber-algo' | relative_url }}) (Numba) and [cython-dev-tools]({{ '/about/my-projects/#cython-dev-tools' | relative_url }}).
- **Low-latency C.** Plain C (not C++) for low-latency strategies and order management: full control over execution flow and the lowest latency. See [UberHF 2.0]({{ '/about/my-projects/#uber-hf-2' | relative_url }}).
- **Linux servers.** Set up and run Debian/Ubuntu machines on any hosting or cloud provider.

## Tech stack

**Languages**
- Python, asyncio, multiprocessing
- Cython, Numba
- C (not C++): high-performance computing, low-latency trading, networking

**Financial protocols and APIs**
- FIX: order management, in C and Python
- FAST: exchange market data, with my own parser in C
- Interactive Brokers API
- Trading Technologies API

**Data and messaging**
- MongoDB: setup, backups, administration, sharding
- MySQL / MariaDB
- ZeroMQ, RabbitMQ
- Python and C sockets
- REST APIs

**Data science**
- NumPy, Pandas
- Scikit-learn: core models and feature selection, some customised
- Jupyter, Matplotlib, Plotly
- Scraping with Selenium and BeautifulSoup

**Interfaces**
- Plotly Dash: dashboards, infrastructure control, strategy settings
- Textual: terminal UIs over SSH
- Django, Flask: REST back ends

**Linux infrastructure**
- Nginx, Apache
- VMware, QEMU
- OpenVPN, SSH tunnels, FIX tunnels
- systemd, supervisord
- Remote Jupyter, X11 and VNC
- Firewall configuration
- FTP, SSHFS mounts
