const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"]
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"]
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            validate: {
                /* regular expressions (regex) create patterns that we must match
                this is what we would use if we wanted to require special characters
                and upper and lower case letters using anonymous functions to run
                the validation test method. */
                validator: (emailaddress) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(emailaddress),
                message: "Please enter a valid email"
            },
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be 8 characters or longer"]
        },
        conventions: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Convention"
            }
        ],
    }, {timestamps: true}
);

/* create a virtual field that can be compared/validation, but it does
not get added to the database when it is saved. This will create the
getter and setter methods for the confirmPassword field. */
UserSchema.virtual("confirmPassword")
    .get( () => this._confirmPassword )
    .set( value => (this._confirmPassword = value) );


/* This is where the validation/comparison actually happens the pre "hook"
allows it to run before any other validations */
UserSchema.pre("validate", function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Password must match confirm password");
    }
    next(); // Successfully compared -move to the next step in the validation process.
})


/* We must hash/encrypt the password prior to saving it in the database. We replace
the original password value with the hashed/encrypted password that we just created. */
UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next()
        });
});

// This will create a new collection in our DB called "users" and it will
// lowercase our string and make it plural "automatically" for us.
const User = mongoose.model("User", UserSchema);

module.exports = User;
