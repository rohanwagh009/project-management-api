import { Router } from "express";
import {
  forgotPasswordRequest,
  login,
  refreshAccessToken,
  registerUser,
  verifyEmail,
  logoutUser,
  getCurrentUser,
  changeCurrentPassword,
  resendEmailVerification,
  resetForgotPassword, // <-- FIX 2: Added missing controller import
} from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userRegisterValidator,
  userLoginValidator,
  userForgotPasswordValidator,
  userResetForgotPasswordValidator,
  userChangePasswordValidator, // <-- FIX 3: Added missing validator import
} from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// public routes
router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, login);
router.route("/verify-email/:verificationToken").get(verifyEmail);
router.route("/refresh-token").post(refreshAccessToken);
router
  .route("/forgot-password")
  .post(userForgotPasswordValidator(), validate, forgotPasswordRequest);
router
  .route("/reset-password/:resetToken")
  .post(userResetForgotPasswordValidator(), validate, resetForgotPassword); // This will now work

// secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").post(verifyJWT, getCurrentUser);
router.route("/change-password").post(
  verifyJWT,
  userChangePasswordValidator(), // <-- FIX 3: Using correct validator name
  validate,
  changeCurrentPassword,
);
router
  .route("/resend-email-verification")
  .post(verifyJWT, resendEmailVerification);

export default router;
