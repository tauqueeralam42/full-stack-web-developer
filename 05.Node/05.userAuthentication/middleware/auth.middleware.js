import jwt from "jsonwebtoken";

const isLoggedIn = (req,res,next) => {

    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1] || "";

        console.log("Token found: ", token ? "Yes" : "No");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        // Verify the token and extract user information
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decode data : ", decoded);

        // Attach user information to the request object
        req.user = decoded;
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            err: error.message,
            error: "Error in user verification",
        });
        
    }

    next();
}

export { isLoggedIn}