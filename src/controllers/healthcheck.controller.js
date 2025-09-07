/**
 * @fileoverview Controller for the application's health check endpoint.
 *
 * This file contains the logic for the health check route. The purpose of this
 * endpoint is to provide a simple way to verify that the server is live and
 * responsive. It's a standard practice for monitoring services, load balancers,
 * and deployment pipelines to ping this endpoint to confirm the application's health.
 *
 * The `healthcheck` function is wrapped in the `asyncHandler` utility to maintain
 * a consistent pattern of error handling across all controllers, even for
 * synchronous operations. Upon being called, it constructs a standardized
 * `ApiResponse` and sends it back with an HTTP status of 200, confirming
 * that the service is operational.
 */

import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
/** 
const healthcheck = (req, res, next) => {
  try {
      res.status(200).json(
        new ApiResponse(200, {message: "Server is running"})
      )
  } catch (error) {
      next(err)                    // this expresses bultin error handler 
  }
}
*/

const healthcheck = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(new ApiResponse(200, { message: "Server is still running" }));
});
export { healthcheck };
