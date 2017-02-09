
# This package is now deprecated, please use the official [SDK](https://www.npmjs.com/package/forge-apis)

[![build status](https://api.travis-ci.org/cyrillef/models.autodesk.io.png)](https://travis-ci.org/cyrillef/models.autodesk.io)
[![Node.js](https://img.shields.io/badge/Node.js-5.11.1-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-3.9.3-blue.svg)](https://www.npmjs.com/)
![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)

*Forge API*:
[![oAuth2](https://img.shields.io/badge/oAuth2-v1-green.svg)](http://developer-autodesk.github.io/)
[![Data-Management](https://img.shields.io/badge/Data%20Management-v2-green.svg)](http://developer-autodesk.github.io/)
[![OSS](https://img.shields.io/badge/OSS-v2-green.svg)](http://developer-autodesk.github.io/)
[![Model-Derivative](https://img.shields.io/badge/Model%20Derivative-v2-green.svg)](http://developer-autodesk.github.io/)
[![Viewer](https://img.shields.io/badge/Forge%20Viewer-v2.10-green.svg)](http://developer-autodesk.github.io/)


# forge-oauth2
Asynchronous Node.js library for the Autodesk Forge oAuth2 implementation.

This SDK was generated from YAML using a modified version of the [Swagger tools](https://github.com/swagger-api/).
Modified version located [here](https://github.com/cyrillef/swagger-codegen).

Samples using this SDKs available [here](https://github.com/Autodesk-Forge).


## Installation

#### npm
```shell
npm install forge-oauth2 --save
```

#### For browser
The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.


## Getting Started
Please follow the [installation](#installation) instruction and execute the following JS code:

This libray can either use callbacks ot Promises. Do not provide a callback parameter to use Promises.

#### callback version
```javascript
var ForgeOauth2 =require ('forge-oauth2') ;

var defaultClient =ForgeOauth2.ApiClient.instance ;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code =defaultClient.authentications ['oauth2_access_code'] ;
oauth2_access_code.accessToken ="YOUR ACCESS TOKEN" ;

var api =new ForgeOauth2.InformationalApi()

var callback =function (error, data, response) {
  if ( error ) {
    console.error (error) ;
  } else {
    console.log ('API called successfully. Returned data: ' + data) ;
  }
};
api.aboutMe(callback) ;

```

#### Promise version
```javascript
var ForgeOauth2 =require ('forge-oauth2') ;

var defaultClient =ForgeOauth2.ApiClient.instance ;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code =defaultClient.authentications ['oauth2_access_code'] ;
oauth2_access_code.accessToken ="YOUR ACCESS TOKEN" ;

var api =new ForgeOauth2.InformationalApi()

api.aboutMe().then (function (data) {
  console.log ('API called successfully. Returned data: ' + data) ;
}, function (error) {
  console.error (error) ;
}) ;

```


## Documentation for API Endpoints

All URIs are relative to *https://developer.api.autodesk.com/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ForgeOauth2.InformationalApi* | [**aboutMe**](docs/InformationalApi.md#aboutMe) | **GET** /userprofile/v1/users/@me | GET users/@me
*ForgeOauth2.ThreeLeggedApi* | [**authorize**](docs/ThreeLeggedApi.md#authorize) | **GET** /authentication/v1/authorize | GET authorize
*ForgeOauth2.ThreeLeggedApi* | [**gettoken**](docs/ThreeLeggedApi.md#gettoken) | **POST** /authentication/v1/gettoken | POST gettoken
*ForgeOauth2.ThreeLeggedApi* | [**refreshtoken**](docs/ThreeLeggedApi.md#refreshtoken) | **POST** /authentication/v1/refreshtoken | POST refreshtoken
*ForgeOauth2.TwoLeggedApi* | [**authenticate**](docs/TwoLeggedApi.md#authenticate) | **POST** /authentication/v1/authenticate | POST authenticate



## Documentation for Models

 - [ForgeOauth2.Bearer](docs/Bearer.md)
 - [ForgeOauth2.OAuthError](docs/OAuthError.md)
 - [ForgeOauth2.UserProfile](docs/UserProfile.md)



## Documentation for Authorization


### oauth2_access_code

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://developer.api.autodesk.com/authentication/v1/authorize
- **Scopes**: 
  - data:read: The application will be able to read the end user’s data within the Autodesk ecosystem.
  - data:write: The application will be able to create, update, and delete data on behalf of the end user within the Autodesk ecosystem.
  - data:create: The application will be able to create data on behalf of the end user within the Autodesk ecosystem.
  - data:search: The application will be able to search the end user’s data within the Autodesk ecosystem.
  - bucket:create: The application will be able to create an OSS bucket it will own.
  - bucket:read: The application will be able to read the metadata and list contents for OSS buckets that it has access to.
  - bucket:update: The application will be able to set permissions and entitlements for OSS buckets that it has permission to modify.
  - bucket:delete: The application will be able to delete a bucket that it has permission to delete.
  - code:all: The application will be able to author and execute code on behalf of the end user (e.g., scripts processed by the Design Automation API).
  - account:read: For Product APIs, the application will be able to read the account data the end user has entitlements to.
  - account:write: For Product APIs, the application will be able to update the account data the end user has entitlements to.
  - user-profile:read: The application will be able to read the end user’s profile data.

### oauth2_application

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - data:read: The application will be able to read the end user’s data within the Autodesk ecosystem.
  - data:write: The application will be able to create, update, and delete data on behalf of the end user within the Autodesk ecosystem.
  - data:create: The application will be able to create data on behalf of the end user within the Autodesk ecosystem.
  - data:search: The application will be able to search the end user’s data within the Autodesk ecosystem.
  - bucket:create: The application will be able to create an OSS bucket it will own.
  - bucket:read: The application will be able to read the metadata and list contents for OSS buckets that it has access to.
  - bucket:update: The application will be able to set permissions and entitlements for OSS buckets that it has permission to modify.
  - bucket:delete: The application will be able to delete a bucket that it has permission to delete.
  - code:all: The application will be able to author and execute code on behalf of the end user (e.g., scripts processed by the Design Automation API).
  - account:read: For Product APIs, the application will be able to read the account data the end user has entitlements to.
  - account:write: For Product APIs, the application will be able to update the account data the end user has entitlements to.
  - user-profile:read: The application will be able to read the end user’s profile data.



## Documentation & Support
For more information, please visit [https://developer.autodesk.com/en/docs/oauth/v2/](https://developer.autodesk.com/en/docs/oauth/v2/)

For support, please use [http://stackoverflow.com/questions/tagged/autodesk-forge+oauth](http://stackoverflow.com/questions/tagged/autodesk-forge+oauth)

--------

## License

This SDK is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT). Please see the [LICENSE](LICENSE) file for full details.


