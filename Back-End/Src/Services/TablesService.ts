import { TablesModel } from "../Models/Tables.ts";

interface tables {
  number: number;
  qrData: string;
  id: string;
}

//@private admin
// create number table
export const CreateTable = async ({ number, qrData }: tables) => {
  const table = await TablesModel.create({ number, qrData });
  return { table };
};

//@private admin
// get all tables
export const GetAllTables = async () => {
  const AllTables = await TablesModel.find();
  return { AllTables };
};


//@private admin
// get single tables
export const GetTable = async (id: string) => {
  const table = await TablesModel.findById(id);
  return { table };
};

//@private admin
// updata table
export const UpdataTable = async ({ id, number, qrData }: tables) => {
  const table = await TablesModel.findByIdAndUpdate(
    number,
    { qrData },
    {
      new: true,
    },
  );
  return { table };
};

//@private admin
// delete table
export const DeleteTable = async (id: string) => {
  const table = await TablesModel.findByIdAndDelete(id);
  return { table };
};
