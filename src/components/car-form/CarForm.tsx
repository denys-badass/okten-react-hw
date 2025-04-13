import {useForm} from "react-hook-form";
import './CarForm.css'
import {carValidator} from "../../validators/car.validator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carsService} from "../../api/cars.service.ts";

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
        mode: "onBlur",
        resolver: joiResolver(carValidator)
    });

    const submitHandler = (formData: FormProps) => {
        carsService.postCar(formData).then(car => {
            console.log(car);
        });
    }

    return (
        <form className='flex flex-col gap-6' onSubmit={handleSubmit(submitHandler)}>
            <div className='input-wrap'>
                <input className={`${errors.brand && 'not-valid'}`} type="text" {...register('brand')}/>
                {errors.brand ? <div className={'label not-valid'}>{errors.brand.message}</div>: <div className={'label'}>Brand</div>}

            </div>
            <div className='input-wrap'>
                <input className={`${errors.year && 'not-valid'}`} type="text" {...register('year')}/>
                {errors.year ? <div className={'label not-valid'}>{errors.year.message}</div>: <div className={'label'}>Year</div>}
            </div>
            <div className='input-wrap'>
                <input className={`${errors.price && 'not-valid'}`} type="text" {...register('price')}/>
                {errors.price ? <div className={'label not-valid'}>{errors.price.message}</div>: <div className={'label'}>Price</div>}
            </div>

            <button disabled={!isValid}>Add Car</button>
        </form>
    );
};

export default CarForm;