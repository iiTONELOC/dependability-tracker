import {makeToast, ToastTypes} from '../../components';
import {ResetPasswordFormState} from '../../components/Forms/ResetPassword';

export async function ResetPassword(formState: ResetPasswordFormState): Promise<void> {
  try {
    const response = await fetch('/api/reset-password', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formState)
    });
    const {error, data} = await response.json();

    if (!response.ok || error) {
      if (response.status === 429) {
        makeToast({
          type: ToastTypes.Error,
          title: 'Too Many Requests',
          message: 'Please wait a moment before trying again.'
        });
        return;
      } else {
        throw new Error(error ?? 'Failed to reset password');
      }
    }

    makeToast({
      type: ToastTypes.Success,
      title: 'Password Reset',
      message: 'A credential-creation invite has been sent to your registered email.'
    });

    return data;
  } catch (error) {
    makeToast({
      type: ToastTypes.Error,
      title: 'Password Reset',
      message: String(error)
    });

    return;
  }
}
