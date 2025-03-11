import mongoose, {Schema, Document} from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
    image?: string;
    role: "user" | "admin";
}

const UserSchema = new Schema<IUser>(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, select: true},
        image: {type: String},
        role: {type: String, enum: ["user", "admin"], default: "user"},
    },
    {timestamps: true}
);

export const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
