export default function TerminalCard() {
  return (
    <div className="bg-card border border-border rounded-lg p-8 font-mono text-base max-w-lg animate-float shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-muted-foreground ml-2 text-xs">feduski@portfolio:~</span>
      </div>

      <div className="space-y-3">
        <div className="text-muted-foreground">
          <span className="text-violet-400">$</span> whoami
        </div>
        <div className="text-foreground pl-2">Fede Garcia</div>

        <div className="text-muted-foreground">
          <span className="text-violet-400">$</span> cat skills.txt
        </div>
        <div className="text-cyan-400 pl-2 typing-animation">Python • AI • Automation</div>

        <div className="text-muted-foreground">
          <span className="text-violet-400">$</span> echo "Ready to build amazing things"
        </div>
        <div className="text-violet-400 pl-2">Ready to build amazing things</div>

        <div className="text-muted-foreground">
          <span className="text-violet-400">$</span> <span className="animate-pulse text-violet-400">_</span>
        </div>
      </div>
    </div>
  )
}
