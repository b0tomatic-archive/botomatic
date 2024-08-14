import { SDKProvider, useLaunchParams } from '@telegram-apps/sdk-react';
import { ReactNode, useEffect } from 'react';

export const MiniAppSDKProvider = ({ children }: { children: ReactNode }) => {
  const debug = useLaunchParams().startParam === 'debug';

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    if (debug) {
      import('eruda').then((lib) => lib.default.init());
    }
  }, [debug]);

  return (
    <SDKProvider acceptCustomStyles debug={debug}>
      {children}
    </SDKProvider>
  );
};
