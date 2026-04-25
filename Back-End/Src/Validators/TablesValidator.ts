import { check } from "express-validator";
import { ValidationMiddleWare } from "../MiddleWares/ValidatorMiddleWare";

export const TableValidtor = [
  check("number").notEmpty().withMessage("number table is required!"),
  check("qrData").notEmpty().withMessage("QRdata is require!"),
  ValidationMiddleWare,
];
