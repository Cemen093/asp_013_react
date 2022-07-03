import {Card, Button, Row, Col, Nav, Badge, Container} from 'react-bootstrap'
import {useEffect, useState} from "react";
import {useFetching} from "../../hooks/useFetching";
import HitService from "../../API/HitService";
import Categories from "../Categories";
import Products from "../Products";

const Home = () => {
/*    const products = [
        {
            id: 1,
            title: "title_1",
            description: "description_1",
            url: "https://image.shutterstock.com/image-photo/women-body-bra-breast-boobs-600w-1234546105.jpg",
            price: 3,
            categoryId: 1,
        },
        {
            id: 2,
            title: "title_2",
            description: "description_2",
            url: "https://image.shutterstock.com/image-photo/women-body-bra-breast-boobs-600w-1234546105.jpg",
            price: 100,
            categoryId: 2,
        },
        {
            id: 3,
            title: "title_3",
            description: "description_3",
            url: "https://image.shutterstock.com/image-photo/women-body-bra-breast-boobs-600w-1234546105.jpg",
            price: 450,
            categoryId: 3,
        },
        {
            id: 4,
            title: "title_4",
            description: "description_4",
            url: "https://image.shutterstock.com/image-photo/women-body-bra-breast-boobs-600w-1234546105.jpg",
            price: 315,
            categoryId: 3,
        },
        {
            id: 5,
            title: "title_5",
            description: "description_5",
            url: "https://image.shutterstock.com/image-photo/women-body-bra-breast-boobs-600w-1234546105.jpg",
            price: 228,
            categoryId: 2,
        },
        {
            id: 6,
            title: "title_6",
            description: "description_6",
            url: "https://image.shutterstock.com/image-photo/women-body-bra-breast-boobs-600w-1234546105.jpg",
            price: 150,
            categoryId: 1,
        }
    ]*/

    /*const categories = [{id: 1, title: "category_ 1"}, {id: 2, title: "category_ 2"}, {id: 3, title: "category_ 3"}];*/

    const [categories, setCategories] = useState([]);
    const [fetchCategories, isCategoriesLoading, categoriesError] = useFetching(async () => {
        const response = await HitService.getCategories()
        setCategories(response)
    })
    useEffect(() => {
        fetchCategories();
    }, [])

    const [products, setProducts] = useState([]);
    const [fetchProducts, isProductsLoading, productsError] = useFetching(async () => {
        const response = await HitService.getProducts();
        setProducts(response);
    })
    useEffect(() => {
        fetchProducts();
    }, [])

    const [currentCategory, setCurrentCategory] = useState(1);

    return (
        <>
            <Container>
                <Categories
                    categories={categories}
                    isCategoriesLoading={isCategoriesLoading}
                    categoriesError={categoriesError}
                    setCurrentCategory={setCurrentCategory}
                />

                <Products
                    products={products}
                    categories={categories}
                    isProductsLoading={isProductsLoading}
                    productsError={productsError}
                    currentCategory={currentCategory}
                />
            </Container>
        </>
    )
}

export default Home;