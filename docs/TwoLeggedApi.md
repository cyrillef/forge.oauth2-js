# ForgeOauth2.TwoLeggedApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticate**](TwoLeggedApi.md#authenticate) | **POST** /authentication/v1/authenticate | POST authenticate


<a name="authenticate"></a>
# **authenticate**
> Bearer authenticate(clientId, clientSecret, grantType, opts)

POST authenticate

Get a two-legged access token by providing your app&#39;s client ID and secret. 

### Example
```javascript
var ForgeOauth2 = require('forge-oauth2');

var apiInstance = new ForgeOauth2.TwoLeggedApi();

var clientId = "clientId_example"; // String | Client ID of the app

var clientSecret = "clientSecret_example"; // String | Client secret of the app

var grantType = "client_credentials"; // String | Must be ``client_credentials``

var opts = { 
  'scope': "scope_example", // String | Space-separated list of required scopes Note: A URL-encoded space is* ``%20``. See the* `Scopes </en/docs/oauth/v2/overview/scopes>` *page for more information on when scopes are required. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authenticate(clientId, clientSecret, grantType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Client ID of the app | 
 **clientSecret** | **String**| Client secret of the app | 
 **grantType** | **String**| Must be &#x60;&#x60;client_credentials&#x60;&#x60; | [default to client_credentials]
 **scope** | **String**| Space-separated list of required scopes Note: A URL-encoded space is* &#x60;&#x60;%20&#x60;&#x60;. See the* &#x60;Scopes &lt;/en/docs/oauth/v2/overview/scopes&gt;&#x60; *page for more information on when scopes are required.  | [optional] 

### Return type

[**Bearer**](Bearer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

