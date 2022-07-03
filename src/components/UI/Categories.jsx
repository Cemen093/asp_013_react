import {Button, Container} from "react-bootstrap";

const Categories = ({categories, isCategoriesLoading, categoriesError, setCurrentCategory}) => {
    if (categoriesError)
        return (
            <>
                <h3>При загрузке категорий произошла ошибка ${categoriesError}</h3>
            </>
        );

    if (isCategoriesLoading)
        return (
            <>
                <h3>Загрузка категорий</h3>
            </>
        );

    return (
        <>
            <Container className="text-center mt-3">
                {categories.map((category, idx) =>
                    <Button
                        variant="primary"
                        onClick={event => {
                            setCurrentCategory(category.id)
                        }}
                        className="me-2"
                        key={idx}
                    >
                        {category.title}
                    </Button>
                )}
            </Container>
        </>
    )
}

export default Categories;