import { Button, ButtonGroup, Checkbox, Content, Form, Heading, InlineAlert, TextField } from "@adobe/react-spectrum";
import { useCallback, useState } from "react";

export function LoginForm({ handleSubmit }: LoginFormProps) {
    let [isInvalid, setInvalid] = useState<boolean>(false);

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const email = e.currentTarget.email.value
        const password = e.currentTarget.password.value
        const rememberMe = e.currentTarget.rememberMe.checked

        handleSubmit({ email, password, rememberMe })
    }, [])

    return (
        <Form
            validationBehavior="native"
            onInvalid={e => {
                e.preventDefault();
                setInvalid(true);
            }}
            maxWidth="size-3600" onSubmit={onSubmit}
        >
            {isInvalid ? (
                <InlineAlert variant="negative" autoFocus>
                    <Heading>Unable to submit</Heading>
                    <Content>
                        Please fix the validation errors below, and re-submit the form.
                    </Content>
                </InlineAlert>
            ) : <></>}

            <TextField name="email" label="Email" isRequired={true} />
            <TextField name="password" label="Password" isRequired={true} />
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