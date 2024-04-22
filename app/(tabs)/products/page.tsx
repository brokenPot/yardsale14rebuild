import ListProduct from "@/components/list-product";
import client from "@/lib/client";

async function getProducts() {
const products = await client!.product.findMany({
    select: {
        title: true,
        price: true,
        createdAt: true,
        image: true,
        id: true,
    },
});
return products;
}

export default async function Products() {
    const products = await getProducts();
    return (
<div className="p-5 flex flex-col gap-5">
    {products.map((product) => (
        <ListProduct key={product.id} {...product} />
    ))}
</div>
);
}