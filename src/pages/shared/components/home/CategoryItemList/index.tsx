const Item = () => {
    return <div className="bg-primary w-32 h-32">hshshs</div>
}

const CategoryItemList = () => {
    return <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-secondary">
        {[1, 2, 3, 4, 5, 6].map((e, i) => <Item key={`category-item-${i}`} />)}</div>
}

export default CategoryItemList;