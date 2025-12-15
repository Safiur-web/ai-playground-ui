AI Playground UI – Frontend & UI/UX Prototype

A polished, frontend-only AI Playground interface inspired by leading AI platforms.
This project focuses on UI/UX design, component structure, accessibility, and frontend architecture, not real AI integration.

Research
Platforms Reviewed

1. OpenAI Playground
   Provides a clean interface to experiment with prompts, model selection, and parameter tuning in real time.

2. Anthropic Claude UI
   Focuses on long-form conversational responses with minimal UI distraction and strong readability.

3. Hugging Face Spaces
   Showcases community-built AI demos with rapid experimentation, visual feedback, and flexible layouts.

4. Microsoft Copilot Lab
   Emphasizes guided prompting and enterprise-oriented user experience for productivity use cases.

Core Features Selected

The following features were chosen by combining the strongest aspects of the reviewed platforms:

Model selector (GPT-3.5, ChatGPT-4, Custom)

Prompt editor with reusable templates

Parameter controls (temperature, max tokens)

Chat / output display with copy & clear actions

Theme toggle (light/dark)

Responsive layout for mobile and desktop

Design
Design Tool

Figma (low-fidelity wireframe)

Figma Design Link:

https://www.figma.com/design/9haBOvHuuZ4A9wP3PVchIk/AI-Playground-UI---Wireframe?node-id=0-1&t=NzcRSWWqiR5r5qE2-1

Layout & UX Decisions

Sidebar-based layout for configuration (models & parameters)

Main content area for prompt editing and AI responses

Clear visual hierarchy and spacing for readability

Familiar interaction patterns inspired by modern AI tools

Tailwind CSS Mapping
Design Element Tailwind Utility
Page spacing p-4, p-6
Typography text-sm, text-2xl, font-medium
Layout grid, flex, md:grid-cols-[300px_1fr]
Borders border, rounded
Responsive md: breakpoints
Design → Code Translation

Sidebar wireframe → Sidebar component

Prompt area → PromptEditor component

Chat/output panel → ChatOutput component

Buttons & controls → reusable UI patterns

JSON mock data → simulated API behavior

Development
Tech Stack

Next.js (App Router)

React (Functional Components)

TypeScript (Strict Mode)

Tailwind CSS

Frontend-only mock data

Implemented Features

Model selector dropdown

Prompt editor with save/load templates

Parameter sliders (temperature, max tokens)

Chat/output display with copy & clear buttons

Responsive layout (mobile → desktop)

Mock data loading from local JSON files

Theme toggle UI

Component-based architecture

Data & State

Models and templates loaded from local JSON (/data)

Loading states shown while fetching mock data

React Context used for global theme/session handling

Accessibility & UX

ARIA labels added to interactive elements

Keyboard-navigable inputs and buttons

Clear focus states via default browser styles

Simple hover/focus feedback using CSS

Storybook

Storybook folder structure included

Stories written for core components:

Button

Slider

Modal

ChatBubble

Note: Storybook requires Node.js 20.19+ to run locally.

Known Limitations

Theme toggle styling polish pending

Storybook requires newer Node version to execute locally

AI responses are mocked (frontend-only prototype)

Deployment

Deployed using Vercel / Netlify

Live URL provided in submission

Summary

This project demonstrates:

Strong frontend UI/UX thinking

Clean component architecture

Practical use of modern React & Next.js

Attention to accessibility and usability

Ability to translate design concepts into code

📌 Submission Links

Live Prototype: http://ai-playground-ui-vercel.vercel.app/

GitHub Repository: https://github.com/Safiur-web/ai-playground-ui

Figma Design: https://www.figma.com/design/9haBOvHuuZ4A9wP3PVchIk/AI-Playground-UI---Wireframe?node-id=0-1&t=NzcRSWWqiR5r5qE2-1
