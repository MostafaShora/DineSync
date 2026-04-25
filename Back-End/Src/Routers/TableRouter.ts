import express from "express";

import {
  Gettable,
  GetTables,
  PostTable,
  PutTable,
  RemoveTable,
} from "../Controllers/Tables";
import { TableValidtor } from "../Validators/TablesValidator";

const router = express.Router();

router
  .route("/tables")
  .get(GetTables)
  .put(PutTable)
  .post(TableValidtor, PostTable);
router.route("/tables:id").delete(RemoveTable).get(Gettable);

export default router;
