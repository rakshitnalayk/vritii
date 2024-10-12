"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { MoonIcon, SunIcon, SearchIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

export default function Home() {
  const [query, setQuery] = useState('');
  const { setTheme, theme } = useTheme()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Query submitted",
      description: `Your query: "${query}" has been sent for processing.`,
    })
  };

  return (
    <div className="min-h-screen gradient-bg text-foreground flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Vritti</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="rounded-full"
        >
          {theme === "light" ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
        </Button>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">AI Stock Screener for Retail Markets</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Harness the power of AI to analyze and screen stocks like a pro.</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter your stock screening query..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full py-6 pl-12 pr-4 text-lg rounded-full input-glow"
            />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-6 w-6" />
          </div>
          <Button type="submit" className="w-full py-6 text-lg rounded-full futuristic-button">
            Run Analysis
          </Button>
        </form>
        <Card className="mt-12 p-8 w-full max-w-3xl bg-card/50 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-4">How to use Vritti</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Enter a natural language query about stocks</li>
            <li>Specify criteria like P/E ratio, market cap, sector, etc.</li>
            <li>Ask for comparisons or historical data</li>
            <li>Request specific financial metrics or ratios</li>
          </ul>
          <p className="mt-4 text-lg font-medium">Example: "Show me tech stocks with P/E ratio under 20 and positive revenue growth in the last 3 years"</p>
        </Card>
      </main>
      <Toaster />
    </div>
  );
}