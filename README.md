<p align="center">
  <a href="https://github.com/chakra-ui/chakra-ui">
    <img src="src/assets/logo-no-background.png" alt="Chakra logo" width="300" />
  </a>
</p>

<h1 align="center">Build Accessible React Apps</h1>
<br />

[![version](src/assets/version.badge.svg)](https://github.com/Comics-arts/awesome-components/pkgs/npm/awesome-components)
[![License: GPL v2+](https://img.shields.io/badge/License-GPL%20v2%2B-blue.svg)](http://www.gnu.org/licenses/gpl-2.0.html)

Awesome Components is a library of accessible, reusable, and composable React components

## Table of contents
- [📋 Documentations](#documentations)
- [🚀 Features](#features)
- [📦 Installation](#instalation)
- [💻 Usage](#usage)

## Documentations
- https://comics-arts.github.io/awesome-components/

## Features

## Instalation
1. Add `.npmrc` in the project root:
```
@comics-arts:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```
2. Install the `@comics-arts/awesome-components` package
- Using yarn
```sh
$ yarn add @comics-arts/awesome-components
```

- Using npm
```sh
$ npm i @comics-arts/awesome-components
```

## Usage
```ts
import { Button } from "@comics-arts/awesome-components";

const Example = () => {
  return (
      <Button
        size="small"
        text="Button"
        onClick={()=> console.log("Clicked")}
        primary
      />
  );
};

export default Example;
```
