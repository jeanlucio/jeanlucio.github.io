import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Map each plugin name (as it appears in plugins.ts) to its GitHub repo.
const PLUGINS = [
  { name: 'PlayerHUD',              repo: 'jeanlucio/moodle-block_playerhud' },
  { name: 'PlayerHUD Filter',       repo: 'jeanlucio/moodle-filter_playerhud' },
  { name: 'PlayerHUD Availability', repo: 'jeanlucio/moodle-availability_playerhud' },
  { name: 'PlayerGroup',            repo: 'jeanlucio/moodle-mod_playergroup' },
  { name: 'Checklist do Professor',  repo: 'jeanlucio/moodle-block_teacher_checklist' },
  { name: 'Estatísticas de Recursos', repo: 'jeanlucio/moodle-local_resourcestats' },
  { name: 'Penalidade por Atraso',  repo: 'jeanlucio/moodle-local_latepenalty' },
  { name: 'Report Unlocker',        repo: 'jeanlucio/moodle-report_unlocker' },
];

async function fetchLatestVersion(repo) {
  const headers = { 'User-Agent': 'jeanlucio-site-version-updater' };
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  // Use the tags API (first result = most recent tag).
  // Repos use annotated tags, not GitHub Releases.
  const res = await fetch(
    `https://api.github.com/repos/${repo}/tags?per_page=1`,
    { headers },
  );

  if (!res.ok) {
    console.warn(`  ⚠ ${repo}: HTTP ${res.status}`);
    return null;
  }

  const data = await res.json();
  const tag = data[0]?.name ?? '';

  // Extract semver digits from any tag format (v1.5.0, 1.5.0, release-1.5.0 etc.)
  const match = tag.match(/(\d+\.\d+\.\d+)/);
  return match ? match[1] : null;
}

function updateVersion(content, pluginName, version) {
  const escaped = pluginName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Match the version field inside the block that starts with this name.
  // The [\s\S]*? non-greedy match stops at the first version: encountered.
  const regex = new RegExp(
    `(name: '${escaped}',[\\s\\S]*?version: ')[^']*(')`
  );

  if (!regex.test(content)) {
    console.warn(`  ⚠ Pattern not found for: ${pluginName}`);
    return content;
  }

  return content.replace(regex, `$1${version}$2`);
}

const filePath = join(__dirname, '../src/data/plugins.ts');
let content = readFileSync(filePath, 'utf-8');
const original = content;

for (const plugin of PLUGINS) {
  process.stdout.write(`Checking ${plugin.name}... `);
  const version = await fetchLatestVersion(plugin.repo);

  if (!version) {
    console.log('skipped (no release found)');
    continue;
  }

  const next = updateVersion(content, plugin.name, version);
  if (next !== content) {
    console.log(`updated to ${version}`);
    content = next;
  } else {
    console.log(`already at ${version}`);
  }
}

if (content !== original) {
  writeFileSync(filePath, content, 'utf-8');
  console.log('\n✓ plugins.ts updated.');
} else {
  console.log('\n✓ No changes needed.');
}
