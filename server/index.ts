import app from './app';
import { config } from './utils';

const PORT = config.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
