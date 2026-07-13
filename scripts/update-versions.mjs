import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PLUGINS = [
  { name: 'PlayerHUD',              repo: 'jeanlucio/moodle-block_playerhud' },
  { name: 'PlayerHUD Filter',       repo: 'jeanlucio/moodle-filter_playerhud' },
  { name: 'PlayerHUD Availability', repo: 'jeanlucio/moodle-availability_playerhud' },
  { name: 'PlayerGroup',            repo: 'jeanlucio/moodle-mod_playergroup' },
  { name: 'Checklist do Professor',  repo: 'jeanlucio/moodle-block_teacher_checklist' },
  { name: 'Estatísticas de Recursos', repo: 'jeanlucio/moodle-local_resourcestats' },
  { name: 'Penalidade por Atraso',  repo: 'jeanlucio/moodle-local_latepenalty' },
  { name: 'Report Unlocker',        repo: 'jeanlucio/moodle-report_unlocker' },
  { name: 'Lab Virtual',            repo: 'jeanlucio/moodle-local_virtuallab' },
  { name: 'AI Hub',                 repo: 'jeanlucio/moodle-local_aihub' },
];

async function fetchLatestVersion(repo) {
  const headers = { 'User-Agent': 'jeanlucio-site-version-updater' };
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

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
  const commitUrl = data[0]?.commit?.url;
  
  let date = null;
  if (commitUrl) {
    const commitRes = await fetch(commitUrl, { headers });
    const commitData = await commitRes.json();
    date = commitData.commit?.committer?.date;
  }

  const match = tag.match(/(\d+\.\d+\.\d+)/);
  const version = match ? match[1] : null;
  return { version, date };
}

function updateVersion(content, pluginName, info) {
  const { version, date } = info;
  const escaped = pluginName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const regex = new RegExp(
    `(name: '${escaped}',[\\s\\S]*?version: ')[^']*(')`
  );

  if (!regex.test(content)) {
    console.warn(`  ⚠ Pattern not found for: ${pluginName}`);
    return content;
  }

  let newContent = content.replace(regex, `$1${version}$2`);
  
  if (date) {
    const dateRegex = new RegExp(`(name: '${escaped}',[\\s\\S]*?)updatedDate: '[^']*'`);
    if (dateRegex.test(newContent)) {
      newContent = newContent.replace(new RegExp(`(name: '${escaped}',[\\s\\S]*?updatedDate: ')[^']*(')`), `$1${date}$2`);
    } else {
      newContent = newContent.replace(
        new RegExp(`(name: '${escaped}',[\\s\\S]*?version: '[^']*',)`),
        `$1\n    updatedDate: '${date}',`
      );
    }
  }

  return newContent;
}

const filePath = join(__dirname, '../src/data/plugins.ts');
let content = readFileSync(filePath, 'utf-8');
const original = content;

for (const plugin of PLUGINS) {
  process.stdout.write(`Checking ${plugin.name}... `);
  const info = await fetchLatestVersion(plugin.repo);

  if (!info || !info.version) {
    console.log('skipped (no release found)');
    continue;
  }

  const next = updateVersion(content, plugin.name, info);
  if (next !== content) {
    console.log(`updated to ${info.version} (${info.date})`);
    content = next;
  } else {
    console.log(`already up to date`);
  }
}

if (content !== original) {
  writeFileSync(filePath, content, 'utf-8');
  console.log('\n✓ plugins.ts updated.');
} else {
  console.log('\n✓ No changes needed.');
}
