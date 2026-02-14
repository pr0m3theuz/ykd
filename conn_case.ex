defmodule YkdWeb.ConnCase do
  use ExUnit.CaseTemplate

  using do
    quote do
      import Plug.Conn
      import Phoenix.ConnTest
      import YkdWeb.ConnCase

      alias YkdWeb.Router.Helpers, as: Routes

      @endpoint YkdWeb.Endpoint
    end
  end

  setup _tags do
    {:ok, conn: Phoenix.ConnTest.build_conn()}
  end
end
