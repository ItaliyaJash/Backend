// import {asyncHandler} from "../utils/asyncHandler.js"

// const registerUser = asyncHandler ( async (res, req) => {
//     res.status(200).json({
//         success: true,
//         message: "chai aur code"
//     })
// } )

// export { registerUser }



import { asyncHandler } from "../utils/asyncHandler.js"

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        success: true,
        message: "chai aur code"
    });
});

export { registerUser }