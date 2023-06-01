import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {

    const [items , setItems] = useState([])
    useEffect(() => {
        fetch('https://6459de8a65bd868e930a61c0.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr)
            })
    }, [])
    window.scroll(0, 0)

    return (
        <>
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {items.map((obj) => (
                        <PizzaBlock
                            {...obj}
                        />
                    ))}
                </div>
        </>
    );
};

export default Home;