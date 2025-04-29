import app from "./app.js";
import { connectionDb, database } from "./config/db.js";

const PORT = process.env.PORT || 5050;

database.sync();

app.listen(PORT, () => {
  try {
    connectionDb();
    console.log(`Server stated on port ${port}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});
