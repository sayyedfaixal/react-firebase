import React from 'react'
import SignImg from "../Images/sign.svg"

const SignInImage = () => {
    return (
        <>
            <div className="right_data mt-5" style={{ width: "100%" }}>
                <div className="sign_img mt-5">
                    <img src={SignImg} style={{ maxWidth: 400 }} alt="" />
                </div>
            </div>
        </>
    )
}

export default SignInImage