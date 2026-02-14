defmodule YkdWeb.Components do
  use Phoenix.Component
  import YkdWeb.CoreComponents

  attr(:class, :string, default: nil)

  def custom_cursor(assigns) do
    ~H"""
    <div
      id="custom-cursor"
      phx-hook="CustomCursor"
      class="hidden md:block"
    >
      <div class="cursor-dot fixed pointer-events-none z-[9999]"></div>
      <div class="cursor-outline fixed pointer-events-none z-[9999]"></div>
    </div>
    """
  end

  def navbar(assigns) do
    ~H"""
    <nav
      id="navbar"
      phx-hook="Navbar"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-transparent border-transparent py-6"
      data-scrolled="false"
    >
      <div class="container mx-auto px-6 flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="group block">
          <svg class="opacity-90 hover:opacity-100 transition-opacity" width="25%" height="25%" viewBox="0 0 3840 1540">
            <path fill="white" id="ykd" d="M1596.131,100.266l-702.332,702.272l-175.787,483.228l-439.61,253.842c81.002,-222.552 164.129,-454.987 264.657,-727.14l-126.798,-571.95l-416.26,-240.508l715.919,0.015l105.63,476.552l476.525,-476.552l334.551,-0.018l345.87,-0.006l-467.99,1285.791c-116.015,0.25 -345.87,0 -345.896,-0.026l431.521,-1185.5Zm834.719,-100.256l836.252,-0.01c328.207,0 479.89,138.002 538.334,298.463c122.409,336.082 -110.435,687.355 -230.272,792.784c-119.837,105.429 -347.18,194.559 -649.658,194.544l-510.719,-0.026l338.388,-929.648l307.555,0l-231.207,635.237c200.193,2.033 449.646,8.103 594.995,-178.887c90.287,-116.153 186.63,-316.793 72.616,-444.82c-75.168,-84.406 -299.767,-69.185 -395.435,-69.185l-595.967,0l-406.863,341.398l302.896,645.93l-317.625,0l-210.983,-456.535l-193.194,162.129l189.298,-520.157l561.589,-471.218Z"/>
          </svg>
        </a>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-8">
          <.nav_link href="#features">Features</.nav_link>
          <.nav_link href="#analytics">Analytics</.nav_link>
          <.nav_link href="#ecosystem">Ecosystem</.nav_link>
          <.nav_link href="https://github.com/pr0m3theuz/workout-app">GitHub</.nav_link>
          <a
            href="#download"
            class="group relative px-6 py-2 bg-lime-400 text-black font-tech font-bold text-base uppercase tracking-wider overflow-hidden transition-all clip-path-download"
          >
            <div class="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0 ease-out"></div>
            <span class="relative z-10">Download</span>
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          id="mobile-menu-toggle"
          phx-hook="MobileMenu"
          class="md:hidden text-white hover:text-lime-400 transition-colors"
        >
          <svg class="w-7 h-7 menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg class="w-7 h-7 close-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="mobile-menu-hidden md:hidden absolute top-full left-0 right-0 bg-dark-800 border-b border-neutral-800 p-6 flex-col gap-4 shadow-2xl">
        <.mobile_nav_link href="#features">Features</.mobile_nav_link>
        <.mobile_nav_link href="#analytics">Analytics</.mobile_nav_link>
        <.mobile_nav_link href="#ecosystem">Ecosystem</.mobile_nav_link>
        <.mobile_nav_link href="https://github.com/pr0m3theuz/workout-app">GitHub</.mobile_nav_link>
        <a
          href="#download"
          class="group relative mt-4 w-full bg-lime-400 text-black font-tech font-bold py-3 text-center uppercase tracking-widest overflow-hidden transition-all clip-path-download-mobile"
        >
          <div class="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0 ease-out"></div>
          <span class="relative z-10">Download</span>
        </a>
      </div>
    </nav>
    """
  end

  attr(:href, :string, required: true)
  slot(:inner_block, required: true)

  defp nav_link(assigns) do
    ~H"""
    <a
      href={@href}
      class="text-sm font-mono text-neutral-400 hover:text-lime-400 transition-colors uppercase tracking-widest relative group"
    >
      <%= render_slot(@inner_block) %>
      <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-lime-400 transition-all group-hover:w-full"></span>
    </a>
    """
  end

  attr(:href, :string, required: true)
  slot(:inner_block, required: true)

  defp mobile_nav_link(assigns) do
    ~H"""
    <a
      href={@href}
      class="text-lg font-tech font-medium text-white hover:text-lime-400 border-l-2 border-transparent hover:border-lime-400 pl-4 transition-all"
    >
      <%= render_slot(@inner_block) %>
    </a>
    """
  end

  def hero(assigns) do
    ~H"""
    <section class="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      <!-- Background Abstract Grid -->
      <div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div class="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <!-- Decorative Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <!-- Text Content -->
          <div class="lg:col-span-7">
            <div class="fade-in-up">
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full mb-8 backdrop-blur-sm">
                <span class="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
                <span class="text-xs font-mono text-lime-400 uppercase tracking-widest">v1.0 Stable Release</span>
              </div>

              <h1 class="font-display text-7xl md:text-9xl leading-[0.85] text-white uppercase mb-8">
                Get <span class="text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-lime-600">Yoked.</span><br />
                Own Your <br />
                <span class="relative">
                  Progress.
                  <svg class="absolute -bottom-0.5 z-50 left-0 w-full h-20 text-lime-400" viewBox="0 0 800 200" preserveAspectRatio="none">
                    <path d="M 10 110 C 800 0 110 200 790 90" stroke="currentColor" stroke-width="20" stroke-linecap="round" fill="none" />
                  </svg>
                </span>
              </h1>

              <p class="text-xl text-neutral-400 font-light max-w-xl leading-relaxed mb-8 border-l-2 border-lime-400 pl-6">
                A privacy-focused, open source workout logging ecosystem.
                Zero subscriptions. Zero data mining. 100% gains.
              </p>

              <ul class="flex flex-col gap-3 mb-10 ml-1">
                <%= for item <- ["LOCAL-FIRST STORAGE", "ZERO SUBSCRIPTIONS", "OPEN SOURCE GPL v3"] do %>
                  <li class="flex items-center gap-3">
                    <span class="text-lime-400 flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 3l14 9-14 9V3z" />
                      </svg>
                    </span>
                    <span class="font-mono text-white font-bold tracking-widest uppercase text-sm md:text-base">
                      <%= item %>
                    </span>
                  </li>
                <% end %>
              </ul>

              <div class="flex flex-wrap gap-4">
                <a
                  href="#download"
                  class="group relative px-10 py-4 bg-lime-400 text-black font-tech font-semibold text-lg uppercase tracking-wide overflow-hidden transition-all clip-path-download"
                >
                  <div class="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0 ease-out"></div>
                  <span class="relative z-10 flex items-center gap-2">
                    Download APK
                    <.icon name="hero-arrow-down-tray" class="w-5 h-5" />
                  </span>
                </a>

                <a
                  href="https://github.com/pr0m3theuz/workout-app"
                  target="_blank"
                  rel="noreferrer"
                  class="group px-10 py-4 bg-transparent text-white border-2 border-white font-tech font-semibold text-lg uppercase tracking-wide transition-all hover:bg-white hover:text-black clip-path-github flex items-center gap-2 justify-center"
                >
                  <span>GitHub</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Visual Content - Phone Carousel -->
          <div class="lg:col-span-5 relative h-[600px] flex items-center justify-center">
            <.phone_carousel />
          </div>
        </div>
      </div>
    </section>
    """
  end

  attr(:direction, :string, default: "left")

  attr(:text, :string,
    default:
      "TRACK WHAT MATTERS /// OWN YOUR DATA /// SMART SET PROGRAMMING /// OFFLINE CAPABLE /// "
  )

  def marquee(assigns) do
    ~H"""
    <div class="py-8 bg-dark-800 border-y border-neutral-800 overflow-hidden">
      <div class={"flex whitespace-nowrap animate-marquee#{if @direction == "right", do: "-reverse", else: ""}"}>
        <span class="text-4xl md:text-6xl font-display uppercase text-neutral-800 px-4">
          <%= @text %> <span class="text-lime-400"><%= @text %></span> <%= @text %>
        </span>
        <span class="text-4xl md:text-6xl font-display uppercase text-neutral-800 px-4">
          <%= @text %> <span class="text-lime-400"><%= @text %></span> <%= @text %>
        </span>
      </div>
    </div>
    """
  end

  def features(assigns) do
    assigns =
      assign(assigns, :features, [
        %{
          icon: "dumbbell",
          title: "Smart Set Programming",
          desc:
            "RIR/RPE-based loading with automatic warm-up calculations, working set templates, and percentage-based progression. Train smart, not just hard."
        },
        %{
          icon: "chart-bar",
          title: "Comprehensive Analytics",
          desc:
            "Track PRs, visualize progress, monitor muscle engagement with interactive charts. Automatic 1RM estimation and volume tracking across all rep ranges."
        },
        %{
          icon: "calendar",
          title: "Structured Programs",
          desc:
            "Follow periodized training programs with mesocycle tracking. Import custom programs with the desktop editor and PKL converter."
        },
        %{
          icon: "target",
          title: "Exercise Database",
          desc:
            "Complete muscle mapping, equipment specifications, and YouTube integration for 1,100+ exercises. Add your own custom movements."
        },
        %{
          icon: "shield-check",
          title: "Privacy-First",
          desc:
            "Your data stays local with optional sync on your terms. No tracking, no analytics, no selling your information. Your workout history belongs to you."
        },
        %{
          icon: "code-bracket",
          title: "Open Source",
          desc:
            "Community-driven development under GPL v3. Contribute features, report bugs, or fork the project. Full transparency, zero lock-in."
        }
      ])

    ~H"""
    <section id="features" class="py-32 bg-dark-900 relative">
      <div class="container mx-auto px-6">
        <div class="mb-20">
          <span class="font-mono text-lime-400 text-sm tracking-widest uppercase mb-4 block">/// CAPABILITIES</span>
          <h2 class="font-display text-5xl md:text-7xl text-white uppercase">
            Built for <span class="text-neutral-700">Serious</span> Training
          </h2>
          <p class="mt-6 text-xl text-neutral-400 font-light max-w-2xl">
            Professional-grade features that respect your privacy and enhance your performance.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800">
          <%= for {feature, idx} <- Enum.with_index(@features) do %>
            <.feature_card feature={feature} index={idx} />
          <% end %>
        </div>
      </div>
    </section>
    """
  end

  attr(:feature, :map, required: true)
  attr(:index, :integer, required: true)

  defp feature_card(assigns) do
    ~H"""
    <div class="group relative bg-dark-900 p-10 hover:bg-neutral-900 transition-colors duration-500 overflow-hidden stagger-fade">
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>

      <div class="text-lime-400 mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
        <.icon name={"hero-#{@feature.icon}"} class="w-8 h-8" />
      </div>

      <h3 class="font-tech font-bold text-2xl text-white mb-4 uppercase tracking-wide">
        <%= @feature.title %>
      </h3>

      <p class="font-mono text-neutral-400 text-sm leading-relaxed">
        <%= @feature.desc %>
      </p>

      <div class="absolute bottom-4 right-4 text-neutral-800 font-display text-6xl opacity-20 select-none group-hover:opacity-40 transition-opacity">
        0<%= @index + 1 %>
      </div>
    </div>
    """
  end

  def power_features(assigns) do
    assigns =
      assign(assigns, :feature_cards, [
        %{
          title: "Muscle Engagement Heatmap",
          desc:
            "Visualize which muscles you've trained with an interactive anatomical breakdown showing target, synergist, and stabilizer engagement."
        },
        %{
          title: "Workout Frequency Analytics",
          desc:
            "Track training consistency with daily, weekly, and monthly frequency charts. Monitor volume trends over time."
        },
        %{
          title: "RIR/RPE Programming",
          desc:
            "Intelligent set editors calculate loads based on 1RM, target reps, and RIR. Generate progressive warm-up schemes automatically."
        },
        %{
          title: "Structured Programs",
          desc:
            "Follow periodized training with mesocycle and microcycle organization. Clear progression through training blocks."
        },
        %{
          title: "Active Workout Logging",
          desc:
            "Track every set with weight, reps, and RIR. Reference previous performance to drive progressive overload."
        },
        %{
          title: "Complete Exercise Records",
          desc:
            "View estimated 1RM, max volume, and best performance across all rep ranges. Chart your strength progression over time."
        }
      ])

    ~H"""
    <section class="py-24 bg-neutral-900 border-t border-neutral-800">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <span class="font-mono text-lime-400 text-sm tracking-widest uppercase mb-4 block">/// SEE IT IN ACTION</span>
          <h2 class="font-display text-4xl md:text-6xl text-white uppercase mb-4">
            Power Features, Beautiful UI
          </h2>
          <p class="font-mono text-neutral-400">
            Every screen designed for efficiency and insight.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <%= for {card, _idx} <- Enum.with_index(@feature_cards) do %>
            <div class="bg-dark-800 p-8 border border-neutral-800 hover:border-lime-400/30 transition-colors group stagger-fade">
              <div class="w-8 h-1 bg-lime-400 mb-6 group-hover:w-16 transition-all duration-300"></div>
              <h4 class="font-tech font-bold text-xl text-white uppercase mb-4 tracking-wide group-hover:text-lime-400 transition-colors">
                <%= card.title %>
              </h4>
              <p class="font-mono text-sm text-neutral-400 leading-relaxed">
                <%= card.desc %>
              </p>
            </div>
          <% end %>
        </div>
      </div>
    </section>
    """
  end

  def analytics_showcase(assigns) do
    ~H"""
    <section id="analytics" class="py-32 bg-neutral-950 overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div class="order-2 lg:order-1 relative">
             <!-- Muscle Engagement Visualization -->
             <div class="relative aspect-[4/3] bg-dark-900 rounded-lg border border-neutral-800 p-8 flex items-center justify-center group">
                <div class="absolute inset-0 bg-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <!-- Placeholder for muscle map -->
                <div class="flex gap-8 w-full h-full max-w-lg items-center justify-center">
                  <div class="text-center text-neutral-600 font-mono text-sm">
                    <.icon name="hero-chart-bar" class="w-32 h-32 mx-auto mb-4 text-lime-400/20" />
                    <p>Muscle Engagement Heatmap</p>
                  </div>
                </div>

                <div class="absolute bottom-4 left-4 font-mono text-xs text-neutral-500">
                  <span class="inline-block w-2 h-2 bg-lime-400 mr-2 rounded-full"></span>
                  Hypertrophy Focus
                </div>
             </div>

             <!-- Floating Stats Card -->
             <div class="absolute -bottom-10 -right-10 bg-dark-800 border border-neutral-700 p-6 shadow-2xl w-64 hidden md:block">
                <h4 class="font-tech text-white uppercase text-sm mb-4">Volume Load</h4>
                <div class="h-24 flex items-end gap-1">
                  <%= for {height, active} <- [{60, false}, {45, false}, {75, false}, {30, false}, {90, true}, {65, false}, {15, false}] do %>
                    <div class={"flex-1 rounded-t transition-all #{if active, do: "bg-lime-400", else: "bg-neutral-700"}"} style={"height: #{height}%"}></div>
                  <% end %>
                </div>
             </div>
          </div>

          <div class="order-1 lg:order-2">
            <span class="font-mono text-lime-400 text-sm tracking-widest uppercase mb-4 block">/// Visual Feedback</span>
            <h2 class="font-display text-5xl md:text-6xl text-white uppercase mb-8">
              Data You Can <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-teal-400">Actually Use.</span>
            </h2>
            <p class="font-mono text-neutral-400 leading-relaxed mb-8">
              Stop guessing. YKD provides detailed heatmaps of muscle engagement based on your actual set volume.
              Track tonnage, reps, and RIR trends over mesocycles.
            </p>

            <ul class="space-y-4 font-tech text-lg text-white">
              <%= for {num, text} <- [{"01", "Muscle Engagement Heatmaps"}, {"02", "1RM & Volume Progression Charts"}, {"03", "Mesocycle & Microcycle Analysis"}] do %>
                <li class="flex items-center gap-3">
                  <span class="text-lime-400"><%= num %></span> <%= text %>
                </li>
              <% end %>
            </ul>
          </div>

        </div>
      </div>
    </section>
    """
  end

  def privacy(assigns) do
    assigns =
      assign(assigns, :privacy_items, [
        "Local-first data storage",
        "Optional self-hosted sync",
        "No tracking or analytics",
        "Zero data monetization",
        "Full import/export control",
        "Open source transparency",
        "No signup required. No credit card. No BS."
      ])

    ~H"""
    <section id="privacy" class="py-32 bg-dark-900 relative overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <!-- Visual Checklist -->
          <div class="relative">
            <div class="absolute inset-0 bg-lime-400/5 blur-3xl rounded-full"></div>
            <div class="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-8 md:p-12 rounded-2xl">
              <ul class="space-y-6">
                <%= for {item, _idx} <- Enum.with_index(@privacy_items) do %>
                  <li class="flex items-center gap-4 stagger-fade">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 border border-lime-400/20">
                      <.icon name="hero-check" class="w-4 h-4" />
                    </div>
                    <span class="font-mono text-lg text-neutral-200"><%= item %></span>
                  </li>
                <% end %>
              </ul>
            </div>
          </div>

          <!-- Text Content -->
          <div>
            <span class="font-mono text-lime-400 text-sm tracking-widest uppercase mb-4 block">/// PRIVACY FIRST</span>
            <h2 class="font-display text-5xl md:text-7xl text-white uppercase mb-8 leading-[0.9]">
              Your Data.<br />
              Your Control.<br />
              <span class="text-lime-400">Always.</span>
            </h2>

            <div class="space-y-6 font-mono text-neutral-400 leading-relaxed">
              <p>
                YKD is built on a <span class="text-white border-b border-lime-400/50">local-first architecture</span> where all your workout data lives on your device. No cloud dependency. No forced uploads. No corporate servers mining your training history.
              </p>
              <p>
                Want multi-device sync? <span class="text-white border-b border-lime-400/50">Self-host your own server</span> with our Docker setup. Want to keep it completely offline? That works too. Your choice. Your data.
              </p>
              <p>
                Every line of code is open source under GPL v3. No hidden telemetry. No data collection. No analytics tracking your every rep. Just a tool that respects your privacy while helping you get stronger.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    """
  end

  def ecosystem(assigns) do
    assigns =
      assign(assigns, :projects, [
        %{
          icon: "device-phone-mobile",
          title: "Mobile App",
          desc:
            "Android application with Jetpack Compose UI, Couchbase Lite storage, and real-time workout tracking. Execute programs, log sets, view analytics.",
          tags: ["Kotlin", "Compose", "Couchbase Lite", "Material 3"],
          link: "https://github.com/pr0m3theuz/workout-app"
        },
        %{
          icon: "computer-desktop",
          title: "Program Importer",
          desc:
            "Desktop application for importing PKL files, validating exercises, and managing programs with hierarchical tree view. Built with Compose Multiplatform.",
          tags: ["Kotlin MP", "Compose Desktop", "Couchbase SDK"],
          link: "https://github.com/pr0m3theuz/ykd_import_programs_kmp"
        },
        %{
          icon: "cloud",
          title: "Sync Server",
          desc:
            "Docker-based backend with Couchbase Server and Sync Gateway. Multi-device synchronization, data backup, and local-first architecture support.",
          tags: ["Docker", "Couchbase", "Sync Gateway"],
          link: "https://github.com/pr0m3theuz/ykd_workout_app_server"
        },
        %{
          icon: "arrow-path",
          title: "PKL Converter",
          desc:
            "Python script to convert CSV workout templates to PKL format. Maps 1,100+ exercise variations and structures programs hierarchically.",
          tags: ["Python", "PKL", "CSV Parser"],
          link: "https://github.com/pr0m3theuz/ykd_workout_program_pkl_generator"
        }
      ])

    ~H"""
    <section id="ecosystem" class="py-32 bg-neutral-950">
      <div class="container mx-auto px-6">
        <div class="mb-16">
          <span class="font-mono text-lime-400 text-sm tracking-widest uppercase mb-4 block">/// COMPLETE ECOSYSTEM</span>
          <h2 class="font-display text-5xl md:text-7xl text-white uppercase mb-6">
            Four Components,<br />One System
          </h2>
          <p class="font-mono text-neutral-400 text-lg max-w-2xl">
             YKD is a complete ecosystem for creating, managing, and executing workout programs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <%= for project <- @projects do %>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              class="group relative flex flex-col justify-between bg-dark-900 border border-neutral-800 p-8 hover:border-lime-400/50 transition-colors rounded-xl overflow-hidden"
            >
              <div class="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <.icon name="hero-arrow-up-right" class="w-5 h-5 text-lime-400" />
              </div>

              <div>
                <div class="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
                  <.icon name={"hero-#{project.icon}"} class="w-8 h-8" />
                </div>

                <h3 class="font-display text-2xl text-white uppercase mb-4">
                  <%= project.title %>
                </h3>

                <p class="font-mono text-sm text-neutral-500 leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors">
                  <%= project.desc %>
                </p>
              </div>

              <div class="flex flex-wrap gap-2 mt-auto">
                <%= for tag <- project.tags do %>
                  <span class="px-2 py-1 bg-neutral-800 text-[10px] font-mono text-neutral-400 uppercase rounded group-hover:text-lime-400 group-hover:bg-neutral-800/80 transition-colors">
                    <%= tag %>
                  </span>
                <% end %>
              </div>
            </a>
          <% end %>
        </div>
      </div>
    </section>
    """
  end

  def final_cta(assigns) do
    ~H"""
    <section class="py-32 bg-lime-400 relative overflow-hidden">
       <!-- Background pattern -->
       <div class="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" stroke-width="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
       </div>

       <div class="container mx-auto px-6 text-center relative z-10">
         <h2 class="font-display text-6xl md:text-8xl text-black uppercase mb-8 leading-[0.85]">
          Ready to Take Control?
         </h2>
         <p class="font-mono text-black/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
           Download YKD and take control of your training.<br />Free, open source, privacy-focused.
         </p>

         <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/pr0m3theuz/workout-app/releases"
              class="group relative px-10 py-4 bg-black text-white font-tech font-bold text-lg uppercase tracking-wide overflow-hidden transition-all clip-path-download flex items-center justify-center min-w-[240px]"
            >
              <div class="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0 ease-out"></div>
              <span class="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors">
                <.icon name="hero-arrow-down-tray" class="w-5 h-5" />
                Download APK
              </span>
            </a>
            <a
              href="https://github.com/pr0m3theuz/workout-app"
              class="group px-10 py-4 bg-transparent text-black border-2 border-black font-tech font-bold text-lg uppercase tracking-wide transition-all hover:bg-black hover:text-white clip-path-github flex items-center gap-2 min-w-[240px] justify-center"
            >
              <.icon name="hero-arrow-top-right-on-square" class="w-5 h-5" />
              Documentation
            </a>
         </div>
       </div>
    </section>
    """
  end

  def footer(assigns) do
    ~H"""
    <footer class="bg-dark-900 border-t border-neutral-800 pt-20 pb-10">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div class="col-span-1 md:col-span-1">
            <div class="flex items-center gap-2 mb-6">
              <svg class="opacity-80 hover:opacity-100 transition-opacity"  width="25%" height="25%" viewBox="0 0 3840 1540">
                <path fill="white" id="ykd" d="M1596.131,100.266l-702.332,702.272l-175.787,483.228l-439.61,253.842c81.002,-222.552 164.129,-454.987 264.657,-727.14l-126.798,-571.95l-416.26,-240.508l715.919,0.015l105.63,476.552l476.525,-476.552l334.551,-0.018l345.87,-0.006l-467.99,1285.791c-116.015,0.25 -345.87,0 -345.896,-0.026l431.521,-1185.5Zm834.719,-100.256l836.252,-0.01c328.207,0 479.89,138.002 538.334,298.463c122.409,336.082 -110.435,687.355 -230.272,792.784c-119.837,105.429 -347.18,194.559 -649.658,194.544l-510.719,-0.026l338.388,-929.648l307.555,0l-231.207,635.237c200.193,2.033 449.646,8.103 594.995,-178.887c90.287,-116.153 186.63,-316.793 72.616,-444.82c-75.168,-84.406 -299.767,-69.185 -395.435,-69.185l-595.967,0l-406.863,341.398l302.896,645.93l-317.625,0l-210.983,-456.535l-193.194,162.129l189.298,-520.157l561.589,-471.218Z"/>
              </svg>
            </div>
            <p class="text-neutral-500 font-mono text-sm leading-relaxed mb-6">
              Get yoked. Own your data. <br/>
              A privacy-focused, open source ecosystem for serious strength training.
            </p>
            <div class="inline-block px-3 py-1 bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-400">
              GPL v3.0 LICENSE
            </div>
          </div>

          <div>
            <h4 class="font-tech font-bold text-lg text-white mb-6 uppercase tracking-wider">Product</h4>
            <ul class="space-y-3 font-mono text-sm text-neutral-400">
              <%= for {text, href} <- [{"Mobile App", "https://github.com/pr0m3theuz/workout-app"}, {"Sync Server", "https://github.com/pr0m3theuz/ykd_workout_app_server"}, {"Import Programs", "https://github.com/pr0m3theuz/ykd_import_programs_kmp"}, {"PKL Converter", "https://github.com/pr0m3theuz/ykd_workout_program_pkl_generator"}, {"Releases", "https://github.com/pr0m3theuz/workout-app/releases"}] do %>
                <li><a href={href} class="hover:text-lime-400 transition-colors"><%= text %></a></li>
              <% end %>
            </ul>
          </div>

          <div>
            <h4 class="font-tech font-bold text-lg text-white mb-6 uppercase tracking-wider">Resources</h4>
            <ul class="space-y-3 font-mono text-sm text-neutral-400">
              <%= for {text, href} <- [{"Documentation", "https://github.com/pr0m3theuz/workout-app"}, {"Contributing", "https://github.com/pr0m3theuz/workout-app?tab=readme-ov-file#-contributing"}, {"Issues", "https://github.com/pr0m3theuz/workout-app/issues"}, {"Discussions", "https://github.com/pr0m3theuz/workout-app/discussions"}, {"License", "https://github.com/pr0m3theuz/workout-app/blob/ditto-sync/LICENSE"}] do %>
                <li><a href={href} class="hover:text-lime-400 transition-colors"><%= text %></a></li>
              <% end %>
            </ul>
          </div>

          <div>
            <h4 class="font-tech font-bold text-lg text-white mb-6 uppercase tracking-wider">Community</h4>
            <div class="flex gap-4 mb-6">
              <%= for icon <- ["hero-code-bracket", "hero-chat-bubble-left-right", "hero-musical-note"] do %>
                <.social_icon icon={icon} />
              <% end %>
            </div>
            <p class="text-xs text-neutral-600 font-mono flex items-center gap-1">
              Built with <.icon name="hero-heart" class="w-3 h-3 text-lime-400" /> by pr0m3theuz
            </p>
          </div>
        </div>

        <div class="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-neutral-600 text-xs font-mono uppercase">© 2026 YKD Workout Ecosystem. All rights reserved.</p>
          <p class="text-neutral-600 text-xs font-mono">
            Get yoked. Stay consistent. Own your progress.
          </p>
        </div>
      </div>
    </footer>
    """
  end

  attr(:icon, :string, required: true)

  defp social_icon(assigns) do
    ~H"""
    <a href="#" class="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-lime-400 hover:border-lime-400 transition-all duration-300">
      <.icon name={@icon} class="w-5 h-5" />
    </a>
    """
  end

  defp phone_carousel(assigns) do
    assigns =
      assign(assigns, :screenshots, [
        %{
          src: "/images/screenshot1.png",
          callouts: ["📊 139 WORKOUTS", "💪 670+ TONS LIFTED", "🎯 MUSCLE HEATMAP"]
        },
        %{
          src: "/images/screenshot2.png",
          callouts: ["📈 TRACK CONSISTENCY", "📊 VOLUME TRENDS", "⚡ TRAINING FREQUENCY"]
        },
        %{
          src: "/images/screenshot3.png",
          callouts: ["🎯 MUSCLE ENGAGEMENT", "💪 21.5 SETS TRAPS", "📊 FULL BREAKDOWN"]
        },
        %{
          src: "/images/screenshot4.png",
          callouts: ["📅 12 PROGRAMS", "🏋️ STRUCTURED TRAINING", "▶️ QUICK START"]
        },
        %{
          src: "/images/screenshot5.png",
          callouts: ["⏱️ LIVE WORKOUT", "💪 SET TRACKING", "📋 PLATE CALCULATOR"]
        }
      ])

    ~H"""
    <div
      id="phone-carousel"
      phx-hook="PhoneCarousel"
      class="relative w-full h-full flex items-center justify-center"
      data-screenshots={Jason.encode!(@screenshots)}
    >
      <!-- Animated Rings Background -->
      <div class="absolute w-[500px] h-[500px] rounded-full border border-neutral-800 border-dashed opacity-50 z-0 animate-spin-slow"></div>
      <div class="absolute w-[400px] h-[400px] rounded-full border border-neutral-700 border-dashed opacity-50 z-0 animate-spin-reverse"></div>

      <!-- Phone Mockup -->
      <div class="relative w-[300px] h-[600px] bg-dark-900 rounded-[3rem] border-8 border-neutral-800 shadow-2xl overflow-hidden z-20">
        <!-- Notch -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-xl z-30"></div>

        <!-- Carousel Container -->
        <div class="relative w-full h-full bg-neutral-900">
          <img
            id="carousel-image"
            src="/images/screenshot1.png"
            alt="App Screenshot"
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />

          <!-- Overlay Gradient -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none"></div>
        </div>

        <!-- Navigation Dots -->
        <div id="carousel-dots" class="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-30">
          <%= for i <- 0..4 do %>
            <button
              class={"carousel-dot w-2 h-2 rounded-full transition-all duration-300 #{if i == 0, do: "bg-lime-400 w-6", else: "bg-white/30 hover:bg-white/50"}"}
              data-index={i}
            />
          <% end %>
        </div>
      </div>

      <!-- Feature Callouts (Floating) - rendered by JS hook -->
      <div id="carousel-callouts"></div>
    </div>
    """
  end
end
