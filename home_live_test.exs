defmodule YkdWeb.HomeLiveTest do
  use YkdWeb.ConnCase

  import Phoenix.LiveViewTest

  test "disconnected and connected render", %{conn: conn} do
    {:ok, page_live, disconnected_html} = live(conn, "/")
    assert disconnected_html =~ "Get Yoked"
    assert render(page_live) =~ "Own Your Progress"
  end

  test "renders all main sections", %{conn: conn} do
    {:ok, _page_live, html} = live(conn, "/")
    
    # Check for key sections
    assert html =~ "CAPABILITIES"
    assert html =~ "PRIVACY FIRST"
    assert html =~ "COMPLETE ECOSYSTEM"
    assert html =~ "Ready to Take Control"
  end
end
