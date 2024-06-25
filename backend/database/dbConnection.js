// import mongoose from "mongoose";

// export const dbConnection = () => {
//   mongoose
//     .connect("mongodb+srv://eshanaiaz03:YqOEAWlVkv9hMndr@cluster0.lungsgi.mongodb.net/STACK_EVENT_MESSAGE?retryWrites=true", { dbName: "MERN_STACK_EVENT_MESSAGE" })

//     .then(() => {
//       console.log("Connected to database!");
//     })
//     .catch((err) => {
//       console.log("Some error occured while connecting to database:", err);
//     });
// };

import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://eshanaiaz03:N13Mgm7XdGQiHMY5@cluster0.tpm61kp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
      { dbName: "EVENT_PROJECT" })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};


