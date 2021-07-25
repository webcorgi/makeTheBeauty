# 샴푸,컨디셔너 쇼핑몰 (개인 토이 프로젝트)

## skill list

- Javascript
- HTML5, CSS3
- CSS module
- Node.js
- React
- GraphQL
- Apollo Client

## install list

```
npx create-react-app
yarn add react-router-dom
yarn add apollo-boost react-apollo graphql-tag graphql --save

yarn global add nodemon
yarn add graphql-yoga
yarn global add babel-cli --ignore-engines
yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev
yarn add babel-node --dev
```

## Site map (folder structure)

```
Main
Login
Signup

Goods
./index
./details
./order
./orderend
```

## Schema

```
member {
	id,
	email,
	name,
}

product {
	kind,
	color,
	name,
	hashtag,
	volume,
	incense
}
```
