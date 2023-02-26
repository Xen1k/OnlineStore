import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import './AddProduct.scss';

interface IAddProductViewProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddProductView: React.FC<IAddProductViewProps> = ({ onSubmit, onInput }) => (
    <Container className='add-product-container'>
        <Row>
            <h1>Добавить новый товар</h1>
            <Form validated={false} style={{ width: 600 }} onSubmit={(e) => onSubmit(e)}>
                <Form.Group className='add-product-group'>
                    <Form.Label>Название</Form.Label>
                    <Form.Control required onChange={onInput} type='text' name='name' />
                </Form.Group>
                <Form.Group className='add-product-group'>
                    <Form.Label>Категория</Form.Label>
                    <Form.Control onChange={onInput} as='select' name='category'>
                        <option value='other'>Другое</option>
                        <option value='clothes'>Одежда</option>
                        <option value='electronics'>Электороника</option>
                        <option value='household'>Быт</option>
                        <option value='furniture'>Мебель</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='add-product-group'>
                    <Form.Label>Цена</Form.Label>
                    <Form.Control required onChange={onInput} min={0} type='number' name='price' />
                </Form.Group>
                <Form.Group className='add-product-group'>
                    <Form.Label>Главное изображение</Form.Label>
                    <Form.Control required onChange={onInput} type='file' name='mainImage' />
                </Form.Group>
                <Form.Group className='add-product-group'>
                    <Form.Label>Короткое описание</Form.Label>
                    <Form.Control
                        required
                        onChange={onInput}
                        maxLength={50}
                        style={{ height: 100, resize: 'none' }}
                        as='textarea'
                        name='shortDescription'
                    />
                    <Form.Text className='text-muted d-none d-sm-block'>Будет отображаться на странице со списком товаров</Form.Text>
                </Form.Group>
                <Form.Group className='add-product-group'>
                    <Form.Label>Описание</Form.Label>
                    <Form.Control
                        required
                        onChange={onInput}
                        maxLength={500}
                        style={{ height: 200, resize: 'none' }}
                        as='textarea'
                        name='fullDescription'
                    />
                </Form.Group>

                <Button type='submit'>Добавить товар</Button>
            </Form>
        </Row>
    </Container>
);

export default AddProductView;
