defmodule YkdWeb.Application do
  use Application

  @impl true
  def start(_type, _args) do
    children = [
      YkdWeb.Telemetry,
      {DNSCluster, query: Application.get_env(:ykd_web, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: YkdWeb.PubSub},
      YkdWeb.Endpoint
    ]

    opts = [strategy: :one_for_one, name: YkdWeb.Supervisor]
    Supervisor.start_link(children, opts)
  end

  @impl true
  def config_change(changed, _new, removed) do
    YkdWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
