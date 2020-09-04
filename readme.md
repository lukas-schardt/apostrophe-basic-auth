# ApostropheCMS Basic Auth

Adds Basic Http Authentication to ApostropheCMS. Useful for example, if you want to password protect your
staging environment with a static username password.

## Usage

### Installation

Install this package
  - via npm: `npm install --save apostrophe-basic-auth`
  - via yarn: `yarn add apostrophe-basic-auth`


### Example

```
'apostrophe-basic-auth': {
    username: '<plain-text-username>',
    password: '<plain-text-password>',
    enabled: (request) => {
        // request is the current express request object.
        return true;
    }
}
```

If you don't want to add your credentials you can use the following environment variables to
set the credentials:

`BASIC_AUTH_USERNAME`, `BASIC_AUTH_PASSWORD`

