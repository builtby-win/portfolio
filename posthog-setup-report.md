# PostHog post-wizard report

The wizard has completed a PostHog analytics integration for `builtby.win/ston`, a static Astro portfolio site. PostHog is initialized via a reusable `posthog.astro` component embedded in both the main terminal page (`ston.astro`) and the shared `BlogLayout.astro`, ensuring every page on the site is covered. Six custom events track the most meaningful visitor interactions: terminal navigation, terminal search, blog reading, resume visits, app link clicks, and repo link clicks.

## Events instrumented

| Event name | Description | File |
|---|---|---|
| `terminal_item_opened` | User navigates to an item from the terminal interface on the homepage. | `src/components/Terminal.tsx` |
| `terminal_searched` | User types a search query to filter items in the terminal. | `src/components/Terminal.tsx` |
| `blog_post_read` | A blog post page is loaded, marking the start of content consumption. | `src/pages/ston/blog/[...slug].astro` |
| `resume_viewed` | The resume page is viewed, indicating hiring interest. | `src/pages/ston/resume.astro` |
| `app_link_clicked` | User clicks an app link on the apps page. | `src/pages/ston/apps.astro` |
| `repo_link_clicked` | User clicks a repo link on the repos page. | `src/pages/ston/repos.astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/409517/dashboard/1884184)
- [Terminal interactions over time (wizard)](https://us.posthog.com/project/409517/insights/FYX4iqno)
- [Most popular terminal items (wizard)](https://us.posthog.com/project/409517/insights/cFdEoppS)
- [Blog posts read (wizard)](https://us.posthog.com/project/409517/insights/R5WUyxEL)
- [App link clicks (wizard)](https://us.posthog.com/project/409517/insights/0SFHN0QA)
- [Repo link clicks (wizard)](https://us.posthog.com/project/409517/insights/rbUr6P9P)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` to `.env.example` and any bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-astro-static/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
