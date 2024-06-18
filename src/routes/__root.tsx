import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        {!document.startViewTransition && (
          <div className="px-4 py-2 mb-8 bg-red-200 rounded"><h1>Your browser doesn't support <a href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API">View Transition API</a></h1></div>
        )}
        <Outlet />
      </>
    )
  },
});
