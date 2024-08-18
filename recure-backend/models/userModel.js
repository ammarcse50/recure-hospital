const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Define the schema
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          // Simple email validation
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

userSchema.pre("save",async function(next){

      const user = this;
      if(user.isModified('password'))
      {
        user.password = await bcrypt.hash(user.password,10)
      }
 
       next();

})

const user = new mongoose.model("User", userSchema);

module.exports = user;
