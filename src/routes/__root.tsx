import { createRootRoute, Outlet, useRouter, useRouterState } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useEffect, useRef } from 'react';

export const Route = createRootRoute({
  component: () => {
    // const routerState = useRouterState();
    // const startedTransition = useRef<any>(undefined);
    // const resolveTransition = useRef<any>(undefined);

    // const contextRouter = useRouter({
    // });

    // console.log(contextRouter);

    // useEffect(() => {
    //   if (routerState.isLoading && !startedTransition.current) {
    //     startedTransition.current = new Promise((res) => {
    //       resolveTransition.current = res;
    //     });

    //     const trans = document.startViewTransition(async () => {
    //       console.log("PRE PROM");
    //       await startedTransition.current;
    //       console.log("POST PROM");
    //     });

    //     console.log(trans.ready.then(() => console.log("@@@ READY")));
    //     console.log(trans.finished.then(() => console.log("@@@ FINISHED")));
    //   } else {
    //     if (resolveTransition.current) {
    //       resolveTransition.current();
    //       startedTransition.current = undefined;
    //       resolveTransition.current = undefined;
    //     }
    //   }
    // }, [routerState.isLoading]);

    return (
      <>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    )
  },
})