defmodule YkdWeb.HomeLive do
  use YkdWeb, :live_view
  import YkdWeb.Components

  @impl true
  def mount(_params, _session, socket) do
    {:ok, socket}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div class="relative min-h-screen flex flex-col">
      <.custom_cursor />
      <.navbar />
      
      <main class="flex-grow">
        <.hero />
        <.marquee direction="left" />
        <.features />
        <.power_features />
        <.analytics_showcase />
        <.marquee 
          direction="right" 
          text="OPEN SOURCE /// GPL V3 /// LOCAL FIRST /// NO SUBSCRIPTIONS /// " 
        />
        <.privacy />
        <.ecosystem />
        <.final_cta />
      </main>

      <.footer />
    </div>
    """
  end
end
