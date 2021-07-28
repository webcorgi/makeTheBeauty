import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 페이지 이동시 화면 최상단에서 시작하게 동작하기 위한 컴포넌트
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;