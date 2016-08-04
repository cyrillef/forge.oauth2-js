# ForgeOauth2.InformationalApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aboutMe**](InformationalApi.md#aboutMe) | **GET** /userprofile/v1/users/@me | GET users/@me


<a name="aboutMe"></a>
# **aboutMe**
> UserProfile aboutMe()

GET users/@me

GET users/@me

### Example
```javascript
var ForgeOauth2 = require('forge-oauth2');
var defaultClient = ForgeOauth2.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOauth2.InformationalApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.aboutMe(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

