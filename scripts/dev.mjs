// Starts `next dev` from a canonical project path.
//
// On Windows, Turbopack fails when the project is opened with a lowercase
// drive letter (e.g. VS Code on `f:\…` instead of `F:\…`): the page never
// finishes compiling and the browser reload-loops ("screen flickers").
// Normalising the drive letter before spawning Next avoids it.
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';

const cwd =
  process.platform === 'win32'
    ? process.cwd().replace(/^[a-z]:/, (drive) => drive.toUpperCase())
    : process.cwd();

const nextBin = createRequire(import.meta.url).resolve('next/dist/bin/next');
const child = spawn(process.execPath, [nextBin, 'dev', ...process.argv.slice(2)], {
  cwd,
  stdio: 'inherit',
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => child.kill(signal));
}
child.on('exit', (code, signal) => process.exit(signal ? 1 : (code ?? 0)));
