import asyncHandler from "express-async-handler";
import {
  GetAllTables,
  GetTable,
  CreateTable,
  UpdataTable,
  DeleteTable,
} from "../Services/TablesService";
import { Request, Response } from "express";

interface Params {
  id: string;
}
// get all tables
export const GetTables = asyncHandler(async (req: Request, res: Response) => {
  const result = await GetAllTables();

  res.status(200).json({
    success: true,
    data: result,
  });
});

// get single tables
export const Gettable = asyncHandler(
  async (req: Request<Params>, res: Response) => {
    const Id = req.params.id;
    const result = await GetTable(Id);
    res.status(200).json({
      success: true,
      data: result,
    });
  },
);

// create number table
export const PostTable = asyncHandler(async (req: Request, res: Response) => {
  const result = await CreateTable(req.body);
  res.status(201).json({
    success: true,
    data: result,
  });
});

// updata table
export const PutTable = asyncHandler(async (req: Request, res: Response) => {
  const result = await UpdataTable(req.body);
  res.status(201).json({
    success: true,
    data: result,
  });
});

// delete table
export const RemoveTable = asyncHandler(
  async (req: Request<Params>, res: Response) => {
    const Id = req.params.id;
    const result = await DeleteTable(Id);
    res.status(204).json({
      success: true,
      data: result,
    });
  },
);
