import React, {useState} from 'react';

const Categories = () => {
    const [activeIndex , setActiveIndex] = useState(0)

    const onClickCategories = (index) => {
        setActiveIndex(index)
    }

    const categories = ['Все' , 'Мясные' , 'Вегетарианская' , 'Гриль' , 'Острые' , 'Закрытые'  ]

    return (
        <div>
            <div className="categories">
                <ul>
                    {categories.map((value, i) => (
                            <li onClick={() => onClickCategories(i)} className={activeIndex === i ? 'active' : ''}>{value}</li>
                        ))  }
                </ul>
            </div>

        </div>
    );
};

export default Categories;