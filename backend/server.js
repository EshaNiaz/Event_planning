
// import app from "./app.js";
// const port = process.env.PORT || 5173;
// const ip = process.env.IP_ADDRESS || '0.0.0.0';



// app.listen(port, ip, () => {
//     console.log(`Server running at http://${ip}:${port}/`);
//     console.log('IP Address:', ip);

// });
// import app from "./app.js";
// const port = 5173;
// const ip = '0.0.0.0';

// app.listen(port, ip, () => {
//     console.log(`Server running at http://${ip}:${port}/`);
//     console.log('IP Address:', ip);
// });
import app from './app.js';

const PORT = 5173 ;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

