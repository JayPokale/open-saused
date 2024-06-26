import { Meta, StoryObj } from "@storybook/react";
import { WorkspacePullRequestTable } from "./WorkspacePullRequestsTable";

type Story = StoryObj<typeof WorkspacePullRequestTable>;

const meta: Meta<typeof WorkspacePullRequestTable> = {
  title: "Components/Workspaces/Pull Request Table",
  component: WorkspacePullRequestTable,
};

export default meta;

export const Default: Story = {
  args: {
    data: [
      {
        event_id: 37418616241,
        pr_number: 241,
        pr_state: "closed",
        pr_is_draft: false,
        pr_is_merged: true,
        pr_mergeable_state: "unknown",
        pr_is_rebaseable: false,
        pr_title: "fix: improved readability and easier navigation for blogposts",
        pr_head_label: "open-sauced:content-opacity-fix",
        pr_base_label: "open-sauced:main",
        pr_head_ref: "content-opacity-fix",
        pr_base_ref: "main",
        pr_author_login: "isabensusan",
        pr_created_at: "2024-04-12T15:45:26.000Z",
        pr_closed_at: "2024-04-12T19:41:56.000Z",
        pr_merged_at: "2024-04-12T19:41:56.000Z",
        pr_updated_at: "2024-04-12T19:41:57.000Z",
        pr_comments: 1,
        pr_additions: 7,
        pr_deletions: 5,
        pr_changed_files: 3,
        repo_name: "open-sauced/landing-page",
        pr_commits: 2,
      },
      {
        event_id: 37418245781,
        pr_number: 242,
        pr_state: "closed",
        pr_is_draft: false,
        pr_is_merged: false,
        pr_mergeable_state: "clean",
        pr_is_rebaseable: false,
        pr_title: "feat: add changelog summary field to changelog schema",
        pr_head_label: "open-sauced:fix-changelog-summary",
        pr_base_label: "open-sauced:main",
        pr_head_ref: "fix-changelog-summary",
        pr_base_ref: "main",
        pr_author_login: "brandonroberts",
        pr_created_at: "2024-04-12T18:33:06.000Z",
        pr_closed_at: "2024-04-12T19:24:42.000Z",
        pr_merged_at: "0001-01-01T00:00:00.000Z",
        pr_updated_at: "2024-04-12T19:24:43.000Z",
        pr_comments: 2,
        pr_additions: 7,
        pr_deletions: 1,
        pr_changed_files: 1,
        repo_name: "open-sauced/landing-page",
        pr_commits: 1,
      },
      {
        event_id: 37417992596,
        pr_number: 726,
        pr_state: "open",
        pr_is_draft: false,
        pr_is_merged: false,
        pr_mergeable_state: "unknown",
        pr_is_rebaseable: false,
        pr_title: "fix: Corrects linting warnings (and bump builds)",
        pr_head_label: "jpmcb:bump-builds",
        pr_base_label: "open-sauced:beta",
        pr_head_ref: "bump-builds",
        pr_base_ref: "beta",
        pr_author_login: "jpmcb",
        pr_created_at: "2024-04-12T19:13:09.000Z",
        pr_closed_at: "0001-01-01T00:00:00.000Z",
        pr_merged_at: "0001-01-01T00:00:00.000Z",
        pr_updated_at: "2024-04-12T19:13:09.000Z",
        pr_comments: 0,
        pr_additions: 3,
        pr_deletions: 10,
        pr_changed_files: 3,
        repo_name: "open-sauced/api",
        pr_commits: 1,
      },
      {
        event_id: 37417000238,
        pr_number: 3177,
        pr_state: "open",
        pr_is_draft: false,
        pr_is_merged: false,
        pr_mergeable_state: "unknown",
        pr_is_rebaseable: false,
        pr_title: "feat: add link from Repo pages to GitHub",
        pr_head_label: "open-sauced:feat/repo-pages-github-link",
        pr_base_label: "open-sauced:beta",
        pr_head_ref: "feat/repo-pages-github-link",
        pr_base_ref: "beta",
        pr_author_login: "zeucapua",
        pr_created_at: "2024-04-12T18:28:43.000Z",
        pr_closed_at: "0001-01-01T00:00:00.000Z",
        pr_merged_at: "0001-01-01T00:00:00.000Z",
        pr_updated_at: "2024-04-12T18:28:43.000Z",
        pr_comments: 0,
        pr_additions: 9,
        pr_deletions: 1,
        pr_changed_files: 1,
        repo_name: "open-sauced/app",
        pr_commits: 1,
      },
      {
        event_id: 37416160803,
        pr_number: 3176,
        pr_state: "open",
        pr_is_draft: false,
        pr_is_merged: false,
        pr_mergeable_state: "unknown",
        pr_is_rebaseable: false,
        pr_title: "feat: implement suggestion boxes for `StarSearch`",
        pr_head_label: "open-sauced:feat/starsearch-suggestion-boxes",
        pr_base_label: "open-sauced:beta",
        pr_head_ref: "feat/starsearch-suggestion-boxes",
        pr_base_ref: "beta",
        pr_author_login: "zeucapua",
        pr_created_at: "2024-04-12T17:53:39.000Z",
        pr_closed_at: "0001-01-01T00:00:00.000Z",
        pr_merged_at: "0001-01-01T00:00:00.000Z",
        pr_updated_at: "2024-04-12T17:53:39.000Z",
        pr_comments: 0,
        pr_additions: 22,
        pr_deletions: 11,
        pr_changed_files: 1,
        repo_name: "open-sauced/app",
        pr_commits: 1,
      },
      {
        event_id: 37415883288,
        pr_number: 3173,
        pr_state: "closed",
        pr_is_draft: false,
        pr_is_merged: true,
        pr_mergeable_state: "unknown",
        pr_is_rebaseable: false,
        pr_title: "fix: updated styles of create insights links in sidebar",
        pr_head_label: "open-sauced:nickytonline/fix-cta-styles-new-insights-sidebar",
        pr_base_label: "open-sauced:beta",
        pr_head_ref: "nickytonline/fix-cta-styles-new-insights-sidebar",
        pr_base_ref: "beta",
        pr_author_login: "nickytonline",
        pr_created_at: "2024-04-11T23:55:25.000Z",
        pr_closed_at: "2024-04-12T17:41:55.000Z",
        pr_merged_at: "2024-04-12T17:41:55.000Z",
        pr_updated_at: "2024-04-12T17:41:56.000Z",
        pr_comments: 2,
        pr_additions: 5,
        pr_deletions: 6,
        pr_changed_files: 1,
        repo_name: "open-sauced/app",
        pr_commits: 2,
      },
      {
        event_id: 37413761300,
        pr_number: 723,
        pr_state: "closed",
        pr_is_draft: false,
        pr_is_merged: true,
        pr_mergeable_state: "unknown",
        pr_is_rebaseable: false,
        pr_title: "fix: now the /v2/workspaces/{id}/repos/prs can filter on repos instead of filter out",
        pr_head_label: "open-sauced:nickytonline/filtered-repos-workspace-prs",
        pr_base_label: "open-sauced:beta",
        pr_head_ref: "nickytonline/filtered-repos-workspace-prs",
        pr_base_ref: "beta",
        pr_author_login: "nickytonline",
        pr_created_at: "2024-04-12T15:13:14.000Z",
        pr_closed_at: "2024-04-12T16:18:54.000Z",
        pr_merged_at: "2024-04-12T16:18:54.000Z",
        pr_updated_at: "2024-04-12T16:18:54.000Z",
        pr_comments: 1,
        pr_additions: 4,
        pr_deletions: 4,
        pr_changed_files: 2,
        repo_name: "open-sauced/api",
        pr_commits: 3,
      },
      {
        event_id: 37412154811,
        pr_number: 3164,
        pr_state: "closed",
        pr_is_draft: false,
        pr_is_merged: true,
        pr_mergeable_state: "unknown",
        pr_is_rebaseable: false,
        pr_title: "chore: add headers configuration to ignore non-production domains",
        pr_head_label: "open-sauced:chore-ignore-deploy-previews",
        pr_base_label: "open-sauced:beta",
        pr_head_ref: "chore-ignore-deploy-previews",
        pr_base_ref: "beta",
        pr_author_login: "brandonroberts",
        pr_created_at: "2024-04-11T14:59:23.000Z",
        pr_closed_at: "2024-04-12T15:23:17.000Z",
        pr_merged_at: "2024-04-12T15:23:17.000Z",
        pr_updated_at: "2024-04-12T15:23:17.000Z",
        pr_comments: 2,
        pr_additions: 17,
        pr_deletions: 0,
        pr_changed_files: 1,
        repo_name: "open-sauced/app",
        pr_commits: 4,
      },
      {
        event_id: 37389581124,
        pr_number: 3162,
        pr_state: "closed",
        pr_is_draft: false,
        pr_is_merged: true,
        pr_mergeable_state: "unknown",
        pr_is_rebaseable: false,
        pr_title: "feat: basic implementation of StarSearch",
        pr_head_label: "open-sauced:feat/starsearch-basic-io",
        pr_base_label: "open-sauced:beta",
        pr_head_ref: "feat/starsearch-basic-io",
        pr_base_ref: "beta",
        pr_author_login: "zeucapua",
        pr_created_at: "2024-04-10T20:33:10.000Z",
        pr_closed_at: "2024-04-11T22:54:19.000Z",
        pr_merged_at: "2024-04-11T22:54:19.000Z",
        pr_updated_at: "2024-04-11T22:54:20.000Z",
        pr_comments: 7,
        pr_additions: 132,
        pr_deletions: 23,
        pr_changed_files: 1,
        repo_name: "open-sauced/app",
        pr_commits: 8,
      },
      {
        event_id: 37388017168,
        pr_number: 164,
        pr_state: "closed",
        pr_is_draft: false,
        pr_is_merged: false,
        pr_mergeable_state: "clean",
        pr_is_rebaseable: false,
        pr_title: "fix: make slogan accessible",
        pr_head_label: "CBID2:creating-custom-css-with-SVG",
        pr_base_label: "open-sauced:main",
        pr_head_ref: "creating-custom-css-with-SVG",
        pr_base_ref: "main",
        pr_author_login: "CBID2",
        pr_created_at: "2023-09-17T21:15:49.000Z",
        pr_closed_at: "2024-04-11T21:29:11.000Z",
        pr_merged_at: "0001-01-01T00:00:00.000Z",
        pr_updated_at: "2024-04-11T21:29:12.000Z",
        pr_comments: 10,
        pr_additions: 9,
        pr_deletions: 8,
        pr_changed_files: 1,
        repo_name: "open-sauced/landing-page",
        pr_commits: 18,
      },
    ] as DbRepoPREvents[],
    isLoading: false,
    meta: { itemCount: 0, limit: 0, page: 0, hasNextPage: false, hasPreviousPage: false, pageCount: 0 },
  },
};

export const Loading: Story = {
  args: {
    data: null,
    isLoading: true,
    meta: null,
  },
};
