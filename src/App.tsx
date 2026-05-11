/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LandingPage from './components/LandingPage';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}
