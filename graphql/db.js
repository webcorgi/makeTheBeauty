export const people = [
    {
        id:0,
        email: "dh@dh.com",
        pw:'123456@',
        name: "dh"
    },
    {
        id:1,
        email: "dh2@dh2.com",
        pw:'123456@2',
        name: "dh2"
    },
]

/* 
export const goods = [
    {
        id:0,
        name: 'shampoo',
    },
    {
        id:1,
        name: 'conditioner',
    },
]


export const color = [
    {
        id:0,
        name:'orange'
    },
    {
        id:1,
        name:'red'
    },
    {
        id:2,
        name:'purple'
    },
    {
        id:3,
        name:'blue'
    },
    {
        id:4,
        name:'green'
    },
]


export const incense = [
    {
        id:0,
        name:'soap'
    },
    {
        id:1,
        name:'hallabong'
    },
    {
        id:2,
        name:'lime'
    },
    {
        id:3,
        name:'marine Galaxy'
    },
    {
        id:4,
        name:'rape flower'
    },
]
 */



// id 기준으로 유저정보 가져오기
export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}
/* 
export const getGoodsId = id => {
    const filterGoods = goods.filter(goods => goods.id === id)
    return filterGoods[0];
}
export const getColorId = id => {
    const filterColor = Color.filter(color => color.id === id)
    return filterColor[0];
} */