import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <div class="px-4 py-8 mx-auto fresh-gradient min-h-screen">
      <Head>
        <title>Deno Fresh Repro</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div class="min-h-screen bg-surface" style="font-family: var(--font-body);">
        <header class="border-b border-outline-variant bg-surface sticky top-0 z-50"
          style="box-shadow: var(--shadow-sm);">
          <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span class="text-on-primary font-bold text-sm">DFR</span>
              </div>
              <h1 class="text-on-surface font-semibold text-lg">
                Design System Storybook
              </h1>
            </div>
            <span class="text-on-surface-variant text-sm">v1.0</span>
          </div>
        </header>
    </div>
    </div>
  );
});
