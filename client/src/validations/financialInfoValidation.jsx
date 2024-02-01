import * as Yup from 'yup';

export const financialInfovalidationSchema = Yup.object().shape({
    status: Yup.string().required('status is required'),
    additonal: Yup.string().required('Additional data is required'),
});
