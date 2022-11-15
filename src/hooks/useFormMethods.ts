import { useForm } from 'react-hook-form';

export const useFormMethods = () => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: { checkBox: [] },
  });

  return {
    methods,
  };
};
