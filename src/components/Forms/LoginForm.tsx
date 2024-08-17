import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {NextRouter, useRouter} from 'next/router';
import {FormInputWithErrors, Form, FormAction} from '../../components';
import {useInputValidation, IUseValidators, useIsMounted} from '../../hooks';
import {ClientAPI, LoginFormState, defaultLoginFormState} from '../../client-api';

export default function LoginForm(): React.JSX.Element {
  const router: NextRouter = useRouter();
  const isMounted: boolean = useIsMounted();
  const [hasError, setHasError] = useState<boolean>(false);
  const [usernameErrors, setUsernameErrors] = useState<string[]>([]);
  const [isFormValid, setIsFormValid] = useState<boolean | null>(null);
  const [formState, setFormState] = useState<LoginFormState>(defaultLoginFormState);

  const validatedEmail: IUseValidators = useInputValidation({
    property: 'email',
    value: formState.email
  });

  //  event handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {value} = e.target;
    const name = e?.target?.getAttribute('id') ?? '';
    setFormState({...formState, [name]: value});
  };

  const handleLogin = async (e: React.SyntheticEvent): Promise<void> => {
    e?.preventDefault();
    e?.stopPropagation();

    await ClientAPI.Supervisors.Login({
      router,
      formState,
      setHasError,
      setFormState
    });
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLFormElement>): void => {
    if (e.key === 'Enter' && isFormValid) {
      e.preventDefault();
      e.stopPropagation();
      handleLogin(e);
    }
  };

  // Field validation
  useEffect(() => {
    if (isMounted) {
      validatedEmail.validate();
    }
    // eslint-disable-next-line
  }, [formState.email]);

  // Form validation
  useEffect(() => {
    if (isMounted) {
      const isUsernameValid: boolean = validatedEmail.validated;

      if (isUsernameValid) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    }
    // eslint-disable-next-line
  }, [formState, validatedEmail.validated]);

  // Update the form state when input errors occur
  useEffect(() => {
    if (isMounted) {
      if (validatedEmail.error.length > 0 && formState.email !== '') {
        setUsernameErrors(validatedEmail.error.map(error => Object.values(error)[0]));
      } else {
        setUsernameErrors([]);
      }
    }
    // eslint-disable-next-line
  }, [validatedEmail.error]);

  return isMounted ? (
    <Form onEnter={handleEnter}>
      <FormInputWithErrors
        label="Email"
        type="text"
        id="email"
        required
        placeholder="Enter your email"
        value={formState.email ?? ''}
        // eslint-disable-next-line
        // @ts-ignore
        onChange={handleInputChange}
        onBlur={validatedEmail.validate}
        errors={usernameErrors ?? []}
      />

      <FormInputWithErrors
        label="Password"
        type="password"
        id="password"
        required
        placeholder="Enter your password"
        value={formState.password ?? ''}
        // eslint-disable-next-line
        // @ts-ignore
        onChange={handleInputChange}
      />

      <FormAction
        label="Login"
        hasError={hasError}
        onAction={handleLogin}
        isValid={isFormValid ?? false}
      />

      <p className="mt-4 mb-2">
        Forgot password?{' '}
        <Link href={'/reset-password'} className="text-blue-500 hover:text-accent">
          Reset Credentials.
        </Link>
      </p>
    </Form>
  ) : (
    <></>
  );
}
