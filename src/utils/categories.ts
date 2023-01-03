import products from './products.json';

const { nodes } = products.data;
const categoriesList = nodes.map((item) => item.category);
const categoriesWithoutDuplicity = new Set();

const categories = categoriesList.filter((item) => {
    if (categoriesWithoutDuplicity.has(item._id)) {
        return false;
    } else {
        categoriesWithoutDuplicity.add(item._id);
        return true;
    }
});

export default categories;

