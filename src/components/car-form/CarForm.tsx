import {useForm} from "react-hook-form";
import './CarForm.css'

type FormProps = {
    brand: string;
    price: number;
    year: number;
}

const CarForm = () => {
    const {handleSubmit, register} = useForm<FormProps>();

    const submitHandler = (formData: FormProps) => {
        console.log(formData);
    }

    return (
        <form className='flex flex-col gap-6' onSubmit={handleSubmit(submitHandler)}>
            <div className='input-wrap'>
                <input type="text" {...register('brand')}/>
                <div className="label">Brand</div>
            </div>
            <div className='input-wrap'>
                <input type="text" {...register('year')}/>
                <div className="label">Year</div>
            </div>
            <div className='input-wrap'>
                <input type="text" {...register('price')}/>
                <div className="label">Price</div>
            </div>

            <button>Add Car</button>
        </form>
    );
};

export default CarForm;