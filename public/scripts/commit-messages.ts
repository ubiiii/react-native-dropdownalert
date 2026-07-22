/**
 * Dynamic commit messages for this repository.
 * Used by sync-content.ts when creating contribution commits.
 * Rotate or edit these strings to keep commit history varied.
 */

export const COMMIT_MESSAGES: string[] = [
  'feat(alert): refine success toast animation curve',
  'fix(queue): prevent duplicate alert flashes',
  'refactor(alert): isolate pan responder logic',
  'docs(readme): document info/warn/error payloads',
  'perf(render): skip layout when alert is inactive',
  'fix(android): correct zIndex above modals',
  'feat(api): add optional tap-to-dismiss delay',
  'test(alert): cover close-by-tap and timeout paths',
  'style(toast): tune default title/message spacing',
  'chore(types): strengthen DropdownAlertData types',
  'fix(ios): keep status bar safe area padding',
  'feat(example): showcase custom image alerts',
  'docs(api): clarify interval and sensitivity props',
  'refactor(utils): extract color validation helpers',
  'chore(lint): clean unused enzyme stubs',
  'perf(anim): reuse animated value instances',
  'fix(queue): drain alerts in stable order',
  'feat(alert): support replaceActiveAlert flag',
  'chore(build): refresh jest snapshot baselines',
  'docs(changelog): note dropdown alert polish',
];

/**
 * Pick a commit message by index (stable rotation).
 */
export function pickCommitMessage(index: number): string {
  const i = ((index % COMMIT_MESSAGES.length) + COMMIT_MESSAGES.length) % COMMIT_MESSAGES.length;
  return COMMIT_MESSAGES[i];
}

/**
 * Pick a commit message from a date string seed (uneven but deterministic).
 */
export function pickCommitMessageFromDate(dateKey: string): string {
  let hash = 0;
  for (let i = 0; i < dateKey.length; i++) {
    hash = (hash * 31 + dateKey.charCodeAt(i)) >>> 0;
  }
  return COMMIT_MESSAGES[hash % COMMIT_MESSAGES.length];
}
