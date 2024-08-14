import {
  useLaunchParams,
  useMiniApp,
  useThemeParams,
  useViewport,
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
} from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { ReactNode, useEffect } from 'react';

export const MiniAppViewProvider = ({ children }: { children: ReactNode }) => {
  const launchParams = useLaunchParams();
  const miniApp = useMiniApp();
  const themeParams = useThemeParams();
  const viewport = useViewport();

  useEffect(
    () => bindMiniAppCSSVars(miniApp, themeParams),
    [miniApp, themeParams]
  );

  useEffect(() => bindThemeParamsCSSVars(themeParams), [themeParams]);

  useEffect(() => viewport && bindViewportCSSVars(viewport), [viewport]);

  return (
    <AppRoot
      appearance={miniApp.isDark ? 'dark' : 'light'}
      platform={
        ['macos', 'ios'].includes(launchParams.platform) ? 'ios' : 'base'
      }
    >
      {children}
    </AppRoot>
  );
};
