import { useState } from 'react';
import AddProductView from './AddProductView';
import axios from 'axios';
import { serverUrl } from '../../preferences';
import { ProductData } from '../../commonTypes';

const AddProductController = (): JSX.Element => {
    const [values, setValues] = useState<ProductData>({
        name: '',
        category: 'other',
        price: 0,
        shortDescription: '',
        fullDescription: '',
        mainImage: undefined,
        id: Math.random() * Number.MAX_SAFE_INTEGER,
    });

    const onInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.files) {
            setValues({ ...values, mainImage: event.target.files[0] });
        } else {
            setValues({ ...values, [event.target.name]: event.target.value });
        }
    };

    const getFormData = (obj: object) => {
        let formData: FormData = new FormData();
        Object.entries(obj).forEach(([key, value]) => formData.append(key, value));
        return formData;
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${serverUrl}/add-product`,
            data: getFormData(values),
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        window.location.reload();
    };

    return <AddProductView onSubmit={onSubmit} onInput={onInput} />;
};

export default AddProductController;
