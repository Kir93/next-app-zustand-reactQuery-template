import { useCallback } from 'react';

import { useRouter } from 'next/router';

const useBack = (defaultPath = '/') => {
  const router = useRouter();

  const goBack = useCallback(() => {
    if (window.history.length <= 2) {
      router.replace(defaultPath);
    } else {
      router.back();
    }
  }, [router, defaultPath]);

  return goBack;
};

export default useBack;
