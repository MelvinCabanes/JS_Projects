'use client'

import { useCallback, useState } from "react";
import { 
    FieldValues,
    useForm,
    SubmitHandler
} from "react-hook-form"

import Input from "@/app/components/inputs/Input";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    //USE THE VARIANT VARIABLE AND SET THE DEFAULT VALUE INTO LOGIN
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(()=>{
        if(variant == 'LOGIN'){
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    },[variant]);

    const {
        //extraction
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if(variant == 'REGISTER'){
            //axios Register
        }

        if(variant == 'LOGIN'){
            //NextAuth SignIn
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        //NextAuth Social Sign In
    }


    return(
        <div
            className="
            mt-8
            sm:mx-auto
            sm:w-full
            sm:max-w-md
            "
        >
            <div
                className="
                bg-white
                px-4
                py-8
                shadow
                sm:rounded-lg
                sm:px-10
                "
            >
                <form
                    className="space-y-6"
                    //handleSubmit came from the extraction of useForm
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input label="Email"/>
                </form>
            </div>
            

        </div>
    );
} 
export default AuthForm;