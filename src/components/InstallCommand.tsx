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
    <div className="yips-install-outer rounded-lg p-px text-[clamp(0.5rem,3vw,1rem)]">
      <div className="relative group rounded-[7px] bg-gray-950 dark:bg-gray-900 px-[1.25em] py-[1em] flex items-center gap-[1em]">
        <code className="flex-1 min-w-0 font-mono text-[0.875em] text-yips-blue select-all whitespace-nowrap overflow-hidden">
          {INSTALL_CMD}
        </code>
        <button
          onClick={handleCopy}
          aria-label="Copy install command"
          className="shrink-0 text-[0.75em] font-medium px-[0.75em] py-[0.375em] rounded-md bg-gray-800 dark:bg-gray-700 text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-white transition-colors"
        >
          {copied ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
