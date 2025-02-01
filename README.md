# TalentAssisto Social Media Agent

## [![TalentAssisto](https://www.talentassisto.com/images/og-image.png)](https://www.talentassisto.com)

This repository contains an AI-powered social media agent that helps HR professionals and executive search firms automate their social media presence. Built on top of LangChain's powerful agent framework, this tool can take a URL (such as a job posting, company news, or HR-related content) and generate optimized posts for Twitter & LinkedIn, tailored for HR and recruitment audiences.

![LangChain Logo](./static/agent_flow.png)

## Overview

TalentAssisto's Social Media Agent is designed to help HR departments and executive search firms maintain an active and engaging social media presence. It uses a human-in-the-loop (HITL) flow to handle authentication with different social media platforms and allows users to review, modify, or approve/reject generated posts before they go live.

Key features include:

- 🤖 AI-powered post generation optimized for HR content
- 📊 Support for both Twitter and LinkedIn platforms
- 🔄 Human-in-the-loop review process
- 📅 Automated scheduling capabilities
- 📝 Content customization for HR audiences

## Table of contents

- [Quickstart](#quickstart)
  - [Environment variables](#set-environment-variables)
  - [LangGraph Server](#set-environment-variables)
- [Full setup](#advanced-setup)
  - [Environment variables](#set-environment-variables-1)
  - [LangGraph Server](#install-langgraph-cli-1)
  - [Authentication](#setup-authentication)
  - [Supabase](#setup-supabase)
  - [Slack](#setup-slack)
  - [GitHub](#setup-github)
- [Usage](#usage)
  - [Generate Demo Post](#generate-demo-post)
  - [Setup Crons](#setup-crons)
  - [Prebuilt Scripts](#prebuilt-scripts)
- [Setup Agent Inbox](#setup-agent-inbox)
  - [Using the deployed inbox](#using-the-deployed-inbox)
  - [Using the local inbox](#using-the-local-inbox)
- [Customization](#customization)
  - [Prompts](#prompts)
  - [Post Style](#post-style)

# Quickstart

> [!NOTE]
> 🎥 For a visual guide, check out our [step-by-step video tutorial](https://youtu.be/TmTl5FMgkCQ) that walks you through the account setup process and project configuration.

This quickstart covers how to setup the Social Media Agent in a basic setup mode. This is the quickest way to get up and running, however it will lack some of the features of the full setup mode. See [here](#advanced-setup) for the full setup guide.

<details>
<summary>Running in basic setup mode will lack the following features:</summary>

- Parsing content from GitHub, Twitter or YouTube URLs
- Ingesting data from Slack, or sending updates to Slack
- Image selection & uploads

</details>

To get started, you'll need the following API keys/software:

- [Anthropic API](https://console.anthropic.com/) - General LLM
- [LangSmith](https://smith.langchain.com/) - LangSmith API key required to run the LangGraph server locally (free)
- [FireCrawl API](https://www.firecrawl.dev/) - Web scraping. New users get 500 credits for free
- [Arcade](https://www.arcade.dev/) - Easy authentication for reading & writing to social media platforms

## Setup Instructions

### Clone the repository

\`\`\`bash
git clone <https://github.com/langchain-ai/social-media-agent.git>
\`\`\`

\`\`\`bash
cd social-media-agent
\`\`\`

### Install dependencies

\`\`\`bash
yarn install
\`\`\`

### Set environment variables

Copy the values of the quickstart \`.env.quickstart.example\` to \`.env\`, then add the values:

\`\`\`bash
cp .env.quickstart.example .env
\`\`\`

Once done, ensure you have the following environment variables set:

\`\`\`bash

# For LangSmith tracing (optional)

LANGCHAIN_API_KEY=
LANGCHAIN_TRACING_V2=true

# For LLM generations

ANTHROPIC_API_KEY=

# For web scraping

FIRECRAWL_API_KEY=

# Arcade API key - used for fetching Tweets, and scheduling LinkedIn/Twitter posts

ARCADE_API_KEY=
\`\`\`

If you plan to post to LinkedIn as an organization (rather than as yourself), you'll also need to set:

\`\`\`bash

# Get the organization ID from the URL of the company page when you're logged in as an admin

# For example, if the URL is \`<https://www.linkedin.com/company/12345678/admin/dashboard/\`>, the organization ID would be \`12345678\`

POST_TO_LINKEDIN_ORGANIZATION=true
LINKEDIN_ORGANIZATION_ID=
\`\`\`

[Rest of the technical setup instructions remain the same as the original README...]

# Customization for HR Content

## Prompts

To optimize the agent for HR and recruitment content, update the following prompts in the [\`prompts\`](./src/agents/generate-post/prompts/index.ts) folder:

- \`BUSINESS_CONTEXT\` - Add context about your HR department or executive search firm's focus areas
- \`TWEET_EXAMPLES\` - Include examples of successful HR/recruitment focused social media posts
- \`POST_STRUCTURE_INSTRUCTIONS\` - Customize the structure for HR content (e.g., job postings, company culture updates)
- \`POST_CONTENT_RULES\` - Add guidelines specific to HR communication best practices

## Post Style

Modify these prompts to match your organization's tone and style:

1. Post structure instructions (\`POST_STRUCTURE_INSTRUCTIONS\`) - Adapt for HR content types like job postings, employee spotlights, or industry insights
2. Few-shot examples (\`TWEET_EXAMPLES\`) - Include examples from successful HR influencers and companies
3. "Business context" (\`BUSINESS_CONTEXT\`) - Describe your organization's HR focus areas and target audience

---

Built with ❤️ by [TalentAssisto](https://www.talentassisto.com) | Powered by [LangChain](https://github.com/langchain-ai/langchain)
