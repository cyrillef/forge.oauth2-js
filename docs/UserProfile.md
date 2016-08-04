# ForgeOauth2.UserProfile

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | The backend user ID of the profile | 
**userName** | **String** | The username chosen by the user | 
**emailId** | **String** | The user’s email address | 
**firstName** | **String** | The user’s first name | 
**lastName** | **String** | The user’s last name | 
**emailVerified** | **Boolean** | true if the user’s email address has been verified false if the user’s email address has not been verified  | 
**_2FaEnabled** | **Boolean** | true if the user has enabled two-factor authentication false if the user has not enabled two-factor authentication  | 
**profileImages** | **Object** | A flat JSON object of attribute-value pairs in which the attributes specify available profile image sizes in the format sizeX&lt;pixels&gt; (where &lt;pixels&gt; is an integer that represents both height and width in pixels of square profile images) and the values are URLs for downloading the images via HTTP | 


