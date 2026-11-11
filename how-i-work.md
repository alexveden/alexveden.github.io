---
title: How I work
kicker: Method
summary: Three phases, one architect, and what happens if I disappear.
layout: page
permalink: /how-i-work/
wide: true
description: >
  How a desk gets built: three phases, demos every two weeks, source in your repository,
  milestone billing, and a handover that does not depend on me.
---

## Three phases

Each phase ends with something running. If a phase does not produce a working piece,
it is not finished.

<ul class="facts">
    <li>
        <span class="fact-label">01 · Research</span>
        <p>
            Data ingestion and storage, then a backtesting environment. You can test a
            strategy yourself, on your own data, before any money moves. This is the
            phase that proves fit. Available on its own, including an audit and rebuild
            for teams that already trade.
        </p>
    </li>
    <li>
        <span class="fact-label">02 · Execution</span>
        <p>
            Order management and broker connectivity over the broker's API or FIX. An
            order reaches the market, comes back filled, and the position is where it
            should be.
        </p>
    </li>
    <li>
        <span class="fact-label">03 · Risk and reporting</span>
        <p>
            Position, P&amp;L, limits and a daily report. The desk trades inside its
            limits and leaves a record of what it did.
        </p>
    </li>
</ul>

## How the work runs

<ul class="facts">
    <li>
        <span class="fact-label">Cadence</span>
        <p>A working demo every two weeks. You see the desk, not a summary of it.</p>
    </li>
    <li>
        <span class="fact-label">Timeline</span>
        <p>
            A Core Desk takes up to three months from agreement to first live trade.
            Larger desks are quoted with their own timeline.
        </p>
    </li>
    <li>
        <span class="fact-label">Your server</span>
        <p>
            A shared machine on your cloud or hardware, reached over VPN. The team
            works in JupyterLab on the same data, runs backtests there, and scheduled
            jobs run on it. Documented and reproducible from a clean machine, like
            the rest of the desk.
        </p>
    </li>
    <li>
        <span class="fact-label">Billing</span>
        <p>Fixed fee per scope, billed against milestones. No hourly rate, no timesheets.</p>
    </li>
    <li>
        <span class="fact-label">Decisions</span>
        <p>
            One decision-maker on your side. Ambiguity about who approves is the most
            common reason a build slows down.
        </p>
    </li>
    <li>
        <span class="fact-label">Code I bring</span>
        <p>
            Components I reuse are licensed to you rather than sold. The terms are agreed
            in writing before work starts.
        </p>
    </li>
</ul>

<h2 id="bus-factor">What happens if I disappear</h2>

You are hiring one person, so ask this first. It deserves an answer you can check
rather than reassurance.

The short version: the desk keeps trading without me. New work stops until someone
else picks it up, and everything they need is already yours.

<ul class="facts">
    <li>
        <span class="fact-label">Source</span>
        <p>
            Source for each milestone is in your repository once that milestone is paid.
            Nothing is held back until handover.
        </p>
    </li>
    <li>
        <span class="fact-label">Access</span>
        <p>
            Servers, cloud accounts, broker keys and data subscriptions are in your name.
            I work with access you grant and can revoke.
        </p>
    </li>
    <li>
        <span class="fact-label">Tests</span>
        <p>Behaviour is pinned down by tests, so someone else can change it safely.</p>
    </li>
    <li>
        <span class="fact-label">Runbooks</span>
        <p>
            Every operational task written down: deploy, restart, reconcile, recover.
            Your team runs them without me.
        </p>
    </li>
    <li>
        <span class="fact-label">Standard parts</span>
        <p>
            FIX, Python, SQL, Linux and ordinary databases. Any competent engineer can
            pick it up; there is no proprietary runtime to depend on.
        </p>
    </li>
    <li>
        <span class="fact-label">Reused code</span>
        <p>Components I bring are licensed to you perpetually. The licence does not end if I do.</p>
    </li>
    <li>
        <span class="fact-label">Planned exit</span>
        <p>A walkthrough with whoever inherits the desk. Terms are set in the contract.</p>
    </li>
</ul>

There is no bench behind me. If you need a team with an on-call rota, hire a team.
What you get from me is one person who has built the whole pipeline several times,
and a desk that does not need me to keep running.

## The desk I run

I run my own book on the same components I build client desks from: data, research,
signal generation, execution and Monte-Carlo risk simulation, developed since 2017. It is
my own capital and my own infrastructure, so it is evidence of the method rather than of
client delivery.

I don't publish returns, track records or performance claims. The desk is here to show
how the machine is assembled and that it survives contact with a live market, not to sell
a strategy.

<p class="section-more"><a href="{{ '/about/my-projects/' | relative_url }}">See the projects &rarr;</a></p>
