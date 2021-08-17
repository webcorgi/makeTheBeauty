## MAKE THE BEAUTY (개인 토이 프로젝트)

샴푸, 컨디셔너 쇼핑몰 - 백단 graphQL server 구성

## skill list

- graphQL
- apollo-server ( graphQL server 라이브러리 )
- convert-csv-to-json ( csv 파일 컨버팅 )
- nodemon ( 자동 재실행 )
- babel-node, babel-cli ~ (import~ 구문 사용가능)

---

## folder structure

```
/data-in-csv/*
             => DB 역할용 csv파일

/typedefs-resolvers/*
             => typeDefs (스키마 형식정의)
             => resolvers (dbworks에서 만든 Query, mutation 메서드 등록)

/database.js => 각 CSV파일 불러와 DB에 등록

/dbWorks.js  => DB CRUD, 데이터 정제 ( 실제 DB사용시엔 SQL문으로 DB 데이터 이용 )

/index.js    => typeDefs / resolvers를 Apolloserver에 등록. 최종 데이터 추출
```

## CSV

```
users.csv
products.csv
colors.csv
orders.csv
```
