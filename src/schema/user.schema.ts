import {object,string,ref} from "yup";
export const createUserSchema = object({
    body:object({
        name:string()
        .required("Name is required")
        .min(6,"Password is too short -should be 6 chars minimum")
        .matches(/^[a-zA-Z0-9_.-]*$/,"Password can only contain letters"),
        passwordConfirmation:string().oneOf(
            [ref("password"),null],
            "Password must match"
        ),
        email:string()
        .required("Email is required"),

    }),
});

export default createUserSchema;