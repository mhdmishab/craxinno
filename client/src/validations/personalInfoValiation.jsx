import * as Yup from 'yup';

export const personalInfovalidationSchema = Yup.object().shape({
    titles: Yup.string().required('title is required'),
    name: Yup.string()
        .required('Full name is required')
        .transform((value, originalValue) => {
            return originalValue.trim().replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
        }),
    dateOfBirth: Yup.date()
        .max(new Date(), 'Date of birth cannot be a future date')
        .required('Date of birth is required'),
    address: Yup.string().required('Address is required'),
    lived: Yup.string().required('Length of stay is required'),
    about: Yup.string().required('Tell us about yourself is required'),
});
