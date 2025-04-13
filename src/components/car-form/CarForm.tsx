import {useForm} from "react-hook-form";
import './CarForm.css'

type FormProps = {
    brand: string;
    price: number;
    year: number;
}

const CarForm = () => {
    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<FormProps>({
        mode: "onBlur"
    });

    const submitHandler = (formData: FormProps) => {
        console.log(formData);
    }

    return (
        <form className='flex flex-col gap-6' onSubmit={handleSubmit(submitHandler)}>
            <div className='input-wrap'>
                <input className={`${errors.brand && 'not-valid-input'}`} type="text" {...register('brand', {
                    required: {value: true, message: 'Cant be empty'},
                    pattern: {value: /^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/, message: 'Wrong brand name'}
                })}/>
                {errors.brand ? <div className={'label not-valid'}>{errors.brand.message}</div>: <div className={'label'}>Brand</div>}

            </div>
            <div className='input-wrap'>
                <input className={`${errors.year && 'not-valid-input'}`} type="text" {...register('year', {
                    required: {value: true, message: 'Cant be empty'},
                    min: {value: 1990, message: 'Year cant be less than 1990'},
                    max: {value: 2025, message: 'Year cant be more than 2025'}
                })}/>
                {errors.year ? <div className={'label not-valid'}>{errors.year.message}</div>: <div className={'label'}>Year</div>}
            </div>
            <div className='input-wrap'>
                <input className={`${errors.price && 'not-valid-input'}`} type="text" {...register('price', {
                    required: {value: true, message: 'Cant be empty'},
                    min: {value: 0, message: 'Year cant be less than 0'},
                    max: {value: 1_000_000, message: 'Year cant be more than 1 000 000'}
                })}/>
                {errors.price ? <div className={'label not-valid'}>{errors.price.message}</div>: <div className={'label'}>Price</div>}
            </div>

            <button disabled={!isValid}>Add Car</button>
        </form>
    );
};

export default CarForm;