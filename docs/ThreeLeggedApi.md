# ForgeOauth2.ThreeLeggedApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorize**](ThreeLeggedApi.md#authorize) | **GET** /authentication/v1/authorize | GET authorize
[**gettoken**](ThreeLeggedApi.md#gettoken) | **POST** /authentication/v1/gettoken | POST gettoken
[**refreshtoken**](ThreeLeggedApi.md#refreshtoken) | **POST** /authentication/v1/refreshtoken | POST refreshtoken


<a name="authorize"></a>
# **authorize**
> authorize(clientId, responseType, redirectUri, opts)

GET authorize

This is the browser URL to redirect an end user to in order to acquire the user’s consent for your app to access the specified resources. Note: You do not call this URL directly in your server code. See the Get a 3-Legged Token tutorial for more information on how to use this endpoint. 

### Example
```javascript
var ForgeOauth2 = require('forge-oauth2');

var apiInstance = new ForgeOauth2.ThreeLeggedApi();

var clientId = "clientId_example"; // String | Client ID of the app

var responseType = "code"; // String | Must be code

var redirectUri = "redirectUri_example"; // String | URL-encoded callback URL that the end user will be redirected to after completing the authorization flow Note: This must match the pattern of the callback URL field of the app’s registration in the My Apps section. The pattern may include wildcards after the hostname, allowing different redirect_uri values to be specified in different parts of your app. 

var opts = { 
  'scope': "scope_example", // String | Space-separated list of required scopes Note: A URL-encoded space is* ``%20``. See the* `Scopes </en/docs/oauth/v2/overview/scopes>` *page for more information on when scopes are required. 
  'state': "state_example" // String | A URL-encoded payload containing arbitrary data that the authentication flow will pass back verbatim in a state query parameter to the callback URL 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.authorize(clientId, responseType, redirectUri, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Client ID of the app | 
 **responseType** | **String**| Must be code | [default to code]
 **redirectUri** | **String**| URL-encoded callback URL that the end user will be redirected to after completing the authorization flow Note: This must match the pattern of the callback URL field of the app’s registration in the My Apps section. The pattern may include wildcards after the hostname, allowing different redirect_uri values to be specified in different parts of your app.  | 
 **scope** | **String**| Space-separated list of required scopes Note: A URL-encoded space is* &#x60;&#x60;%20&#x60;&#x60;. See the* &#x60;Scopes &lt;/en/docs/oauth/v2/overview/scopes&gt;&#x60; *page for more information on when scopes are required.  | [optional] 
 **state** | **String**| A URL-encoded payload containing arbitrary data that the authentication flow will pass back verbatim in a state query parameter to the callback URL  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="gettoken"></a>
# **gettoken**
> Bearer gettoken(clientId, clientSecret, grantType, code, redirectUri)

POST gettoken

Exchange an authorization code extracted from a GET authorize callback for a three-legged access token. 

### Example
```javascript
var ForgeOauth2 = require('forge-oauth2');

var apiInstance = new ForgeOauth2.ThreeLeggedApi();

var clientId = "clientId_example"; // String | Client ID of the app

var clientSecret = "clientSecret_example"; // String | Client secret of the app

var grantType = "authorization_code"; // String | Must be ``authorization_code``

var code = "code_example"; // String | The autorization code captured from the code query parameter when the GET authorize redirected back to the callback URL 

var redirectUri = "redirectUri_example"; // String | URL-encoded callback URL that the end user will be redirected to after completing the authorization flow Note: This must match the pattern of the callback URL field of the app’s registration in the My Apps section. The pattern may include wildcards after the hostname, allowing different redirect_uri values to be specified in different parts of your app. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gettoken(clientId, clientSecret, grantType, code, redirectUri, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Client ID of the app | 
 **clientSecret** | **String**| Client secret of the app | 
 **grantType** | **String**| Must be &#x60;&#x60;authorization_code&#x60;&#x60; | [default to authorization_code]
 **code** | **String**| The autorization code captured from the code query parameter when the GET authorize redirected back to the callback URL  | 
 **redirectUri** | **String**| URL-encoded callback URL that the end user will be redirected to after completing the authorization flow Note: This must match the pattern of the callback URL field of the app’s registration in the My Apps section. The pattern may include wildcards after the hostname, allowing different redirect_uri values to be specified in different parts of your app.  | 

### Return type

[**Bearer**](Bearer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="refreshtoken"></a>
# **refreshtoken**
> Bearer refreshtoken(clientId, clientSecret, grantType, refreshToken, opts)

POST refreshtoken

Acquire a new access token by using the refresh token provided by the POST gettoken endpoint. See the Field Guide for more information about refresh tokens. 

### Example
```javascript
var ForgeOauth2 = require('forge-oauth2');

var apiInstance = new ForgeOauth2.ThreeLeggedApi();

var clientId = "clientId_example"; // String | Client ID of the app

var clientSecret = "clientSecret_example"; // String | Client secret of the app

var grantType = "refresh_token"; // String | Must be ``refresh_token``

var refreshToken = "refreshToken_example"; // String | The refresh token used to acquire a new access token 

var opts = { 
  'scope': "scope_example" // String | Space-separated list of required scopes If this parameter is omitted, the returned access token will have the same scopes as the original access token. If this parameter is specified, it must represent a subset of the scopes present in the original access token. Note: A URL-encoded space is %20. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.refreshtoken(clientId, clientSecret, grantType, refreshToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Client ID of the app | 
 **clientSecret** | **String**| Client secret of the app | 
 **grantType** | **String**| Must be &#x60;&#x60;refresh_token&#x60;&#x60; | [default to refresh_token]
 **refreshToken** | **String**| The refresh token used to acquire a new access token  | 
 **scope** | **String**| Space-separated list of required scopes If this parameter is omitted, the returned access token will have the same scopes as the original access token. If this parameter is specified, it must represent a subset of the scopes present in the original access token. Note: A URL-encoded space is %20.  | [optional] 

### Return type

[**Bearer**](Bearer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

