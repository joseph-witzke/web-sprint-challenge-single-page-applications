import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required("name is required")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(["small", "medium", "large"]),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    mushroom: yup.boolean(),
    ham: yup.boolean(),
    special: yup
        .string(),
});