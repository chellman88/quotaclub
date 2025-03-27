import Head from "next/head";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quota Club — Tactical Tools for Modern Tech Sellers</title>
        <meta name="description" content="Cold email templates, sales calculators, and AI-powered tools built for SDRs, AEs, and RevOps." />
        <meta property="og:title" content="Quota Club" />
        <meta property="og:description" content="Tactical tools for elite tech sellers." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://joinquotaclub.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white px-6 py-10 md:px-20 font-sans">
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Tactical tools for elite tech sellers
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            Cold email templates, AI prompts, sales calculators, and more — all in one modern workspace.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="text-base px-6 py-3 rounded-2xl shadow-md bg-emerald-500 text-white hover:opacity-90">
              <a href="https://joinquotaclub.com/vault" target="_blank" rel="noopener noreferrer">
                Browse the Vault
              </a>
            </Button>
            <Button asChild variant="outline" className="text-base px-6 py-3 rounded-2xl border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white">
              <a href="https://joinquotaclub.com" target="_blank" rel="noopener noreferrer">
                Join the Club
              </a>
            </Button>
          </div>
        </section>

        <section className="mt-16 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Email Vault</h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                Cold emails, follow-ups, breakup lines, and LinkedIn DMs that actually get replies.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Quota Coach (AI)</h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                ChatGPT prompt packs, follow-up builders, and message rewrites for sales reps.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">ROI Calculators</h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                Ramp time, CAC payback, and meeting value — in seconds, not spreadsheets.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">More from the Club</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Quota Club Apparel</h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                  Premium streetwear for top sellers — clean, comfortable, and quota-ready.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Tactical Sales Playbooks</h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                  No-fluff, battle-tested guides from sellers who’ve done the work and hit the number.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-20 text-center bg-gray-50 dark:bg-zinc-800 py-16 rounded-2xl shadow-inner">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Quota Club is your new sales OS</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6">
            Built by sellers, for sellers. One link, infinite closes.
          </p>
          <Button asChild className="text-base px-6 py-3 rounded-2xl shadow-lg bg-emerald-500 text-white hover:opacity-90">
            <a href="https://joinquotaclub.com" target="_blank" rel="noopener noreferrer">
              Get Instant Access →
            </a>
          </Button>
        </section>
      </div>
    </>
  );
}
