# MAKE THE BEAUTY (개인 토이 프로젝트)

#### 커스텀 샴푸,컨디셔너 쇼핑몰

## skill list

- Javascript
- JSX, CSS
- CSS module
- Node.js
- React
- GraphQL
- Apollo Client

## install list

```
npx create-react-app
yarn add react-router-dom

// graphQL & apollo client
graphql
@apollo/client
convert-csv-to-json

// css module class 여러개 중첩가능
yarn add classnames

// 다음 주소 API
react-daum-postcode
```

## folder structure

```
public/images/ => common, goods, main

src
./layout => 공통 컴포넌트
./layout/header
./layout/footer
./layout/wrapper

./pages  => 각각 페이지 폴더작업 ( JS + CSS 로 완전한 모듈화 )
./pages/home        // 상품 커스텀
./pages/order       // 상품 주문
./pages/orderEnd    // 주문 완료
./pages/orderList   // 내 주문 목록
./components/modify // 내 주문 목록 ( 주문수정 팝업 컴포넌트 )

./util   => 각종 유틸
./util/ScrollTop => 기능 : 라우터 이동 시 항상 스크롤 최상위에서 시작
./util/Colorcode => 기능 : 컬러코드 6자리 뽑아내기
```

### 제작 참고 자료

1. https://www.apollographql.com/docs/react/
2. https://www.yalco.kr/
