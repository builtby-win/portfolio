---
name: blog-post
description: Draft, revise, structure, and package blog posts for Winston’s personal site in his lowercase, conversational builder voice. Use when creating or editing a post in src/content/blog, turning an idea into a publishable technical or opinion piece, preserving a concise rewrite, adding Astro frontmatter, or planning supporting screen recordings and social repurposing.
---

# Blog post

Use this skill for blog posts on Winston’s personal site. Treat each post as a personal builder sharing something he noticed, built, broke, or now strongly believes.

## Workflow

1. Inspect the existing post, nearby posts, `docs/plans/2026-03-12-blog-voice-guide.md`, and `src/content.config.ts` before editing.
2. Preserve the author’s intended length. If the user rewrote a post to be short, edit for clarity and rhythm without expanding it into a comprehensive guide.
3. Use a date-prefixed filename: `YYYY-MM-DD-slug.md` (or `.mdx` only when the post needs components). Keep the frontmatter `date` aligned with the filename.
4. Keep posts under `src/content/blog/` and use the repository’s schema: `title`, `date`, optional `description`, optional `tags`, optional `cover`, and `draft`.
5. Use lowercase prose by default. Keep code, product names, API names, proper nouns, and sentence-level clarity correctly capitalized when needed.
6. Prefer short paragraphs, direct transitions, concrete examples, and one strong opinion. Sound like a builder talking to a smart friend—not a company blog or detached tutorial.
7. Retain lived-in language, small jokes, frustration, excitement, and specific details. Remove generic marketing language, filler, fake authority, and unsupported claims.

## Voice rules

- lead with a strong observation, tension, or opinion;
- write conversationally and use spoken phrasing when it sounds natural;
- prefer “use” over “utilize,” specifics over abstractions, and active voice;
- avoid “in today’s fast-paced landscape,” “seamlessly,” “leverage,” “optimize your workflow,” and “game-changing”;
- do not over-polish the personality out of the draft;
- end with a memorable takeaway, practical invitation, or sharper opinion.

## Technical and research rules

- Browse when claims, packages, APIs, or examples may have changed.
- Prefer primary sources for technical claims: official docs, project repositories, and package documentation.
- Link sources inline near the claim instead of adding a detached bibliography.
- Never imply that macOS permissions can be granted programmatically when the user still has to approve them.
- Clearly separate what an app can automate, what the user must do, and what is framework-specific.
- For ecosystem roundups, verify that each named package supports the exact behavior being described.

## Visual and repurposing package

When the idea benefits from demonstrating an interaction, add a short asset checklist rather than inventing media:

- before recording;
- after recording;
- side-by-side still or carousel frame;
- code or implementation excerpt;
- optional GIF or screen capture.

For social derivatives, extract the strongest opinion and adapt it rather than pasting the blog. X should be a punchy thread, Threads should feel like a personal observation, and carousels should use one idea per slide.

## Final checks

- filename begins with the post date;
- frontmatter date matches the filename;
- title and description are specific;
- prose sounds like Winston aloud;
- no unnecessary expansion beyond the user’s requested scope;
- links resolve and technical claims are sourced;
- Astro content parsing/build passes when code or frontmatter changed.
