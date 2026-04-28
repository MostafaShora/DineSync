import app from "./Src/app.ts";
import dotenv from "dotenv";
import { ConnectDB } from "./Src/Configs/DB.ts";


dotenv.config({ quiet: false });



const StartServer = async () => {
  try {
    await ConnectDB();

    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Fatal Error:", error);
    process.exit(1);
  }
};

StartServer();
