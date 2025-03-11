import {connectDB} from "@/lib/mongodbConnect";
import {User} from "@/models/User";
// @ts-expect-error: bcrypt is not typed
import bcrypt from "bcrypt";

async function createUser() {
    await connectDB();

    const email = "admin@geoneeds.info";
    const password = "GeoNeeds";
    const hashedPassword = await bcrypt.hash(password, 10); // ✅ Added salt rounds

    // Check if user already exists
    const existingUser = await User.findOne({email});
    if (existingUser) {
        console.log("⚠️ User already exists:", existingUser);
        process.exit();
    }

    const user = new User({
        name: "Admin User",
        email,
        password: hashedPassword,
        role: "admin",
    });

    await user.save();
    console.log("✅ User created:", user);
    process.exit();
}

createUser().catch((error) => {
    console.error("❌ Error creating user:", error);
    process.exit(1);
});
