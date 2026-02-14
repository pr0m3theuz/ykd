import Config

config :logger, level: :info

config :ykd_web, YkdWeb.Endpoint, cache_static_manifest: "priv/static/cache_manifest.json"
