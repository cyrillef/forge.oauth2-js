/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OAuthError', 'model/UserProfile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OAuthError'), require('../model/UserProfile'));
  } else {
    // Browser globals (root is window)
    if (!root.ForgeOauth2) {
      root.ForgeOauth2 = {};
    }
    root.ForgeOauth2.InformationalApi = factory(root.ForgeOauth2.ApiClient, root.ForgeOauth2.OAuthError, root.ForgeOauth2.UserProfile);
  }
}(this, function(ApiClient, OAuthError, UserProfile) {
  'use strict';

  /**
   * Informational service.
   * @module api/InformationalApi
   * @version 1.0.0
   */

  /**
   * Constructs a new InformationalApi. 
   * @alias module:api/InformationalApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the aboutMe operation.
     * @callback module:api/InformationalApi~aboutMeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * GET users/@me
     * GET users/@me
     * @param {module:api/InformationalApi~aboutMeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserProfile}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserProfile}
     */
    this.aboutMe = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserProfile;

      return this.apiClient.callApi(
        '/userprofile/v1/users/@me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));