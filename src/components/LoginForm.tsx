import { Button, ButtonGroup, Checkbox, Form, TextField } from "@adobe/react-spectrum";
import { useCallback } from "react";

export function LoginForm({ handleSubmit }: LoginFormProps) {
    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const email = e.currentTarget.email.value
        const password = e.currentTarget.password.value
        const rememberMe = e.currentTarget.rememberMe.checked

        handleSubmit({ email, password, rememberMe })
    }, [])

    return (
        <Form maxWidth="size-3600" onSubmit={onSubmit}>
            <TextField name="email" label="Email" />
            <TextField name="password" label="Password" />
            <Checkbox name="rememberMe">Remember me</Checkbox>
            <ButtonGroup>
                <Button type="submit" variant="primary">Submit</Button>
            </ButtonGroup>
        </Form>
    )
}

interface LoginFormProps {
    handleSubmit: (data: Form) => void;
}

interface Form {
    email?: string;
    password?: string;
    rememberMe?: boolean;
}