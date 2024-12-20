# Changelog

## [2.1.1](https://github.com/DevoInc/grid-layout/compare/2.1.0...2.1.1) (2024-12-20)

### Bug Fixes

* type errors on Debugger and Placeholder ([0b416fc](https://github.com/DevoInc/grid-layout/commit/0b416fcd05fec88a30fe117267f5f6e49a2c0351))

### Vulnerabilities

* **deps-dev:** bump braces from 3.0.2 to 3.0.3 ([c275545](https://github.com/DevoInc/grid-layout/commit/c275545857619513c5323132f05c091bfd8e607a))
* **deps-dev:** bump vite from 5.2.10 to 5.4.6 ([aacb0da](https://github.com/DevoInc/grid-layout/commit/aacb0da2e0c4e86c22b3ee3dd0447170498c1acc))
* **deps-dev:** bump ws from 8.16.0 to 8.17.1 ([53388bc](https://github.com/DevoInc/grid-layout/commit/53388bc5223663e5fdcdfa80e294a48e42ca0a74))
* **deps:** bump body-parser and express ([da98862](https://github.com/DevoInc/grid-layout/commit/da98862e0adb528c753f561a705c1e1e218a9bcf))
* **deps:** bump cookie and express ([45eb171](https://github.com/DevoInc/grid-layout/commit/45eb171527c8980cad7868d1964b11b7c17c1c0f))

## [2.1.0](https://github.com/DevoInc/grid-layout/compare/2.0.1...2.1.0) (2024-05-22)


### Features

* change the way of use the viewport ([333556c](https://github.com/DevoInc/grid-layout/commit/333556c02ad7030471fbc8e3229db3105449530a))
* improved performance on movements ([988169c](https://github.com/DevoInc/grid-layout/commit/988169c63a729f7781c4b0a6ee2ab7ef4df3d7ae))


### Bug Fixes

* nextBranch value on resolveCollisions ([f2815dc](https://github.com/DevoInc/grid-layout/commit/f2815dc3fa09c66faf11a143ea43a4c6cb722515))

## [2.0.1](https://github.com/DevoInc/grid-layout/compare/2.0.0...2.0.1) (2024-04-24)


### Bug Fixes

* add round layout ([03ac90a](https://github.com/DevoInc/grid-layout/commit/03ac90abf2b719393b73e0cd94104daccd9c6afd))

## [2.0.0](https://github.com/DevoInc/grid-layout/compare/1.1.0...2.0.0) (2024-04-23)


### ⚠ BREAKING CHANGES

* extracted ResizeObserver from core

### Features

* extracted ResizeObserver from core ([4a48caf](https://github.com/DevoInc/grid-layout/commit/4a48caf16d910941a06ba1c75fc686346a335e88))

## [1.1.0](https://github.com/DevoInc/grid-layout/compare/1.0.0...1.1.0) (2024-04-23)


### Features

* added ItemWrapper className ([7ed77bb](https://github.com/DevoInc/grid-layout/commit/7ed77bb7989a0c3dba9fa10324acc5af0de92374))

## 1.0.0 (2024-04-19)


### ⚠ BREAKING CHANGES

* GridLayoutProvider in GridLayout dot notation
* extracted ItemWrapper
* extracted ResizeHelper from Placeholder
* extract the dynamic concept

### Features

* added animationTimingFunction ([ee70b54](https://github.com/DevoInc/grid-layout/commit/ee70b548de0aa0b816c0b65318a8a2b38dca5b86))
* added offsetY for the reposition formula ([6869911](https://github.com/DevoInc/grid-layout/commit/6869911074c69a426458c5d3a2cb66158f09e96f))
* added showAfterAdjustInitialSize & sep. layout modifications ([03dcf11](https://github.com/DevoInc/grid-layout/commit/03dcf116029b40f54c848ef5ba3a1b60845490d2))
* adjust the predefined autoscroll threshold ([6db4fe6](https://github.com/DevoInc/grid-layout/commit/6db4fe67e85988658214115e3aa63ef77c976539))
* extract the dynamic concept ([91b6afd](https://github.com/DevoInc/grid-layout/commit/91b6afd9463ea43960ded004963a193f85412cdc))
* extracted ItemWrapper ([66f9745](https://github.com/DevoInc/grid-layout/commit/66f9745753a9b5b2f607da5cb0d0c2aac0567a4e))
* extracted ResizeHelper from Placeholder ([645b122](https://github.com/DevoInc/grid-layout/commit/645b12249c8525f6682b2c784c261ceb62db62cb))
* GridLayoutProvider in GridLayout dot notation ([668e0f6](https://github.com/DevoInc/grid-layout/commit/668e0f6237072f88ed37d0a9112088c115d757f9))
* initial commit ([61e7255](https://github.com/DevoInc/grid-layout/commit/61e72558038ea6d9fee349cf7d65cf83afac6471))
* onChange callback merge with final ([f32da1f](https://github.com/DevoInc/grid-layout/commit/f32da1f2db72c903081a8353642864e2c9a1d985))
* prefer the non animation movement ([c7a88a7](https://github.com/DevoInc/grid-layout/commit/c7a88a787dbca86ce30d26079cd602747b94e357))
* removed debounce from layoutUpdate ([63523fd](https://github.com/DevoInc/grid-layout/commit/63523fd31a385e87a1db1bd35b71aa0d9e1b428f))
* use 0.1 as default animation ([a357d96](https://github.com/DevoInc/grid-layout/commit/a357d96094a12a6441ac888f7b090ef697328481))
* use factors instead a precached fn for scale ([6101e46](https://github.com/DevoInc/grid-layout/commit/6101e462ebd323dd8651e063126759aed3633e2a))


### Bug Fixes

* another resolveCollisions problem ([2978a4d](https://github.com/DevoInc/grid-layout/commit/2978a4d5a749a4fdb6ee6849bc2b9dc31748182c))
* resize helper not working after refactor ([a5bd4ba](https://github.com/DevoInc/grid-layout/commit/a5bd4ba0ceff25ad5b250e3e8f72ad0853b40899))
* resolveCollisions branch preference ([ace8d41](https://github.com/DevoInc/grid-layout/commit/ace8d4135deefb526cfdb1db4c9500e6c137d992))
* resolveCollisions branch preference each iter ([a010754](https://github.com/DevoInc/grid-layout/commit/a010754415afa4555aa68cc356d272ad571aa954))
* resolveCollisions branch priority each iter ([b37a88d](https://github.com/DevoInc/grid-layout/commit/b37a88d60c204d2e4f9174083558a79019974ed1))
* weird movement with items ([745a89f](https://github.com/DevoInc/grid-layout/commit/745a89f8cb2cc4452dca025babbe17d2f8eb9328))
