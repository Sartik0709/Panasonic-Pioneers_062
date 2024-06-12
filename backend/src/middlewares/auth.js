import jwt from "jsonwebtoken"

const auth = async (req, res, next) => {
    try {
        //Extract the JWT token from the authorization header
        const token = req.headers.authorization.split(" ")[1];

        //Check if token is missing
        if (!token) {
            return res.status(401).json({ message: "Token is not provided. Please provide a token." });
        }

        //Verify the token
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
            console.log("decode :", decoded)
            if (err) {
                return res.status(403).json({ message: "Invalid or expired token." });
            }

            //Set the user information in the request object
            req.user = decoded;
            next();
        });
    } catch (error) {
        console.error("Error in auth middleware:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export default auth;