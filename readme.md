# ApostropheCMS Basic Auth

Adds Basic Http Authentication to ApostropheCMS. Useful for example, if you want to password protect your
staging environment with a static username password.


## Usage

### Installation

Install this package
  - via npm: `npm install --save @schardt/basic-auth-apostrophecms`
  - via yarn: `yarn add @schardt/basic-auth-apostrophecms`


### Example

```
'@schardt/basic-auth-apostrophecms: {
    username: '<plain-text-username>',
    password: '<plain-text-password>',
    enabled: (request) => {
        // request is the current express request object.
        return true;
    }
}
```

#### Options
- `username`: Optional. The http auth username in plain text. If left empty, the module will look in the `BASIC_AUTH_USERNAME` environment variable.
- `password`: Optional. The http auth password in plain text. If left empty, the module will look in the `BASIC_AUTH_PASSWORD` environment variable.
- `enabled`: Optional. Default: `true`. A custom function which has the current `request` as a parameter. Determines if basic auth should be enabled or diables.

