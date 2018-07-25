# To Do

## General
[] Add buildkite pipeline
[] Add "deploy" step
[] Add pre-commit hook

## Request Data Export

### Must

### Should
[] Error handling for query
[] Fix colour contrast issues
[] Fix issues identified in lighthouse test
[] Test in NVD3/Voiceover

### Nice to have
[] Make dates a mandatory field
[] Tests for GraphQL
[] Set up React Cosmos
[] Add warning for mobile users that experience is poor on mobile
[] Proper loading spinner
[] Fix issue with emotion classnames being non-deterministic and changing each test run
[] Fix Warning: Failed prop type: You provided a `checked` prop to a form field without an

## Data Junction
### Must

### Should
[] Fix issue with date filters looking bad on small screens

### Done
[x] Localisation of date picker (not YYYY-mm-dd)
[x] Date validation: prevent invalid dates and end date being before start date
[x] Check bundle size
[x] Action copy changes from Michelle
[x] test in IE
[x] Get initial data from API
[x] Post data back to API after user clicks button
[x] i18n
[x] Styling
[x] add shims for Set, Object.entries etc. for ES5
[x] Write proper tests https://github.com/react-cosmos/react-cosmos#headless-testing
[x] Clean up data junction and separate concerns
[x] Add tests
[x] Discuss UX for select boxes when there's only one option present with Michelle

# Local Development
`yarn`
`npm start`

Open new tab for server
`cd fakerailsserver && npm install && npm start`

# Browser support

## IE
This codebase should work well for I11 and above. I've tested it down to IE9. It works well in IE10 and above and has major issues in IE9.

## MS Edge
Works great :D

## Chrome
Works great!

## Firefox
Works great!

## Safari
Works great!
