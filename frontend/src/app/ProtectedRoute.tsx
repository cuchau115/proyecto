/* Route guard: without a session the user is sent back to the login screen. */
import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

import { useSession } from '../shared/SessionContext';

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { session } = useSession();
  if (!session) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}
