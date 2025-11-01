"use client";

import { useState } from "react";
import {
  CheckCircle,
  Sparkles,
  Camera,
  Store,
  Building2,
  ShoppingBag,
  ArrowRight,
  PlayCircle,
  Rocket
} from "lucide-react";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";


export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    message: "I want my first AI video."
  });

  return (
    <main className="min-h-screen w-full bg-neutral-950 text-white font-sans">
      {/* HERO */}
      <section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-800/60 ring-1 ring-neutral-700 px-3 py-1 text-xs text-neutral-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Video Content Agency • Built For Small Business</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
            AI-Powered Videos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
              That Sell For You
            </span>
          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed max-w-xl">
            You get scroll-stopping short-form videos for TikTok / Reels / Shorts
            — without hiring an editor, a camera crew, or a marketing team. We
            handle script, voice, visuals, and captions using pro AI tools.
          </p>

          <ul className="text-neutral-300 text-sm space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
              <span>$100–$500 per video. Flat. No retainer required.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
              <span>
                Perfect for restaurants, real estate, and e-commerce brands
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
              <span>
                We generate, edit, voiceover, caption, and deliver — you just
                post
              </span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="rounded-2xl px-5 py-4 text-sm font-medium flex items-center gap-2 shadow-[0_20px_60px_rgba(255,255,255,0.15)]">
              <PlayCircle className="w-4 h-4" />
              Get My First Video
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl px-5 py-4 text-sm font-medium flex items-center gap-2"
            >
              <Camera className="w-4 h-4" />
              See Sample Ads
            </Button>
          </div>

          <p className="text-[11px] text-neutral-500 max-w-xs leading-relaxed">
            Zero filming needed. We can build viral-style content using AI
            scene generation, motion graphics, product shots, voiceover, and
            social-style captions.
          </p>
        </div>

        {/* Hero Visual Placeholder */}
        <div className="relative">
          <div className="absolute inset-0 blur-[120px] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_70%)]" />
          <div className="relative bg-neutral-900/50 rounded-3xl border border-neutral-700/60 shadow-[0_30px_120px_-10px_rgba(0,0,0,0.8)] p-6 md:p-8 flex flex-col gap-4">
            <div className="text-xs text-neutral-400 flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-neutral-800 ring-2 ring-neutral-900 text-[9px] flex items-center justify-center">
                  Sora
                </div>
                <div className="w-6 h-6 rounded-full bg-neutral-800 ring-2 ring-neutral-900 text-[9px] flex items-center justify-center">
                  Runway
                </div>
                <div className="w-6 h-6 rounded-full bg-neutral-800 ring-2 ring-neutral-900 text-[9px] flex items-center justify-center">
                  Pika
                </div>
              </div>
              <span>Generated in AI. Edited by humans.</span>
            </div>

            <div className="bg-neutral-800/40 border border-neutral-700/60 rounded-2xl aspect-[9/16] w-full max-w-xs mx-auto flex items-center justify-center text-center p-4 text-neutral-300 text-sm leading-relaxed">
              [VIDEO PREVIEW]
              <br />
              High-energy hook in 1.2 seconds.
              <br />
              Captions. Sound design. CTA.
            </div>

            <div className="grid grid-cols-3 gap-3 text-[10px] text-neutral-400">
              <div className="bg-neutral-800/30 border border-neutral-700/50 rounded-xl p-3 text-center leading-tight">
                <div className="text-white font-semibold text-sm">15–30s</div>
                Viral format
              </div>
              <div className="bg-neutral-800/30 border border-neutral-700/50 rounded-xl p-3 text-center leading-tight">
                <div className="text-white font-semibold text-sm">
                  Hook • Drama • Offer
                </div>
                Sales storytelling
              </div>
              <div className="bg-neutral-800/30 border border-neutral-700/50 rounded-xl p-3 text-center leading-tight">
                <div className="text-white font-semibold text-sm">
                  Ready to Post
                </div>
                Captions &amp; music
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section className="px-6 py-16 md:py-20 max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        <Card className="text-left">
          <CardContent className="p-6 space-y-3">
            <div className="text-neutral-400 text-xs uppercase tracking-wide">
              What we do
            </div>
            <div className="text-xl text-white font-semibold leading-snug">
              Short-form ads that look like trending content — not boring
              commercials.
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              TikTok, IG Reels, YouTube Shorts. We build high-converting
              vertical video that feels native to the feed, so people actually
              watch it.
            </p>
          </CardContent>
        </Card>

        <Card className="text-left">
          <CardContent className="p-6 space-y-3">
            <div className="text-neutral-400 text-xs uppercase tracking-wide">
              Why it works
            </div>
            <div className="text-xl text-white font-semibold leading-snug">
              Every business needs content. Almost none have time to make it
              daily.
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We replace an in-house videographer, editor, script writer, voice
              actor, and marketing strategist — for the price of 1 lunch rush.
            </p>
          </CardContent>
        </Card>

        <Card className="text-left">
          <CardContent className="p-6 space-y-3">
            <div className="text-neutral-400 text-xs uppercase tracking-wide">
              What you get
            </div>
            <div className="text-xl text-white font-semibold leading-snug">
              Scroll stopper + offer + call to action, delivered as a post-ready
              file.
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We hand you the video file. You upload. That’s it.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* INDUSTRIES */}
      <section className="px-6 py-16 md:py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-800/60 ring-1 ring-neutral-700 px-3 py-1 text-[10px] text-neutral-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Who we film for (no filming needed)</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
            Built for local + online brands
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            We already know what converts in your niche. You don’t have to
            guess.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Restaurants */}
          <Card>
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-neutral-800/60 rounded-xl p-3 border border-neutral-700/50">
                  <Store className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">
                    Restaurants
                  </div>
                  <div className="text-neutral-500 text-xs">
                    TikTok food hype
                  </div>
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                POV "first bite" shots, sizzling close-ups, on-screen price, and
                a callout like "Only 10 today". People see it, they show up.
              </p>
              <div className="text-[11px] text-neutral-500 leading-relaxed">
                Menu drops • New item promos • Limited-time deals • DoorDash/Uber
                Eats push
              </div>
            </CardContent>
          </Card>

          {/* Real Estate */}
          <Card>
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-neutral-800/60 rounded-xl p-3 border border-neutral-700/50">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">
                    Real Estate Agents
                  </div>
                  <div className="text-neutral-500 text-xs">
                    Get buyers DM&apos;ing you
                  </div>
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Fast property teasers with hooks like "$8k down gets you this
                kitchen in Orange County." You become the go-to local expert.
              </p>
              <div className="text-[11px] text-neutral-500 leading-relaxed">
                Listing promos • Neighborhood authority videos • Mortgage hack
                explains
              </div>
            </CardContent>
          </Card>

          {/* E-commerce */}
          <Card>
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-neutral-800/60 rounded-xl p-3 border border-neutral-700/50">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">
                    E-Commerce Brands
                  </div>
                  <div className="text-neutral-500 text-xs">
                    Make strangers trust you fast
                  </div>
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                UGC-style demo videos showing problem → product → transformation.
                Looks organic, converts like an ad.
              </p>
              <div className="text-[11px] text-neutral-500 leading-relaxed">
                Amazon FBA • Shopify brands • Subscription boxes • Pet products
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-16 md:py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-800/60 ring-1 ring-neutral-700 px-3 py-1 text-[10px] text-neutral-300">
              <Rocket className="w-3.5 h-3.5" />
              <span>How it works</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              From idea to post-ready video in 3 steps
            </h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              We do everything. You don’t have to be on camera unless you want
              to.
            </p>

            <div className="space-y-6 pt-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-neutral-800/60 border border-neutral-700/60 flex items-center justify-center text-white font-semibold text-sm">
                  1
                </div>
                <div className="space-y-1.5">
                  <div className="text-white font-semibold">
                    Quick Call or DM
                  </div>
                  <div className="text-neutral-400 text-sm leading-relaxed">
                    You tell us the goal: more foot traffic, more DMs, sell a
                    product, fill an open house, etc.
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-neutral-800/60 border border-neutral-700/60 flex items-center justify-center text-white font-semibold text-sm">
                  2
                </div>
                <div className="space-y-1.5">
                  <div className="text-white font-semibold">
                    AI Video Production
                  </div>
                  <div className="text-neutral-400 text-sm leading-relaxed">
                    We generate cinematic shots with AI (Sora / Pika / Runway),
                    add pro voiceover (ElevenLabs), captions, sound design, and
                    offer text.
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-neutral-800/60 border border-neutral-700/60 flex items-center justify-center text-white font-semibold text-sm">
                  3
                </div>
                <div className="space-y-1.5">
                  <div className="text-white font-semibold">You Post It</div>
                  <div className="text-neutral-400 text-sm leading-relaxed">
                    You get a ready-to-upload vertical video (9:16) with
                    captions and CTA text. Just drop it on TikTok, IG Reels, or
                    YouTube Shorts.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact / Lead Form (visual only) */}
          <Card className="w-full">
            <CardContent className="p-6 md:p-8 flex flex-col gap-5">
              <div className="text-white text-xl font-semibold leading-tight">
                Get your first AI video
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Tell us what you sell and we’ll send a video concept & hook line
                for you today.
              </p>

              <form className="flex flex-col gap-4 text-sm">
                <div className="flex flex-col gap-2">
                  <label className="text-neutral-300 font-medium">
                    Your name
                  </label>
                  <Input
                    placeholder="Maria, Jake, etc"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-neutral-300 font-medium">
                    Business / Product
                  </label>
                  <Input
                    placeholder="Taco spot, realtor, pet brand..."
                    value={formData.business}
                    onChange={(e) =>
                      setFormData({ ...formData, business: e.target.value })
                    }
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-neutral-300 font-medium">
                    Phone / IG @ / Email
                  </label>
                  <Input
                    placeholder="(555) 123-4567 / @FireTacosOC / you@mail.com"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-neutral-300 font-medium">
                    What do you want the video to do?
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button className="rounded-2xl px-5 py-4 text-sm font-medium flex items-center justify-center gap-2 shadow-[0_20px_60px_rgba(255,255,255,0.15)]">
                  Send My Concept
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>

              <p className="text-[10px] text-neutral-600 leading-relaxed">
                We’ll never spam you. One human will reach out.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-800/60 ring-1 ring-neutral-700 px-3 py-1 text-[10px] text-neutral-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
            Simple. Transparent. Built to test fast.
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Start with one video or get a pack for the month.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Starter */}
          <Card className="flex flex-col">
            <CardContent className="p-6 flex flex-col gap-4 flex-1">
              <div className="text-white font-semibold text-lg">Starter</div>
              <div className="text-white text-4xl font-semibold tracking-tight">
                $100
              </div>
              <div className="text-neutral-500 text-xs">
                1 Short-Form Video (15–30s)
              </div>
              <ul className="text-neutral-300 text-sm leading-relaxed space-y-2 pt-2">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  Script + hook written for you
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  AI visuals + stock + motion
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  Captions & CTA text on screen
                </li>
              </ul>
              <Button className="rounded-2xl px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 mt-auto">
                Start Starter <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Growth */}
          <Card className="flex flex-col border border-neutral-700/80 relative overflow-hidden shadow-[0_30px_120px_-10px_rgba(255,255,255,0.15)]">
            <div className="absolute right-4 top-4 text-[10px] bg-white text-black font-semibold px-2 py-1 rounded-full">
              Most Popular
            </div>
            <CardContent className="p-6 flex flex-col gap-4 flex-1">
              <div className="text-white font-semibold text-lg">
                Growth Pack
              </div>
              <div className="text-white text-4xl font-semibold tracking-tight">
                $399
              </div>
              <div className="text-neutral-500 text-xs">5 Short-Form Videos</div>
              <ul className="text-neutral-300 text-sm leading-relaxed space-y-2 pt-2">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  Full content week for socials
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  Different hooks / angles to test
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  Drive traffic to 1 clear offer
                </li>
              </ul>
              <Button className="rounded-2xl px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 mt-auto">
                Get Growth Pack <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Creator */}
          <Card className="flex flex-col">
            <CardContent className="p-6 flex flex-col gap-4 flex-1">
              <div className="text-white font-semibold text-lg">
                Creator Partner
              </div>
              <div className="text-white text-4xl font-semibold tracking-tight">
                $1,499
              </div>
              <div className="text-neutral-500 text-xs">
                Monthly Content System
              </div>
              <ul className="text-neutral-300 text-sm leading-relaxed space-y-2 pt-2">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  15+ high-converting clips / mo
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  Your brand voice + consistent style
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  Priority creative / offer strategy
                </li>
              </ul>
              <Button className="rounded-2xl px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 mt-auto">
                Apply for Partner <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:py-20 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
            FAQ
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Real questions we get from business owners.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
          <div className="space-y-4">
            <div>
              <div className="text-white font-semibold text-lg leading-snug">
                Do I have to be on camera?
              </div>
              <div className="text-neutral-400 text-sm leading-relaxed">
                No. We can fully generate story, footage, product shots, voice,
                captions, everything. If you <em>want</em> to appear on camera
                we can script it for you so you sound confident in 1 take.
              </div>
            </div>
            <div>
              <div className="text-white font-semibold text-lg leading-snug">
                Will this work for my small business?
              </div>
              <div className="text-neutral-400 text-sm leading-relaxed">
                Yes if people can buy fast: food, beauty, services, real estate
                showings, gym trials, ecommerce products, etc. We focus on
                offers that can convert same day.
              </div>
            </div>
            <div>
              <div className="text-white font-semibold text-lg leading-snug">
                Can you do voiceovers in English or Spanish?
              </div>
              <div className="text-neutral-400 text-sm leading-relaxed">
                Yes. We generate human-style voiceovers in English or Spanish so
                you can hit your real audience, not just subtitles.
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-white font-semibold text-lg leading-snug">
                What platforms do these videos work on?
              </div>
              <div className="text-neutral-400 text-sm leading-relaxed">
                TikTok, Instagram Reels, YouTube Shorts, Facebook Reels, and
                ads. You’ll get it in vertical 9:16 so you can post everywhere.
              </div>
            </div>
            <div>
              <div className="text-white font-semibold text-lg leading-snug">
                Is there a contract?
              </div>
              <div className="text-neutral-400 text-sm leading-relaxed">
                No for Starter and Growth Pack. Creator Partner is monthly
                because we basically become your content team.
              </div>
            </div>
            <div>
              <div className="text-white font-semibold text-lg leading-snug">
                What happens after I pay?
              </div>
              <div className="text-neutral-400 text-sm leading-relaxed">
                We message you a draft hook + video idea. You approve the angle.
                We build and send you the finished post-ready file.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <footer className="px-6 py-16 md:py-24 max-w-7xl mx-auto text-center flex flex-col items-center gap-8">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
            Ready for people to actually stop scrolling on you?
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            First video concept is free. We’ll show you the hook we’d use to get
            attention in the first 1–2 seconds.
          </p>
        </div>

        <Button className="rounded-2xl px-6 py-4 text-sm font-medium flex items-center gap-2 shadow-[0_20px_60px_rgba(255,255,255,0.15)]">
          Get My Free Concept <ArrowRight className="w-4 h-4" />
        </Button>

        <div className="text-[10px] text-neutral-600 leading-relaxed max-w-xs">
          Not an agency. Not theory. Real videos that sell food, book showings,
          and move product.
        </div>

        <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-neutral-700/60 to-transparent" />

        <div className="text-[10px] text-neutral-700 leading-relaxed">
          © 2025 AI Video Content Agency. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
