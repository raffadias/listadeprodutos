import './styles.css';

interface ProductProps {
    name: string;
    description: string;
    image: {
        url: string,
        alt: string
    }
}
export function ProductCard({name, description, image} : ProductProps) {
    return (
        <div className="card">
            <img className="productImg" src={image.url} alt={image.alt} />
            <h2 className="name">{name}</h2>
            <span className="description">{description}</span>
        </div>
    );
}