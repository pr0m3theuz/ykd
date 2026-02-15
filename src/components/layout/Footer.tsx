import { memo } from "react";
import { Github, Twitter, Disc, Heart } from "lucide-react";

const Footer = memo(() => {
  return (
    <footer className="bg-dark-900 border-t border-neutral-800 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <svg
                className="opacity-80 hover:opacity-100 transition-opacity"
                width="120"
                height="48"
                viewBox="0 0 3840 1540"
                aria-label="YKD Logo"
              >
                <path
                  fill="white"
                  d="M1596.131,100.266l-702.332,702.272l-175.787,483.228l-439.61,253.842c81.002,-222.552 164.129,-454.987 264.657,-727.14l-126.798,-571.95l-416.26,-240.508l715.919,0.015l105.63,476.552l476.525,-476.552l334.551,-0.018l345.87,-0.006l-467.99,1285.791c-116.015,0.25 -345.87,0 -345.896,-0.026l431.521,-1185.5Zm834.719,-100.256l836.252,-0.01c328.207,0 479.89,138.002 538.334,298.463c122.409,336.082 -110.435,687.355 -230.272,792.784c-119.837,105.429 -347.18,194.559 -649.658,194.544l-510.719,-0.026l338.388,-929.648l307.555,0l-231.207,635.237c200.193,2.033 449.646,8.103 594.995,-178.887c90.287,-116.153 186.63,-316.793 72.616,-444.82c-75.168,-84.406 -299.767,-69.185 -395.435,-69.185l-595.967,0l-406.863,341.398l302.896,645.93l-317.625,0l-210.983,-456.535l-193.194,162.129l189.298,-520.157l561.589,-471.218Z"
                />
              </svg>
            </div>
            <p className="text-neutral-500 font-mono text-sm leading-relaxed mb-6">
              Get yoked. Own your data. <br />A privacy-focused, open source
              ecosystem for serious strength training.
            </p>
            <div className="inline-block px-3 py-1 bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-400">
              GPL v3.0 LICENSE
            </div>
          </div>

          <div>
            <h4 class="font-tech font-bold text-lg text-white mb-6 uppercase tracking-wider">
              Product
            </h4>
            <ul class="space-y-3 font-mono text-sm text-neutral-400">
              <li>
                <a
                  href="https://github.com/pr0m3theuz/workout-app"
                  class="hover:text-lime-400 transition-colors"
                >
                  Mobile App
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pr0m3theuz/ykd_workout_app_server"
                  class="hover:text-lime-400 transition-colors"
                >
                  Sync Server
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pr0m3theuz/ykd_import_programs_kmp"
                  class="hover:text-lime-400 transition-colors"
                >
                  Import Programs
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pr0m3theuz/ykd_workout_program_pkl_generator"
                  class="hover:text-lime-400 transition-colors"
                >
                  PKL Converter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pr0m3theuz/workout-app/releases"
                  class="hover:text-lime-400 transition-colors"
                >
                  Releases
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-tech font-bold text-lg text-white mb-6 uppercase tracking-wider">
              Resources
            </h4>
            <ul class="space-y-3 font-mono text-sm text-neutral-400">
              <li>
                <a
                  href="https://github.com/pr0m3theuz/workout-app"
                  class="hover:text-lime-400 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pr0m3theuz/workout-app?tab=readme-ov-file#-contributing"
                  class="hover:text-lime-400 transition-colors"
                >
                  Contributing
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pr0m3theuz/workout-app/issues"
                  class="hover:text-lime-400 transition-colors"
                >
                  Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pr0m3theuz/workout-app/discussions"
                  class="hover:text-lime-400 transition-colors"
                >
                  Discussions
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pr0m3theuz/workout-app/blob/ditto-sync/LICENSE"
                  class="hover:text-lime-400 transition-colors"
                >
                  License
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-tech font-bold text-lg text-white mb-6 uppercase tracking-wider">
              Community
            </h4>
            <div class="flex gap-4 mb-6">
              <a
                href="https://github.com/pr0m3theuz/workout-app"
                class="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-lime-400 hover:border-lime-400 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a class="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-lime-400 hover:border-lime-400 transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a class="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-lime-400 hover:border-lime-400 transition-all duration-300">
                <Disc size={20} />
              </a>
            </div>
            <p class="text-xs text-neutral-600 font-mono flex items-center">
              Built with <Heart size={10} class="inline text-lime-400 mx-1" />{" "}
              by pr0m3theuz
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs font-mono uppercase">
            © 2026 YKD Workout Ecosystem. All rights reserved.
          </p>
          <p className="text-neutral-600 text-xs font-mono">
            Get yoked. Stay consistent. Own your progress.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
