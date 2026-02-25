'use client'

import { useState } from 'react'

const INSTALL_CMD = 'curl -fsSL https://yips.dev/install.sh | bash'

export function InstallCommand() {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback: do nothing
    }
  }

  return (
    <div className="yips-install-outer rounded-lg p-px">
      <div className="relative group rounded-[7px] bg-gray-950 dark:bg-gray-900 px-5 py-4 flex items-center gap-4">
        <code className="flex-1 font-mono text-sm text-yips-blue select-all break-all">
          {INSTALL_CMD}
        </code>
        <button
          onClick={handleCopy}
          aria-label="Copy install command"
          className="shrink-0 text-xs font-medium px-3 py-1.5 rounded-md bg-gray-800 dark:bg-gray-700 text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-white transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
