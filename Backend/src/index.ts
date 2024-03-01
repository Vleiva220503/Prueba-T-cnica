import app from "./app";
import { envs } from "./config/envs";

const port = envs.PORT;

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
