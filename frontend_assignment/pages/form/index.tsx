import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function Form() {

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last name is required'),
        age: Yup.number()
            .typeError('age must be a number')
            .positive('age must be greater than zero')
            .required('Age is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        address: Yup.string()
            .required('Address is required')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        console.log(JSON.stringify(data, null, 4));
        return false;
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-center">
                <div className="col-lg-6 col-md-6 col-s-12">
                    <div className="card">
                        <h5 className="card-header">ZKU - Form Validation Example</h5>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.email?.message}</div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.firstName?.message}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input name="lastName" type="text" {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.lastName?.message}</div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-lg-4 col-md-4 col-sm-12">
                                        <label>Age</label>
                                        <input name="age" type="text" {...register('age')} className={`form-control ${errors.age ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.age?.message}</div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input name="address" type="text" {...register('address')} className={`form-control ${errors.address ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.address?.message}</div>
                                    </div>
                                </div>

                                <br />
                                <div className="form-row d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form