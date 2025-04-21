import { globSync } from "tinyglobby";
import process from "node:process";
import fs from "node:fs/promises";

const pkgs = globSync("./*/package.json", { cwd: process.cwd() })

async function run() {
  const { version } = await fetch('https://npm.antfu.dev/pxd').then(res => res.json())
  const latestVersion = `^${version}`

  for (const pkg of pkgs) {
    const content = await fs.readFile(pkg, 'utf-8')
    const json = JSON.parse(content)

    if (json.dependencies['pxd']) {
      json.dependencies['pxd'] = latestVersion
    }

    await fs.writeFile(pkg, JSON.stringify(`${json}\n`, null, 2))
  }
}

run()
