import React, { useEffect } from "react";

function NaverPayButton() {
  useEffect(() => {
    // 네이버페이 SDK 초기화
    const oPay = window.Naver.Pay.create({
      mode: "production", // development or production
      clientId: "u86j4ripEt8LRfPGzQ8", // clientId
      chainId: "TDZSUHBoVGRFS2l" // chainId
    });

    // 네이버페이 결제 버튼 클릭 이벤트 핸들러
    const handleClick = () => {
      oPay.open({
        merchantUserKey: "가맹점 사용자 식별키",
        merchantPayKey: "가맹점 주문 번호",
        productName: "상품명을 입력하세요",
        totalPayAmount: "1000",
        taxScopeAmount: "1000",
        taxExScopeAmount: "0",
        returnUrl: "사용자 결제 완료 후 결제 결과를 받을 URL"
      });
    };

    // 네이버페이 결제 버튼에 이벤트 리스너 등록
    const elNaverPayBtn = document.getElementById("naverPayBtn");
    if (elNaverPayBtn) {
      elNaverPayBtn.addEventListener("click", handleClick);
    }

    // 컴포넌트 언마운트 시 이벤트 리스너 제거 (정리 함수)
    return () => {
      if (elNaverPayBtn) {
        elNaverPayBtn.removeEventListener("click", handleClick);
      }
    };
  }, []); // useEffect 의존성 배열은 비어 있음

  return <input type="button" id="naverPayBtn" value="네이버페이 결제 버튼" />;
}

export default NaverPayButton;
