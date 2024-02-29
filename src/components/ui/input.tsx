"use client";

import { InputHTMLAttributes } from "react";

interface InputPropss extends InputHTMLAttributes<HTMLInputElement> {

}

const Input = (props: InputPropss) => {
    return <input {...props} />
}

export { Input }