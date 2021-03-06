# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.3](https://github.com/teamstarter/graphql-node-jobs/compare/v0.2.2...v0.2.3) (2020-04-19)

### [0.2.2](https://github.com/teamstarter/graphql-node-jobs/compare/v0.2.1...v0.2.2) (2020-04-02)


### Features

* **server:** Allow to provide custom mutations. ([1c54af8](https://github.com/teamstarter/graphql-node-jobs/commit/1c54af820a5362536af427f8b9e8cd043d3d8bc2))

### [0.2.1](https://github.com/teamstarter/graphql-node-jobs/compare/v0.2.0...v0.2.1) (2020-03-24)


### Features

* **worker:** List jobs now directly returns the jobs. ([52381ac](https://github.com/teamstarter/graphql-node-jobs/commit/52381ac78034d9f6f4ba71e8a32c1950bf7760fa))

## [0.2.0](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.27...v0.2.0) (2020-03-24)


### ⚠ BREAKING CHANGES

* **worker:** The worker functions now use an ApolloClient and not an uri.

### Features

* **worker:** Provide a function to create Job ([9134c65](https://github.com/teamstarter/graphql-node-jobs/commit/9134c652db646798f16cc77f95971b5183aa74fa))

### [0.1.27](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.26...v0.1.27) (2020-03-24)


### Features

* **job:** Allow to planify a job in the future. ([c665902](https://github.com/teamstarter/graphql-node-jobs/commit/c66590273c7a5c12d96718f4e51d19809d5e4933))
* **worker:** Provide a method to fetch jobs. ([b299d8e](https://github.com/teamstarter/graphql-node-jobs/commit/b299d8e82abb2bab97d32f8bd54e9db587bbf760))

### [0.1.26](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.25...v0.1.26) (2020-02-10)


### Bug Fixes

* **migration:** Make the migration work for postgres and sqlite. ([cf6ba54](https://github.com/teamstarter/graphql-node-jobs/commit/cf6ba54e50fcbeeefc6d9e78d84e24c249b3153f))

### [0.1.25](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.24...v0.1.25) (2020-02-10)


### Features

* **job:** update job type to allow querying it. ([c55f6e1](https://github.com/teamstarter/graphql-node-jobs/commit/c55f6e1844a2a6f367cd9fb6a8b4ea179fefd1e1))

### [0.1.24](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.23...v0.1.24) (2020-01-18)


### Features

* **job:** Add the processing info. ([dc6caeb](https://github.com/teamstarter/graphql-node-jobs/commit/dc6caeb4b98b4f8dcc8325c4a016fd28379ecfa2))

### [0.1.23](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.22...v0.1.23) (2020-01-06)

### [0.1.22](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.21...v0.1.22) (2020-01-06)


### Bug Fixes

* **worker:** Do not presume a stack is available. ([1f69a33](https://github.com/teamstarter/graphql-node-jobs/commit/1f69a3327e61419a643b8d767225c21a1d3c702b))

### [0.1.21](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.20...v0.1.21) (2020-01-03)


### Features

* **server:** Allow to customize the gsg call. ([f91afd9](https://github.com/teamstarter/graphql-node-jobs/commit/f91afd92ff61f03df126b7a7a35507ab120fac03))

### [0.1.20](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.19...v0.1.20) (2020-01-03)


### Bug Fixes

* **job:** Allow to store more text in input and output fields. BC commit but ok for now. ([490e9fc](https://github.com/teamstarter/graphql-node-jobs/commit/490e9fc52ad43662c6f7abdee27c03890f60ab5b))

### [0.1.19](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.18...v0.1.19) (2020-01-03)


### Features

* **checkForJobs:** Add stack trace in case of error. ([4d56710](https://github.com/teamstarter/graphql-node-jobs/commit/4d56710dc61100d4a7eb885faf7c73433f46bc9a))

### [0.1.18](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.17...v0.1.18) (2020-01-03)


### Features

* **checkForJob:** Handle the failed status automatically. ([e248c53](https://github.com/teamstarter/graphql-node-jobs/commit/e248c53b83a8e62d80958a9c39f59ae2a5d02d3d))

### [0.1.17](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.16...v0.1.17) (2020-01-02)


### Bug Fixes

* **job:** Fix start and end date. ([d83dcd7](https://github.com/teamstarter/graphql-node-jobs/commit/d83dcd7daafc6cdc9e9728781ee69f746ad601d1))

### [0.1.16](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.15...v0.1.16) (2020-01-02)


### Features

* **job:** Track the execution time. ([fa709f9](https://github.com/teamstarter/graphql-node-jobs/commit/fa709f969be9efb8af12c4adda227c416d3e4b59))

### [0.1.15](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.14...v0.1.15) (2019-12-29)


### Bug Fixes

* checkForJobs looping ([b8fd8a3](https://github.com/teamstarter/graphql-node-jobs/commit/b8fd8a3a136d693ebcd73579b4e59eeb34a9d162))

### [0.1.14](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.13...v0.1.14) (2019-12-28)


### Bug Fixes

* Fix checkForJobs compatibility with nodejs. ([00361de](https://github.com/teamstarter/graphql-node-jobs/commit/00361defc12a6b404910f2f4e8a0181884ab0340))

### [0.1.13](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.12...v0.1.13) (2019-12-28)


### Features

* Add a simple worker ([5e9d510](https://github.com/teamstarter/graphql-node-jobs/commit/5e9d510afbbe381cbe767e8a1698448b3c092107))
* The CI is setup. ([8fbc4ed](https://github.com/teamstarter/graphql-node-jobs/commit/8fbc4ed47f55dfc5f91b94080a7d069b9c3dcf84))

### [0.1.12](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.11...v0.1.12) (2019-12-27)


### Features

* Add a first test to setup the CI. ([20a62f5](https://github.com/teamstarter/graphql-node-jobs/commit/20a62f53115817499be05ac946ea49533250f9ca))

### [0.1.11](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.10...v0.1.11) (2019-12-27)


### Features

* Make the migrations use a different schema. ([ba8d078](https://github.com/teamstarter/graphql-node-jobs/commit/ba8d0788035f11f7425dec20fed95e45594028bf))

### [0.1.10](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.9...v0.1.10) (2019-12-27)


### Features

* **CLI:** Add a test server. ([9d90423](https://github.com/teamstarter/graphql-node-jobs/commit/9d90423e8721ed02a6f578cd8ae312736d82d485))

### [0.1.9](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.8...v0.1.9) (2019-12-27)


### Features

* **api:** Add basic mutations for models. ([a68e39c](https://github.com/teamstarter/graphql-node-jobs/commit/a68e39c3b6732283137bfdb0c96daec2218017e5))

### [0.1.8](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.7...v0.1.8) (2019-12-27)


### Bug Fixes

* **CLI:** Add the migrations to the build. ([a98d960](https://github.com/teamstarter/graphql-node-jobs/commit/a98d96034d663ac10ae361b7109019911a7cca5e))

### [0.1.7](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.6...v0.1.7) (2019-12-27)


### Bug Fixes

* **CLI:** Make cli invoquable without calling node and improve error management. ([c2fd37d](https://github.com/teamstarter/graphql-node-jobs/commit/c2fd37d91a763eebe7dab0c7d8fc2689662b505e))

### [0.1.6](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.5...v0.1.6) (2019-12-27)

### [0.1.5](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.4...v0.1.5) (2019-12-27)


### Bug Fixes

* **cli:** Fix bin path. ([4466aa5](https://github.com/teamstarter/graphql-node-jobs/commit/4466aa51d6d053638de031b657e18a1bdedd8ec2))

### [0.1.4](https://github.com/teamstarter/graphql-node-jobs/compare/v0.1.3...v0.1.4) (2019-12-27)


### Features

* **migration:** Add a migration cli. ([bee5d81](https://github.com/teamstarter/graphql-node-jobs/commit/bee5d8131682edadc31ed234873076377a309d4c))

### [0.1.3](https://github.com/teamstarter/node-jobs/compare/v0.1.2...v0.1.3) (2019-12-26)


### Bug Fixes

* Add missing files to the build ([d77ffbb](https://github.com/teamstarter/node-jobs/commit/d77ffbb4e472ecf3e0b1c8a368520be7215afc1d))

### [0.1.2](https://github.com/teamstarter/node-jobs/compare/v0.1.1...v0.1.2) (2019-12-26)


### Features

* Change project name as npm slot is taken. ([b789f15](https://github.com/teamstarter/node-jobs/commit/b789f156d3fcca1542ee287ce11f11efaa94399a))


### Bug Fixes

* Try to fix relative path. ([665206c](https://github.com/teamstarter/node-jobs/commit/665206c456b2926795b7b29d74cf5b3880b4cfab))

### 0.1.1 (2019-12-26)


### Features

* Start to expose standard functions to check package usability. ([9e82278](https://github.com/teamstarter/node-jobs/commit/9e8227833b1018ba47e1e6edabea0469d107d5f0))
